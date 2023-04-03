import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Route } from 'react-router-dom';
export const idCard = 0;


const Card = ({ id, title, image, linkUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    // update global state variable with the clicked image id
    // e.g. window.clickedImageId = id;
    idCard = id;
  };



  return (
    <Link to={linkUrl} className="card">
      <img 
        src={image} 
        alt={title} 
        className={isHovered ? "hovered" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        />

      <h3>{title}</h3>
      
    </Link>
    
    
  );
};

export default Card;
