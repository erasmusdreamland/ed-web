import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id:15,
    title: 'The Biggest Erasmus Festival | Brussels 12/10/23 ',
    image: '/thumnails-gallery/tbef-brussels.jpg',
    linkUrl: "/tbef-brussels",
  },
  {
    id: 14,
    title: 'The Biggest Erasmus Festival | Bratislava 14/10/23 ',
    image: '/thumnails-gallery/tbef.jpg',
    linkUrl: "/tbef-bratislava",
  },
  {
    id: 13,
    title: 'The Biggest Erasmus Halloween Festival | Krakow 27/10/23 ',
    image: '/thumnails-gallery/halloween-krakow.jpg',
    linkUrl: "/halloween-krakow",
  },
  {
    id: 12,
    title: 'Feid After Party | Milan 06/11/23 ',
    image: '/thumnails-gallery/feid-afterparty.jpg',
    linkUrl: "/feid-afterparty",
  },
  {
    id: 11,
    title: 'The Biggest Erasmus Welcome Party | Las Palmas 11/09/24 ',
    image: '/thumnails-gallery/welcome-lp-24.jpg',
    linkUrl: "/welcome-lp-24",
  },
  {
    id: 10,
    title: 'The Biggest Erasmus Welcome Party | Bolonia 11/09/24 ',
    image: '/thumnails-gallery/welcome-bolonia-24.jpg',
    linkUrl: "/welcome-bolonia-24",
  },

  {
    id: 9,
    title: 'The Biggest Erasmus Welcome Party | Coimbra 12/09/24 ',
    image: '/thumnails-gallery/welcome-coimbra-24.jpg',
    linkUrl: "/welcome-coimbra-24",
  },
  {
    id: 8,
    title: 'The Biggest Erasmus Welcome Party | Sofía 27/09/24 ',
    image: '/thumnails-gallery/welcome-sofia-24.jpg',
    linkUrl: "/welcome-sofia-24",
  },
  {
    id: 7,
    title: 'The Biggest Erasmus Welcome Party | Wroclaw 30/09/24 ',
    image: '/thumnails-gallery/welcome-wroclaw-24.jpg',
    linkUrl: "/welcome-wroclaw-24",
  },
  {
    id: 6,
    title: 'The Biggest Erasmus Welcome Party | Cracovia 01/10/24 ',
    image: '/thumnails-gallery/welcome-cracovia-24.jpg',
    linkUrl: "/welcome-cracovia-24",
  },
  {
    id: 5,
    title: 'The Biggest Erasmus Festival | Bratislava 12/10/24 ',
    image: '/thumnails-gallery/tbef-24.jpg',
    linkUrl: "/tbef-24",
  },
  {
    id: 4,
    title: 'The Biggest Erasmus Halloween Festival | Bratislava 28/10/24 ',
    image: '/thumnails-gallery/halloween-bratislava.jpg',
    linkUrl: "/halloween-bratislava",
  },
  {
    id: 3,
    title: 'The Biggest Erasmus Halloween Festival | Bolonia 29/10/24 ',
    image: '/thumnails-gallery/halloween-bolonia.jpg',
    linkUrl: "/halloween-bolonia",
  },
  {
    id: 2,
    title: 'The Biggest Erasmus Halloween Festival | Lisboa 30/10/24 ',
    image: '/thumnails-gallery/halloween-lisboa.jpg',
    linkUrl: "/halloween-lisboa",
  },
  {
    id: 1,
    title: 'The Biggest Erasmus Halloween Festival | Oporto 31/10/24 ',
    image: '/thumnails-gallery/halloween-oporto.jpg',
    linkUrl: "/halloween-oporto",
  },    
  {
    id: 0,
    title: 'The Biggest Erasmus Halloween Festival | Cracovia 31/10/24 ',
    image: '/thumnails-gallery/halloween-cracovia-24.jpg',
    linkUrl: "/halloween-cracovia-24",
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
