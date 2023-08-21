import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const bannerStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "1.5rem",
};
const contentStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  "@media (max-width: 767px)": {
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
  },
  "@media (max-width: 567px)": {
    alignContent: "flex-end",
  },
};
const posterStyle = {
  width: "23rem",
  height: "100%",
};
const detailStyle = {
  width: "20rem",
  height: "100%",
};

const NewMoviesItem = ({ newMovie }) => {
  return (
    <Paper>
      <Box sx={bannerStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w780${newMovie.backdrop_path}`}
          alt={newMovie.original_title}
        />
      </Box>
      <Box sx={contentStyle}>
        <Box sx={posterStyle}>
          <img
            src={`https://image.tmdb.org/t/p/w342${newMovie.poster_path}`}
            alt={newMovie.original_title}
          />
        </Box>
        <Box sx={detailStyle}>
          <Typography variant="h4">{newMovie.title}</Typography>
          <Typography variant="body1">{newMovie.vote_average} ⭐</Typography>
          <Typography variant="body1">{newMovie.overview}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewMoviesItem;
