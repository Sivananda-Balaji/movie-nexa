import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieHeader from "./components/MovieHeader";
import NewMovies from "./components/NewMovies";
import MovieList from "./components/MovieList";
import MovieFooter from "./components/MovieFooter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MovieHeader />
        <Routes>
          <Route path="/" element={<NewMovies />} />
          <Route path="/new" element={<NewMovies />} />
          <Route path="/hot" element={<MovieList />} />
        </Routes>
        <MovieFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
