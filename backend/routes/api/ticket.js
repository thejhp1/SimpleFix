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

module.exports = router;
