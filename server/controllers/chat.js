const express = require('express');
const router = express.Router();

// Import your User model or any other necessary modules
const User = require('../schemas/Chat');
const ChatGroup = require('../schemas/ChatGroup');
const Chat = require('../schemas/Chat');

const axios = require("axios");

const api_key = process.env.API_KEY;
const AUTH_HEADER = { Authorization: `Bearer ${api_key}` };

exports.createNewChatGroup = async (req,res) => {
    try {
        const prompt = req.body.prompt
        const userId = req.body.userId

        const chatGroupObj = {
            name: prompt,
            userId: userId,
            timeStamp: new Date
        }

        const newChatGroup = await ChatGroup.create(chatGroupObj);

        const newResponse = await axios.post(
      'https://api.chatGPT.com/v1/generate',
      { prompt },
      { headers: AUTH_HEADER }
    );

        const chatObj = {
            prompt: prompt,
            response: newResponse,// generate response by chatGPT
            timeStamp: new Date,
            like: 0,
            dislike: 0,
            groupId: newChatGroup._id
        }

        const newChat = await Chat.create(chatObj);

        const response = {
            newChatGroup,
            newChat
        }

        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json("Error Creating new Chat Group")
    }
}