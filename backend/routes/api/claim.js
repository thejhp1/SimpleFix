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

//CREATE CLAIM
router.post("/", async (req, res, next) => {
    let { ticketId, number, labor, part, mileage, status} = req.body

    const claim = await Claim.create({
        ticketId,
        number,
        labor,
        part,
        mileage,
        status
    })

    return res.json({claim: claim})
})

//UPDATE CLAIM
router.put("/", async (req, res, next) => {
    let { claimId, number, labor, part, mileage, status} = req.body
    const claim = await Claim.findOne({
        where: {
            id: claimId
        },
        include: {
            model: Ticket
        }
    })

    if (number) {
        claim.number = number
    }
    if (labor) {
        claim.labor = labor
    }
    if (part) {
        claim.part = part
    }
    if (mileage) {
        claim.mileage = mileage
    }
    if (status) {
        claim.status = status
    }

    await claim.save()

    return res.json({claim: claim})
})

module.exports = router;
