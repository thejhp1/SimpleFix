const express = require("express");
const { Claim, Ticket } = require("../../db/models")
const { requireAuth } = require("../../utils/auth")
const router = express.Router();

//GET ALL CLAIMS
router.get("/", async (req, res, next) => {
    const claims = await Claim.findAll({
        include: {
            model: Ticket
        }
    })
    
    return res.json({claims: claims})
})

module.exports = router;
