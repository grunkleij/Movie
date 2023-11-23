import React, { useContext, useState } from 'react';
import './Card.css';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useLocation } from 'react-router-dom';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const {token}=useContext(LoginContext)
  const location = useLocation();
  const img = `https://image.tmdb.org/t/p/w200/${props.image}`;
  const key = props.id;
  const removeW=(e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:1234/user/${token.email}/${key}`)
    .then((res)=>{
      console.log("deleted succesfuly")

    })
    .catch((err)=>{
      // console.log(err);
    })
  }
  return (
    <div className="">

    <div
      className={`container mt-2 ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <img className='moviet' src={img} alt="" />
      <p className={`title ${isHovered ? 'visible' : ''}`}>{props.title}</p>
      </div>
      {location.pathname === '/watchlist' && (
        <button onClick={removeW}>remove from watchlist</button>
        )}
        </div>
  );
};

export default Card;
