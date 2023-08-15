const express = require("express");
const { Part, Ticket } = require("../../db/models")
const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");
const { requireAuth } = require("../../utils/auth")
const router = express.Router();

//GET ALL TICKETS
router.get("/", async (req, res, next) => {
    const parts = await Part.findAll({
        include: {
            model: Ticket
        }
    })

    return res.json({parts: parts})
})

//CREATE PART
router.post("/new", async (req, res, next) => {
    let {number, description, price, quantity, status, ticketId} = req.body


    const part = await Part.create({
        ticketId,
        number,
        description,
        price,
        quantity,
        status
    })

    return res.json({part: part})
})

router.delete("/:partId", async (req, res, next) => {
    const part = await Part.findByPk(req.params.partId)

    await part.destroy()

    return res.json({
        message: "Successfully deleted",
    });
})

//UPDATE SINGLE PART
router.put("/:partId", async (req, res, next) => {
    let { number, description, price, quantity, status } = req.body

    const part = await Part.findOne({
        where: {
            id: req.params.partId
        }
    })

    if (number) {
        part.number = number
    }
    if (description) {
        part.description = description
    }
    if (price) {
        part.price = price
    }
    if (quantity) {
        part.quantity = quantity
    }
    if (status) {
        part.status = status
    }

    await part.save()
    
    res.json({part: part})
})


module.exports = router;
