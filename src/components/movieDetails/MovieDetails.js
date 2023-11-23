import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
// import '..movieDetails/MovieDetails.css'

const MovieDetails = () => {
  const [movied, setMovied] = useState([]);
  const { id } = useParams();
  const {token}=useContext(LoginContext);
  const [wl,setWl]=useState(false);

  const handWatchList=()=>{
    console.log(movied.id)
    const data={
      email:token.email,
      movieWatchList:[movied.id]
    }
    axios.post("http://localhost:1234/user/",data)
    .then((res)=>{
      console.log("success")
    })
    .catch((err)=>{
      console.log(err);
    })
  }

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

  useEffect(()=>{
    axios.get(`http://localhost:1234/user/${token.email}`)
       .then((res) => {
         const movieWatchList = res.data[0].movieWatchList;
         
         for (const e of movieWatchList) {
           console.log(e, "hello");
           if (e === id) {
             console.log("yes");
             setWl(true)
             // Do something when the condition is true
             return; // Break out of the loop
           } else {
             console.log("no");
             setWl(false);
           }
         }
       })
  },[])


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
        style={{ position: "absolute", bottom: "8px", left: "16px", color:"white", fontSize:'100px',fontWeight:'bold'}}
      >
        {movied.title}
      <p onClick={handWatchList} className="watchlist"> {
       
     console.log(wl)
   }
      sdfsf
     </p>
      </div>
    </div>
  );
};

export default MovieDetails;
