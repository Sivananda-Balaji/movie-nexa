import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import MovieItem from "./MovieItem";

const titleStyle = {
  textAlign: "center",
  margin: "1rem",
};
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUzNWEzZTFhODJlNmZjYmQ1N2QyZDYyOGE4ZDA3NyIsInN1YiI6IjY0YWZlNGI1ZDY1OTBiMDBjN2FkZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdmG0BiTry6qm4QEszSkyDfLvWhPJhEdMxumbT5N8Do",
    },
  };

  const getMovies = async () => {
    try {
      const response = await axios.request(options);
      setMovies(response && response.data && response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Box>
      <Typography variant="h3" sx={titleStyle}>
        What's Hot 🔥
      </Typography>
      <MovieItem movies={movies} />
    </Box>
  );
};

export default MovieList;
