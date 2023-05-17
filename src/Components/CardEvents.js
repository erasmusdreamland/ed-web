import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TicketsScript from './TicketsScript';

const CardEvents = ({ id, title, image, url, isPastEvent, script, handleCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!isPastEvent) {
      setShowTickets(true);
      handleCardClick(id);

    }
  };

  const imageClass = isPastEvent ? 'past-events' : '';

  return (
<Link to={`/tickets/${id}`}>
      <div className="card-events" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <img src={image} alt={title} className={`${isHovered ? 'hovered' : ''} ${imageClass}`} />
        {!isPastEvent && isHovered && (
          <div className="message-box">
            <span>Buy Tickets</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardEvents;
