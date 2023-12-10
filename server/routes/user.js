const router = require("express").Router();

const userController = require("../controllers/user")

router.post("/signup",userController.signup)
router.post("/login",userController.login)
// router.post("/msAuth",userController.msAuth)
// router.post("/googleAuth",userController.googleAuth)
// router.post("/appleAuth",userController.appleAuth)



module.exports = router;