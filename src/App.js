import React from "react";
import "./styles.css";
import SearchMovies from "./SearchMovies";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    </>
  );
}
