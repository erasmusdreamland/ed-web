import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';


import TicketsScript from './TicketsScript';
export const cardData = [

  {
    id: 0,
    title: 'BUY TICKETS',
    image: '../upcoming/lastb.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget"
  },
  {
    id: 1,
    title: 'BUY TICKETS',
    image: '../upcoming/beach.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2072402/chk/db0f/?ref=website_widget"
  },
  {
    id: 2,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP BRA 11 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget"
  },
  {
    id: 3,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP PRA 11 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2072402/chk/db0f/?ref=website_widget"
  },
  {
    id: 4,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP BRNO 12 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 5,
    title: 'BUY TICKETS',
    image: '../upcoming/vie.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 6,
    title: 'BUY TICKETS',
    image: '../upcoming/bolo.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },

  {
    id: 7,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP MIL 15 SEPT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'/tickets',
    script:'https://www.tickettailor.com/checkout/new-session/id/2072405/chk/55c6/?ref=website_widget'
  },
  {
    id: 8,
    title: 'BUY TICKETS',
    image: '../upcoming/mad.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 9,
    title: 'BUY TICKETS',
    image: '../upcoming/paris.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 10,
    title: 'BUY TICKETS',
    image: '../upcoming/ED TBWEP BRA 02 OCT ST (FILEminimizer).png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 11,
    title: 'BUY TICKETS',
    image: '../upcoming/wro.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
    {
    id: 12,
    title: 'BUY TICKETS',
    image: '../upcoming/kra.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },
  {
    id: 13,
    title: 'BUY TICKETS',
    image: '../upcoming/lodz.png',    
    date: '2023-04-20',
    url:'/tickets',
    script:"https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget"
  },


];

const CardList = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [activeButton, setActiveButton] = useState("upcoming");
  const [idR, setIdR] = useState(0);

  const handleShowPastEvents = () => {
    setShowPastEvents(true);
    setActiveButton("past");
  };

  const handleShowUpcomingEvents = () => {
    setShowPastEvents(false);
    setActiveButton("upcoming");
  };

  const events = showPastEvents ? pastEvents : cardData;

  const handleCardClick = (id) => {
    setIdR(id);
  };

  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
        <h1 className="title__whatsapp">BUY YOUR TICKETS HERE!</h1>
  
  
  <div className="card-list-events">
  {events.map((event) => (
    <CardEvents
      id={event.id}
      title={event.title}
      image={event.image}
      date={event.date}
      url={event.url}
      isPastEvent={event.pastEvent}
      script={event.script}
      handleCardHover={handleCardClick} // Pass handleCardClick as handleCardHover
    />
  ))}
</div>

    </div>
  );
};

export default CardList;