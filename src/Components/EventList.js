import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';


export const cardData = [
  {

    title: 'BUY TICKETS',
    image: '../upcoming/BRUUSELS.jpg',
    date: '2023-04-05',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/882222?',
  },
  {

    title: 'BUY TICKETS',
    image: '../upcoming/MUNICH.jpg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
  },
  {

    title: 'BUY TICKETS',
    image: '../upcoming/TBEF BOLOGNA STORIES.jpg',    
    date: '2023-05-18',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/899011?',
  },

];

  const CardList = () => {
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
  
  export default CardList;