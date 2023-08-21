import React from "react";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const headerStyle = {
  backgroundColor: "black",
};

const navItems = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};
const titleStyle = {
  textAlign: "center",
  backgroundColor: "#de8703",
  padding: "0.2rem",
  borderRadius: "2rem",
  color: "black",
  fontWeight: "600",
  width: "8rem",
};
const titleLogo = {
  margin: "auto",
  textDecoration: "none",
};

const MovieHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={headerStyle}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={navItems}>
            <Link to="/" style={titleLogo}>
              <Typography variant="h6" component="div" sx={titleStyle}>
                Movie Nexa
              </Typography>
            </Link>
            <Link to="/new">
              <Button style={{ color: "white" }}>New Releases</Button>
            </Link>
            <Link to="/hot">
              <Button style={{ color: "white" }}>What's Hot</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MovieHeader;
