const router = require("express").Router();

const chatController = require("../controllers/chat");

router.post("/newChatGroup", chatController.createNewChatGroup);
router.get("/getChatGroups", chatController.getChatGroups);

// router.post("/googleAuth",userController.googleAuth)
// router.post("/appleAuth",userController.appleAuth)

module.exports = router;
