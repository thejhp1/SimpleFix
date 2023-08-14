const express = require("express");
const { Part, Ticket } = require("../../db/models")
const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");
const { requireAuth } = require("../../utils/auth")
const router = express.Router();

router.get("/", async (req, res, next) => {
    const parts = await Part.findAll({
        include: {
            model: Ticket
        }
    })

    return res.json({parts: parts})
})

module.exports = router;
