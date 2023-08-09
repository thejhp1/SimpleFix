const express = require("express");
const { Ticket, Customer, Part } = require("../../db/models")
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();
const { requireAuth } = require("../../utils/auth")

router.get("/", async (req, res, next) => {
    const tickets = await Ticket.findAll({
        include: [{
            model: Customer
        },
        {
            model: Part
        }
    ]
    })
    
    return res.json({
        Tickets: tickets
    })
})

module.exports = router;
