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

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className="Dashboard-Grid-Container">
        <Grid item xs={2} className="Child-Grid-Container">
          <Item
            className="Child-Grid-Item"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <Grid
              item
              xs={12}
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              className="Item-Child-Grid-Container"
            >
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
        <Grid item xs={10} className="Child-Grid-Container">
          <Item className="Child-Grid-Item">xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
