const router = require("express").Router();

const userController = require("../controllers/user");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

router.get("/microsoft", userController.msAuth);
router.get("/microsoft/callback", userController.msAuthCallback);
router.get("/forget-password", userController.forgetPassword);

// router.post("/googleAuth",userController.googleAuth)
// router.post("/appleAuth",userController.appleAuth)

module.exports = router;
