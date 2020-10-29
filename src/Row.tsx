import Axios from "axios";
import { request } from "https";
import React, { useEffect, useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import axios from "./axios";
import "./Row.css";



const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ isLargeRow, title, fetchUrl }:any) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //   console.log(movies)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/*kdf*/}
        {movies.map((movie: any) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
