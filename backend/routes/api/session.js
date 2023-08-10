// backend/routes/api/session.js
const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Employee, Company } = require("../../db/models");

const router = express.Router();

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid email or username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

// Restore session user
router.get("/", async (req, res) => {
  const { user } = req;
  console.log("USERRRRRRRRRRRRRRRRRRRRRRRRRRRRR", user)
  if (user) {
    const company = await Company.findOne({
      where: {
        id: user.companyId
      }
    })
    const safeUser = {
      id: user.id,
      companyId: user.companyId,
      username: user.username,
      email: user.email,
      company: company.name,
    };
    return res.json({
      user: safeUser,
    });
  } else return res.json({ user: null });
});

// Log in
router.post("/", validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await Employee.unscoped().findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
    include: {
      model: Company
    }
  });

  if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
    const err = new Error("Login failed");
    err.status = 401;
    err.title = "Login failed";
    err.errors = { credential: "The provided credentials were invalid." };
    return next(err);
  }

  const safeUser = {
    id: user.id,
    companyId: user.companyId,
    username: user.username,
    email: user.email,
    comapny: user.Company
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

// Log out
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});


module.exports = router;
