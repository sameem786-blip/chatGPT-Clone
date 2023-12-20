import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
  transition: "background-color 0.3s",
}));

const Item1 = styled(Paper)(({ theme }) => ({
  borderRadius: "10px", // Transition for smoother hover effect
  "&:hover": {
    backgroundColor: "#202123", // Change this to your desired hover background color
    color: "white",
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
            <Grid item xs={12} className="Item-Child-Grid-Container">
              <Item1
                className="Item-Child-Grid-Item"
                elevation={0}
              >
                Hello
              </Item1>
              <Item1
                className="Item-Child-Grid-Item"
                elevation={0}
              >
                World
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
