import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const img = `https://image.tmdb.org/t/p/w200/${props.image}`;
  const key = props.id;

  return (
    <div
      className={`container mt-2 ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className='moviet' src={img} alt="" />
      <p className={`title ${isHovered ? 'visible' : ''}`}>{props.title}</p>
    </div>
  );
};

export default Card;
