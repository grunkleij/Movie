import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movied, setMovied] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=582913cbc1255e68ef241e0956a7ae7c`
      )
      .then((res) => {
        setMovied(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        className="img"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(117, 117, 117, 0), rgba(0, 0, 0, 0.58) 70%), url('https://image.tmdb.org/t/p/original//${movied.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          color: " rgb(255, 255, 255)",
        }}
      ></div>

      <div
        className="title"
        style={{ position: "absolute", bottom: "8px", left: "16px", color:"white", fontSize:'100px',fontWeight:'bold'}}
      >
        {movied.title}
      </div>
    </div>
  );
};

export default MovieDetails;
