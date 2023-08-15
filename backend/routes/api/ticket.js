const express = require("express");
const { Ticket, Customer, Part, Product } = require("../../db/models")
const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");
const { requireAuth } = require("../../utils/auth")
const router = express.Router();

const validateTicket = [
    check("firstName")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a first name with at least 2 characters"),
    check("lastName")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a last name with at least 2 characters."),
    check("phone")
      .exists({ checkFalsy: true })
      .isLength({ min: 10 })
      .withMessage("Please provide a valid phone number."),
    check("street")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a street with at least 2 characters."),
    check("city")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a city with at least 2 characters."),
    check("state")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a state  with at least 2 characters."),
    check("zip")
      .exists({ checkFalsy: true })
      .isLength({ min: 5 })
      .withMessage("Please provide a valid zip."),
    check("brand")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a brand with at least 2 characters."),
    check("category")
      .exists({ checkFalsy: true })
      .isIn(["Refrigeration", "Kitchen", "Cooking - Electric", "Cooking - Gas", "Laundry - Electric", "Laundry - Gas"])
      .withMessage("Please choose a valid category."),
    check("installDate")
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage("Please provide a install date with at least 6 characters."),
    check("model")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a model number with at least 2 characters."),
    check("serial")
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage("Please provide a serial number with at least 2 characters."),
    check("warrantyStatus")
      .exists({ checkFalsy: true })
      .isIn(["In Warranty", "Out of Warranty"])
      .withMessage("Please choose a valid warranty status."),
    handleValidationErrors,
];

//GET ALL TICKETS
router.get("/", async (req, res, next) => {
    const { user } = req;
    const tickets = await Ticket.findAll({
        where: {
            employeeId: user.id
        },
        include: [{
            model: Customer
        },
        {
            model: Part
        },
        {
            model: Product
        }]
    })

    return res.json({
        tickets: tickets
    })
})

//GET SINGLE TICKET
router.get("/:ticketId", async (req, res, next) => {
    const ticket = await Ticket.findOne({
        where: {
            id: req.params.ticketId
        },
        include: [{
            model: Customer
        },
        {
            model: Part
        },
        {
            model: Product
        }]
    })

    if (!ticket) {
        res.status(404);
        return res.json({
        message: "Ticket couldn't be found",
        });
    }

    return res.json({
        ticket: ticket
    })
})

//CREATE SINGLE TICKET
router.post("/", requireAuth, validateTicket, async (req, res, next) => {
    let { firstName, lastName, phone, street, city, state, zip, brand, category, installDate, model, serial, warrantyStatus } = req.body;
    const { user } = req

    const customer = await Customer.create({
        firstName,
        lastName,
        phone,
        street,
        city,
        state,
        zip
    })

    const safeCustomer = {
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone,
        street: customer.street,
        city: customer.city,
        state: customer.state,
        zip: customer.zip,
        createdAt: customer.createdAt,
        updatedAt: customer.updatedAt,
    }

    const ticket = await Ticket.create({
        employeeId: user.id,
        customerId: safeCustomer.id,
        status: "CSR-Need Schedule",
        number: ("417" + Math.floor(Math.random() * 700000))
    })

    const safeTicket = {
        id: ticket.id,
        employeeId: ticket.employeeId,
        customerId: ticket.customerId,
        status: ticket.status,
        number: ticket.number,
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt,
    }

    const product = await Product.create({
        ticketId: safeTicket.id,
        brand,
        category,
        installDate,
        modelNumber: model,
        serialNumber: serial,
        warrantyStatus
    })

    const result = await Ticket.findOne({
        where: {
            id: safeTicket.id
        },
        include: [{
            model: Customer
        },
        {
            model: Part
        },
        {
            model: Product
        }]
    })

    res.status(201)
    return res.json({
        ticket: result
    })
})

//UPDATE SINGLE TICKET
router.put("/:ticketId", requireAuth, validateTicket, async (req, res, next) => {
    let { firstName, lastName, phone, street, city, state, zip, brand, category, installDate, model, serial, warrantyStatus } = req.body;

    const customer = await Customer.findOne({
        where: {
            id: req.params.ticketId
        }
    })

    if (firstName) {
        customer.firstName = firstName;
    }
    if (lastName) {
        customer.lastName = lastName;
    }
    if (phone) {
        let formatPhone
        if (phone.length === 10) {
            formatPhone = phone.split("")
            formatPhone.splice(3,0,"-")
            formatPhone.splice(7,0,"-")
            formatPhone.join("");
        } else {
            formatPhone = phone
        }

        customer.phone = formatPhone.join("")
    }
    if (street) {
        customer.street = street;
    }
    if (city) {
        customer.city = city;
    }
    if (state) {
        customer.state = state;
    }
    if (zip) {
        customer.zip = zip;
    }

    const product = await Product.findOne({
        where: {
            ticketId: req.params.ticketId
        }
    })

    if (brand) {
        product.brand = brand;
    }
    if (category) {
        product.category = category;
    }
    if (installDate) {
        product.installDate = installDate;
    }
    if (model) {
        product.modelNumber = model;
    }
    if (serial) {
        product.serialNumber = serial;
    }
    if (warrantyStatus) {
        product.warrantyStatus = warrantyStatus;
    }

    await customer.save()
    await product.save()

    const ticket = await Ticket.findOne({
        where: {
            id: req.params.ticketId
        },
        include: [{
            model: Customer
        },
        {
            model: Part
        },
        {
            model: Product
        }]
    })
    // await ticket.save()

    return res.json({ticket: ticket})
})

module.exports = router;
