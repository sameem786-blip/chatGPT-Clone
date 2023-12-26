const express = require('express');
const router = express.Router();

// Import your User model or any other necessary modules
const User = require('../schemas/Chat');
const ChatGroup = require('../schemas/ChatGroup');
const Chat = require('../schemas/Chat');

const axios = require("axios");
// const OpenAI = require("openai")

// const client = new OpenAI({apiKey: process.env.API_KEY});

// const api_key = process.env.API_KEY;

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

    // const response = await client.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   prompt: userPrompt,
      // });
      
      const response = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Euismod in pellentesque massa placerat duis ultricies lacus sed. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Posuere ac ut consequat semper viverra nam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. A erat nam at lectus urna duis convallis. Donec pretium vulputate sapien nec sagittis. Eget duis at tellus at urna condimentum. Ullamcorper malesuada proin libero nunc consequat interdum. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Sed odio morbi quis commodo odio aenean sed. Facilisi morbi tempus iaculis urna id. Et ligula ullamcorper malesuada proin libero."

    const chatObj = {
      prompt: userPrompt,
      response: response, // Extracting response from OpenAI
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
