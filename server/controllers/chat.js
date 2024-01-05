const express = require("express");
const router = express.Router();

// Import your User model or any other necessary modules
const User = require("../schemas/Chat");
const ChatGroup = require("../schemas/ChatGroup");
const Chat = require("../schemas/Chat");

const axios = require("axios");

exports.createNewChatGroup = async (req, res) => {
  try {
    const userPrompt = req.body.prompt;
    const userId = req.body.userId;

    const chatGroupObj = {
      name: userPrompt,
      userId: userId,
      timeStamp: new Date(),
    };

    const newChatGroup = await ChatGroup.create(chatGroupObj);

    const response =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Euismod in pellentesque massa placerat duis ultricies lacus sed. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Posuere ac ut consequat semper viverra nam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. A erat nam at lectus urna duis convallis. Donec pretium vulputate sapien nec sagittis. Eget duis at tellus at urna condimentum. Ullamcorper malesuada proin libero nunc consequat interdum. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Sed odio morbi quis commodo odio aenean sed. Facilisi morbi tempus iaculis urna id. Et ligula ullamcorper malesuada proin libero.";

    const chatObj = {
      prompt: userPrompt,
      response: response,
      timeStamp: new Date(),
      like: 0,
      dislike: 0,
      groupId: newChatGroup._id,
    };

    const newChat = await Chat.create(chatObj);

    const serverResponse = {
      newChatGroup,
      newChat,
    };

    res.status(200).json(serverResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error Creating new Chat Group");
  }
};

exports.getChatGroups = async (req, res) => {
  try {
    const chatGroups = await ChatGroup.find({
      userId: req.query.userId,
    });

    res.status(200).json({
      chatGroups,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Error fetching Chat Groups");
  }
};

exports.getGroupChats = async (req, res) => {
  try {
    const groupId = req.query.groupId;

    const chats = await Chat.find({ groupId: groupId });

    res.status(200).json({ chats });
  } catch (err) {
    console.log(err);
    res.status(500).json("Error fetching Groups Chat");
  }
};
