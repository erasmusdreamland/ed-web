import React, { useState } from 'react';
import CardEvents from './CardEvents';
import { pastEvents } from './PastEvents';
import CardArtist from './CardArtist';

export const cardData = [
  {
    name: 'Alex Martini',
    image: '../artists/AM3OK-removebg-preview.png',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
  },
  {
    name: 'Alvama Ice',
    image: '../artists/ALVAMA 027.jpg',    
    date: '2023-04-20',
    url:'https://www.tickettailor.com/events/erasmusdreamland1/888885?',
  }


];

  const ArtistCard = () => {
    const [showPastEvents, setShowPastEvents] = useState(false);
    const [activeButton, setActiveButton] = useState("upcoming");
  
    const events = showPastEvents ? pastEvents : cardData;
  
    return (
      <div style={{ backgroundColor: "#2d2d2d" }} className='artist-margin'>
        <h1>OUR ARTISTS</h1>
        <p>Discover the talented DJs who work with us and will make you dance during the best year of your life!</p>
        <div className="card-list-events">
          {events.map((event) => (
            <CardArtist
            name={event.name}
              key={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              url={event.url}
              description={event.description}
              isPastEvent={event.pastEvent}
              
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ArtistCard;