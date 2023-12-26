import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import openaispiral from "../../public/openaispiral.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StartIcon from "@mui/icons-material/Start";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GreenOpenAi from "../../public/greenopenai.webp";
import Axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
  transition: "background-color 0.3s",
}));

const Item1 = styled(Paper)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "transparent",
  color: "white", // Transition for smoother hover effect
  "&:hover": {
    backgroundColor: "#202123",
  },
}));

const chat = {
  prompt: "Suggest me some topics for an article on javascript",
  response: `Certainly! Here are some potential topics for an article on JavaScript:

    Introduction to JavaScript: Cover the basics, history, and evolution of JavaScript.
    ES6 Features: Discuss various ES6 features like arrow functions, template literals, destructuring, etc.
    Asynchronous JavaScript: Explore asynchronous programming, callbacks, promises, async/await.
    Functional Programming in JavaScript: Explain functional programming concepts using JavaScript.
    JavaScript Frameworks: Dive into popular frameworks like React, Angular, or Vue.js, and their key features.
    Data Structures and Algorithms in JavaScript: Implement common data structures and algorithms using JavaScript.
    JavaScript Best Practices: Share best practices for writing clean, efficient, and maintainable code.
    Testing in JavaScript: Cover different testing frameworks like Jest or Mocha for JavaScript applications.
    JavaScript and APIs: Explain how to use JavaScript to interact with different APIs (e.g., RESTful APIs).
    JavaScript Security: Discuss common security vulnerabilities and best practices in JavaScript.

Choose a topic that aligns with your interests and expertise, or one that you think would be valuable to your audience!`,
};

