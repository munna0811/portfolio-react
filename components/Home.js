import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "@fontsource/roboto/400.css";
import { Typography } from "@mui/material";

export default function SimplePaper() {
  return (
    <div id="Home">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 10,
          marginBottom: 8,

          "& > :not(style)": {
            m: "auto",
            width: 353,
            height: 470,
            marginBottom: 8,
          },
        }}
      >
        <Paper elevation={10}>
          <img
            src="./Images/dp.HEIC"
            alt="dp"
            style={{ width: "22rem", height: "25 rem" }}
          />
        </Paper>
        <Typography sx={{ fontSize: 55 }}>
          Hi, My name is Roshni Awasthi. And I am a Web Developer.
        </Typography>
      </Box>
    </div>
  );
}
