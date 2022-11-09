const router = require("express").Router();

router.use("/auth", require("./auth.routes"));
const { isLoggedIn } = require("./../middlewares/middlewares");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", (req, res, next) => {
  console.log(req.session);
  res.render("profile", { currentUser: req.session.currentUser });
});

router.get("/main", isLoggedIn, (req, res, next) => {
  res.render("main");
});

module.exports = router;
