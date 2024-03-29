const router = require('express').Router();
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');
const ticketRouter = require('./ticket.js')
const partRouter = require('./part.js')
const claimRouter = require('./claim.js')
const { restoreUser } = require("../../utils/auth.js");
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', userRouter);
router.use('/tickets', ticketRouter)
router.use('/parts', partRouter)
router.use('/claims', claimRouter)

// Add a XSRF-TOKEN cookie
router.get("/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    "XSRF-Token": csrfToken,
  });
});

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
