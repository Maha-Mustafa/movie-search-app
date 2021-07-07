import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  //2 states input query and movie
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    // console.log("submitted");
    // const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a8f8fbab7f1b75cd1c96348840a7a9f4&language=en-US&query=${query}&page=1&include_adult=false`;
    // using try: try this code anf if it fails do something
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          name="query"
          placeholder="i.e Jurassic Park"
        />
        <button className="button" type="submit">
          SEARCH
        </button>
      </form>
      {/* <div className="card-list">{movies.map((movie) => movie.title)}</div> */}
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
