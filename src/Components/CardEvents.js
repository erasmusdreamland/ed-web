import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Route } from 'react-router-dom';

const CardEvents = ({ title, image, url, isPastEvent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!isPastEvent) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="card-events"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className={isHovered ? "hovered" : ""}
      />
      {!isPastEvent && isHovered && (
        <div className="message-box">
          <span>Buy Tickets</span>
        </div>
      )}
    </div>
  );
};

export default CardEvents;