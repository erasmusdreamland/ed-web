import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';

export const cardData = [

  {
    id: 0,
    title: 'BUY TICKETS',
    image: '../upcoming/TBEF BOLOGNA STORIES.jpg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/899011?',
    
  },
  {
    id: 0,
    title: 'BUY TICKETS',
    image: '../upcoming/WhatsApp Image 2023-05-14 at 21.11.50.jpeg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/820274?',
  },
  {
    id: 0,
    title: 'BUY TICKETS',
    image: '../upcoming/ED LAS BRNO ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/913743?',
  },
  {
    id: 0,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP BRA 11 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/887055?',
  },
  {
    id: 3,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP PRA 11 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/887080?#',
  },
  {
    id: 1,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP MIL 15 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/887086?',
  },
  {
    id: 2,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP BRA 02 OCT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/887631?',
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
              id={event.id}
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