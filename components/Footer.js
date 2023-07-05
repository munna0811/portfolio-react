import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#f06292" }}>
        <Toolbar>
          <img
            src="./Images/logo.png"
            style={{ height: "6rem", width: "5rem", margin: "0 5rem" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="tel:8881153880" style={{ color: "#fff" }}>
              <CallIcon />
            </a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="mailto:roshniawasthi2000@gmail.com"
              style={{ color: "#fff" }}
            >
              <LocalPostOfficeIcon />
            </a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="mailto:roshniawasthi2000@gmail.com"
              style={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="mailto:roshniawasthi2000@gmail.com"
              style={{ color: "#fff" }}
            >
              <GitHubIcon />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
