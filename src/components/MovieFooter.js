import React from "react";
import { Typography, Box } from "@mui/material";

const footerStyle = {
  backgroundColor: "#cccccc",
  textAlign: "center",
  padding: "1rem",
};

const MovieFooter = () => {
  return (
    <Box>
      <Typography variant="body2" sx={footerStyle}>
        Made with ❤️ by Siva
      </Typography>
    </Box>
  );
};

export default MovieFooter;
