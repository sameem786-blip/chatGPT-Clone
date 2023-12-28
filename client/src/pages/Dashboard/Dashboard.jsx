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
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
  transition: "background-color 0.3s",
  backgroundColor: "transparent",
  color: "white",
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
  response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Euismod in pellentesque massa placerat duis ultricies lacus sed. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Posuere ac ut consequat semper viverra nam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. A erat nam at lectus urna duis convallis. Donec pretium vulputate sapien nec sagittis. Eget duis at tellus at urna condimentum. Ullamcorper malesuada proin libero nunc consequat interdum. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Sed odio morbi quis commodo odio aenean sed. Facilisi morbi tempus iaculis urna id. Et ligula ullamcorper malesuada proin libero.`,
};

const Dashboard = () => {
  const axiosInstance = Axios.create({
    withCredentials: true,
  });
  const [newChat, setNewChat] = useState(false);
  const [newPrompt, setNewPrompt] = useState("");

  const handleNewPromptChange = (e) => {
    e.preventDefault();
    setNewPrompt(e.target.value);
  };

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    console.log(newPrompt);
    if (newChat) {
      setNewChat(false);
    }
  };

  const handleNewChatTrigger = (e) => {
    e.preventDefault();
    setNewChat(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className="Dashboard-Grid-Container">
        <Grid
          item
          xs={2}
          sx={{ display: { xs: "none", lg: "block" } }}
          className="Child-Grid-Container"
        >
          <Item
            className="Child-Grid-Item"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <Grid item xs={12} className="Item-Child-Grid-Container">
              <div className="left-bar-container">
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
                    <StartIcon
                      className="icon-hover"
                      onClick={handleNewChatTrigger}
                    />
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
                    width: "85%",
                  }}
                >
                  <div className="item-div-bottom">
                    <div className="left-alignment">
                      <AccountCircleIcon className="account-circle" />
                      <p className="left-item-text">Sameem Abbas</p>
                    </div>

                    <MoreHorizIcon
                      id="demo-positioned-button-profile"
                      aria-controls={
                        open ? "demo-positioned-menu-profile" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="icon-hover"
                    />
                    <Menu
                      id="demo-positioned-menu-profile"
                      aria-labelledby="demo-positioned-button-profile"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="left-action-menu"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      style={{ background: "transparent" }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        className="left-menu-item"
                        style={{ color: "white", background: "#202123" }}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </Item1>
              </div>
            </Grid>
          </Item>
        </Grid>
        {newChat ? (
          <Grid item xs={12} lg={10} className="Child-Grid-Container">
            <Item
              className="Child-Grid-Item"
              style={{ backgroundColor: "#343541" }}
            >
              <Grid item xs={2} className="Item-Child-Grid-Container">
                <Item className="Item-Child-Grid-Item" elevation={0}>
                  <div className="chatgpt-heading">
                    <p className="heading">ChatGPT</p>
                    <p className="light-text">3.5</p>
                    <KeyboardArrowDownIcon
                      className="light-text"
                      style={{ height: "3vh", width: "3vw" }}
                    />
                  </div>
                </Item>
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
                        <ArrowUpwardIcon
                          className="submit-prompt-btn"
                          onClick={handlePromptSubmit}
                        />
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Item>
          </Grid>
        ) : (
          <Grid item xs={12} lg={10} className="Child-Grid-Container">
            <Item
              className="Child-Grid-Item"
              style={{ backgroundColor: "#343541" }}
            >
              <Grid item xs={2} className="Item-Child-Grid-Container">
                <Item className="Item-Child-Grid-Item" elevation={0}>
                  <div className="chatgpt-heading">
                    <p className="heading">ChatGPT</p>
                    <p className="light-text">3.5</p>
                    <KeyboardArrowDownIcon
                      className="light-text"
                      style={{ height: "3vh", width: "3vw" }}
                    />
                  </div>
                </Item>
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
                        <ArrowUpwardIcon
                          className="submit-prompt-btn"
                          onClick={handlePromptSubmit}
                        />
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