const Dashboard = () => {

  const axiosInstance = Axios.create({
    withCredentials: true,
  });
  const [newChat, setNewChat] = useState(true);
  const [newPrompt, setNewPrompt] = useState("");

  const handleNewPromptChange = (e) => {
    e.preventDefault();
    setNewPrompt(e.target.value);
  }

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    console.log(newPrompt)
    if (newChat) {
      try {
        const newChatGroup = await axiosInstance.post("http://localhost:4000/auth/user/login", {
          
        })
      } catch (err) {
        
      }
    }

  }

  const handleNewChatTrigger = () => {
    setNewChat(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className="Dashboard-Grid-Container">
        <Grid item xs={2} className="Child-Grid-Container">
          <Item
            className="Child-Grid-Item"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <Grid item xs={12} className="Item-Child-Grid-Container">
              <Item1 className="Item-Child-Grid-Item" elevation={0}>
                <div className="item-div">
                  <div className="left-alignment">
                    <div className="openai-logo-circle">
                      <img
                        className="left-openai-spiral"
                        src={openaispiral}
                        alt="openai"
                      ></img>
                    </div>
                    <p className="left-item-text">New Chat</p>
                  </div>
                  <StartIcon className="icon-hover" />
                </div>
              </Item1>
              <div className="chatGroups">
                <div className="chat-group">
                  <p className="left-item-text">chatGPT</p>
                  <MoreHorizIcon className="icon-hover" />
                </div>
                
              </div>
              <Item1
                className="Item-Child-Grid-Item"
                elevation={0}
                style={{
                  marginTop: "20px",
                }}
              >
                <div className="item-div-bottom">
                  <div className="left-alignment">
                    <AccountCircleIcon className="account-circle" />
                    <p className="left-item-text">Sameem Abbas</p>
                  </div>
                  <MoreHorizIcon className="icon-hover" />
                </div>
              </Item1>
            </Grid>
          </Item>
        </Grid>
        {newChat ? (
          <Grid item xs={10} className="Child-Grid-Container">
            <Item
              className="Child-Grid-Item"
              style={{ backgroundColor: "#343541" }}
            >
              <Grid item xs={2} className="Item-Child-Grid-Container">
                <Item1 className="Item-Child-Grid-Item" elevation={0}>
                  <div className="chatgpt-heading">
                    <p className="heading">ChatGPT</p>
                    <p className="light-text">3.5</p>
                    <KeyboardArrowDownIcon className="light-text" />
                  </div>
                </Item1>
              </Grid>
              <Grid item xs={12} className="Item-Child-Grid-Container">
                <Item
                  className="Hero-Item-Child-Grid-Item"
                  elevation={0}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="hero-container">
                    <div className="hero-openai-logo-circle">
                      <img
                        className="left-openai-spiral"
                        src={openaispiral}
                        alt="openai"
                      ></img>
                    </div>
                    <p className="hero-text">How can I help you today?</p>
                  </div>
                </Item>
                <Item
                  className="Hero-Item-Child-Grid-Item"
                  elevation={0}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="chat-container">
                    <div className="chat-row">
                      <div className="custom-chat">
                        <p className="custom-chat-heading multi-line-ellipsis">
                          Plan a trip
                        </p>
                        <p className="custom-chat-prompt multi-line-ellipsis">
                          to explore the Madagascar wildlife on a budget
                        </p>
                      </div>
                      <div className="custom-chat">
                        <p className="custom-chat-heading">
                          Design a database schema
                        </p>
                        <p className="custom-chat-prompt">
                          for an online merch store
                        </p>
                      </div>
                    </div>
                    <div className="chat-row">
                      <div className="custom-chat">
                        <p className="custom-chat-heading">
                          Create a personal webpage for me
                        </p>
                        <p className="custom-chat-prompt">
                          after asking me three questions
                        </p>
                      </div>
                      <div className="custom-chat">
                        <p className="custom-chat-heading">Give me ideas</p>
                        <p className="custom-chat-prompt">
                          about how to plan my New Years resolutions
                        </p>
                      </div>
                    </div>
                    <div className="chat-row">
                      <div className="custom-input-div">
                        <input
                          className="custom-chat-input"
                          placeholder="Message ChatGPT..."
                          onChange={handleNewPromptChange}
                        ></input>
                        <ArrowUpwardIcon className="submit-prompt-btn" onClick={handlePromptSubmit } />
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Item>
          </Grid>
        ) : (
          <Grid item xs={10} className="Child-Grid-Container">
            <Item
              className="Child-Grid-Item"
              style={{ backgroundColor: "#343541" }}
            >
              <Grid item xs={2} className="Item-Child-Grid-Container">
                <Item1 className="Item-Child-Grid-Item" elevation={0}>
                  <div className="chatgpt-heading">
                    <p className="heading">ChatGPT</p>
                    <p className="light-text">3.5</p>
                    <KeyboardArrowDownIcon className="light-text" />
                  </div>
                </Item1>
              </Grid>
              <Grid item xs={12} className="Item-Child-Grid-Container">
                <Item
                  className="Hero-Item-Child-Grid-Item-short"
                  elevation={0}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="chat-group-container">
                    <div className="prompt">
                      <AccountCircleIcon className="pr-icon" />
                      <p className="prompt-text">
                        <span className="sender-name">You</span>
                        {chat.prompt}
                      </p>
                    </div>
                    <div className="response">
                      <img
                        src={GreenOpenAi}
                        className="pr-icon"
                        alt="openai"
                      ></img>
                      <p className="response-text">
                        <span className="sender-name">ChatGPT</span>
                        {chat.response}
                      </p>
                    </div>
                    <div className="prompt">
                      <AccountCircleIcon className="pr-icon" />
                      <p className="prompt-text">
                        <span className="sender-name">You</span>
                        {chat.prompt}
                      </p>
                    </div>
                    <div className="response">
                      <img
                        src={GreenOpenAi}
                        className="pr-icon"
                        alt="openai"
                      ></img>
                      <p className="response-text">
                        <span className="sender-name">ChatGPT</span>
                        {chat.response}
                      </p>
                    </div>
                  </div>
                </Item>
                <Item
                  className="Hero-Item-Child-Grid-Item-short"
                  elevation={0}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="chat-container">
                    <div className="chat-row">
                      <div className="custom-input-div-short">
                        <input
                          className="custom-chat-input"
                          placeholder="Message ChatGPT..."
                        ></input>
                        <ArrowUpwardIcon className="submit-prompt-btn" />
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard;
