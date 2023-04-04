import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';


export const cardData = [
  {
    id: 1,
    title: 'BUY TICKETS',
    image: '../upcoming/BRATIS13APRIL.jpg',
    date: '2023-04-13',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/702013?',
  },
  {
    id: 2,
    title: 'BUY TICKETS',
    image: '../upcoming/PORTO20.jpg',
    date: '2023-03-30',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/879711?',
  },
  {
    id: 3,
    title: 'BUY TICKETS',
    image: '../upcoming/sex.jpg',
    date: '2023-03-30',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/702001?',
  },
  {
    id: 4,
    title: 'BUY TICKETS',
    image: '../upcoming/fut.jpg',
    date: '2023-03-30',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/870295?',
  },
  {
    id: 5,
    title: 'BUY TICKETS',
    image: '../upcoming/MARTINI.jpg',
    date: '2023-05-01',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/856959?',
  },
  {
    id: 6,
    title: 'BUY TICKETS',
    image: '../upcoming/mex.jpg',
    date: '2023-05-01',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/702016?',
  },
  {
    id: 4,
    title: 'BUY TICKETS',
    image: '../upcoming/BRUUSELS.jpg',
    date: '2023-04-05',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/882222?',
  },
  {
    id: 5,
    title: 'BUY TICKETS',
    image: '../upcoming/MUNICH.jpg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
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