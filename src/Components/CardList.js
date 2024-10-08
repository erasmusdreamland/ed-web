import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id:6,
    title: 'The Biggest Erasmus Festival | Brussels 12/10/23 ',
    image: '/thumnails-gallery/tbef-brussels.jpg',
    linkUrl: "/tbef-brussels",
  },
  {
    id: 5,
    title: 'The Biggest Erasmus Festival | Bratislava 14/10/23 ',
    image: '/thumnails-gallery/tbef.jpg',
    linkUrl: "/tbef-bratislava",
  },
  {
    id: 4,
    title: 'The Biggest Erasmus Halloween Festival | Krakow 27/10/23 ',
    image: '/thumnails-gallery/halloween-krakow.jpg',
    linkUrl: "/halloween-krakow",
  },
  {
    id: 3,
    title: 'Feid After Party | Milan 06/11/23 ',
    image: '/thumnails-gallery/feid-afterparty.jpg',
    linkUrl: "/feid-afterparty",
  },
  {
    id: 2,
    title: 'The Biggest Erasmus Welcome Party | Las Palmas 11/09/24 ',
    image: '/thumnails-gallery/welcome-lp-24.jpg',
    linkUrl: "/welcome-lp-24",
  },
  {
    id: 1,
    title: 'The Biggest Erasmus Welcome Party | Bolonia 11/09/24 ',
    image: '/thumnails-gallery/welcome-bolonia-24.jpg',
    linkUrl: "/welcome-bolonia-24",
  },

  {
    id: 0,
    title: 'The Biggest Erasmus Welcome Party | Coimbra 12/09/24 ',
    image: '/thumnails-gallery/welcome-coimbra-24.jpg',
    linkUrl: "/welcome-coimbra-24",
  },






  
  
  
    
    


];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.slice().reverse().map(card => (
        <Card id={card.id} title={card.title} image={card.image} linkUrl={card.linkUrl} />
      ))}
    </div>
  );
};

export default CardList;
