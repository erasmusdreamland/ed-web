import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Route } from 'react-router-dom';

const CardArtist = ({ name, title, image, description,url, isPastEvent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div
      className="card-events"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
      <img
        src={image}
        alt={title}

      />
      {isHovered && (
        <div className="message-box-artist">
          <span className="message-box-artist-name">{name} </span>
          <span className="message-box-artist-desc">{description} </span>

        </div>
      )}
    </div>
  );
};

export default CardArtist;