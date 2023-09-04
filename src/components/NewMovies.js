import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import NewMoviesItem from "./NewMoviesItem";

const newTitleSyle = {
  textAlign: "center",
  padding: "1rem",
};
const carouselStyle = {
  marginBottom: "0.5rem",
};

const NewMovies = () => {
  const [newMovies, setNewMovies] = useState([]);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const carouselHeight = isDesktop ? "980px" : undefined;

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUzNWEzZTFhODJlNmZjYmQ1N2QyZDYyOGE4ZDA3NyIsInN1YiI6IjY0YWZlNGI1ZDY1OTBiMDBjN2FkZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdmG0BiTry6qm4QEszSkyDfLvWhPJhEdMxumbT5N8Do",
    },
  };

  const getNewMovies = async () => {
    try {
      const response = await axios.request(options);
      setNewMovies(response && response.data && response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNewMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={newTitleSyle}>
        New Releases 🍿
      </Typography>
      <Carousel sx={carouselStyle} height={carouselHeight}>
        {newMovies.map((newMovie) => {
          return <NewMoviesItem newMovie={newMovie} key={newMovie.id} />;
        })}
      </Carousel>
    </Box>
  );
};

export default NewMovies;
