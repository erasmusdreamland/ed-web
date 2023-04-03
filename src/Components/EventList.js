import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';


export const cardData = [
  {
    id: 1,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-04-15',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/677353?',
  },
  {
    id: 2,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-03-30',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/677353?',
  },
  {
    id: 3,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-05-01',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/677353?',
  },
  {
    id: 4,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-04-05',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/677353?',
  },
  {
    id: 5,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-04-20',
  },
  {
    id: 6,
    title: 'BUY TICKETS',
    image: '../upcoming/30MAR.png',
    date: '2023-05-10',
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