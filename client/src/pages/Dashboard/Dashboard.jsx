import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
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
              <Item
                className="Item-Child-Grid-Item"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Hello
              </Item>
              <Item
                className="Item-Child-Grid-Item"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                World
              </Item>
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
