import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import React from "react";

const cardStyle = {
  width: "75%",
  margin: "auto",
  "@media (max-width: 938px)": {
    width: "90%",
  },
};

const gridItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "none",
};
const divderStyle = {
  marginTop: "1rem",
  width: "100%",
};

const MovieItem = ({ movies }) => {
  return (
    <Box sx={cardStyle}>
      <Grid container spacing={3}>
        {movies.map((movie) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={movie.id}>
              <Paper sx={gridItemStyle}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.original_title}
                  width="175rem"
                />
                <Typography variant="body2">{movie.vote_average} ⭐</Typography>
                <Typography variant="body2">{movie.title}</Typography>
                <Divider sx={divderStyle} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default MovieItem;
