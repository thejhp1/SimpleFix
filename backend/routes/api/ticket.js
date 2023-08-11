const express = require("express");
const { Ticket, Customer, Part, Product } = require("../../db/models")
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();
const { requireAuth } = require("../../utils/auth")

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
    const { user } = req;
    const ticket = await Ticket.findOne({
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
        ticket: ticket
    })
})

module.exports = router;
