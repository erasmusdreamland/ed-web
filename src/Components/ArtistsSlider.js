import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';
import Card from './Card';

export const cardData = [
  {

    image: '../artists/AM3OK.jpeg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
  },
  {

    image: '../artists/ALVAMA 027.jpg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
  },


];


const ArtistCard = () => {
    const [showPastEvents, setShowPastEvents] = useState(false);
    const [activeButton, setActiveButton] = useState("upcoming");
  
    const handleShowPastEvents = () => {
      setShowPastEvents(true);
      setActiveButton("past");
    };
  
    const handleShowUpcomingEvents = () => {
      setShowPastEvents(false);
      setActiveButton("upcoming");
    };
  
    const events = showPastEvents ? pastEvents : cardData;
  
    return (
      <div style={{ backgroundColor: "#2d2d2d" }}>
        <div className="button-events-container">
          <button
            onClick={handleShowUpcomingEvents}
            className={activeButton === "upcoming" ? "active" : ""}
          >
            Upcoming
          </button>
          <button
            onClick={handleShowPastEvents}
            className={activeButton === "past" ? "active" : ""}
          >
            Past
          </button>
        </div>
        <div className="card-list-events">
          {events.map((event) => (
            <CardEvents
              key={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              url={event.url}
              isPastEvent={event.pastEvent}
              
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ArtistCard;