import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import Card from '../card/Card';
import  './Watchlist.css'

const Watchlist = () => {
  const { token } = useContext(LoginContext);
  const [movies, setMovies] = useState([]);
  const [movied, setMovied] = useState([]);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    console.log('hello');
    axios.get(`http://localhost:1234/user/${token.email}`)
      .then((res) => {
        console.log(res.data[0].movieWatchList);
        const watchArray = res.data[0].movieWatchList;

        // Set movies state and then proceed with the additional logic
        setMovies(watchArray);

        // Additional logic for each movie in the watch list
        const moviePromises = watchArray.map((e) => {
          return axios.get(`https://api.themoviedb.org/3/movie/${e}?api_key=582913cbc1255e68ef241e0956a7ae7c`);
        });

        Promise.all(moviePromises)
          .then((responses) => {
            // Extract the movie data from each response
            const moviesData = responses.map((response) => response.data);
            setMovied(moviesData);
            console.log(moviesData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token.email]); // Dependency array to ensure the effect runs when token.email changes

  return (
    <div>
        <h1>WatchList</h1>
        <div className="container watchlist">

      {
          movied.map((e) => (
              <Card className="shadow" image={e.poster_path} key={e.id} title={e.original_title} />
              ))
            }
      {/* Additional JSX */}
            </div>
    </div>
  );
};

export default Watchlist;
