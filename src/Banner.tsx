import { request } from "http";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const backgroundStyles = {
    backgroundSize: "cover",
    //@ts-ignore
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    //@ts-ignore
    bacgroundPosition: "center center",
  };

  function truncate(str:any, n:any) {
      return str?.length > n ? str.substr(0,n-1) + "..." : str
  }
  return (
    <header className="banner" style={backgroundStyles}>
      <div className="banner__contents">
        //@ts-ignore
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
    //@ts-ignore 
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      {/* Background image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
