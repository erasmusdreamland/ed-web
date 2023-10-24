import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
 
  {
    id: 19,
    title: 'The Biggest Erasmus Welcome Party | Copenhagen 31/08/2023 ',
    image: '/thumnails-gallery/copen.jpg',
    linkUrl: "/copenhagen",
  },
  {
    id: 18,
    title: 'The Biggest Erasmus Welcome Party | Bergen 01/09/2023 ',
    image: '/thumnails-gallery/berguen.jpg',
    linkUrl: "/bergen",
  },
  {
    id: 17,
    title: 'The Biggest Erasmus Welcome Party | Bratislava 11/09/2023 ',
    image: '/thumnails-gallery/welcome-bratislava.jpg',
    linkUrl: "/welcome-bratislava",
  },
  {
    id: 16,
    title: 'The Biggest Erasmus Welcome Party | Viena 12/09/2023 ',
    image: '/thumnails-gallery/welcome-viena.jpg',
    linkUrl: "/welcome-viena",
  },
  {
    id: 15,
    title: 'Traffic Light Party | Bratislava 13/09/2023 ',
    image: '/thumnails-gallery/traffic-light-bratislava.jpg',
    linkUrl: "/traffic-light-bratislava",
  },
  {
    id: 14,
    title: 'The Biggest Erasmus Welcome Party | Las Palmas de Gran Canaria 13/09/2023 ',
    image: '/thumnails-gallery/welcome-laspalmas.jpg',
    linkUrl: "/welcome-laspalmas",
  },
    
  {
    id: 13,
    title: 'The Biggest Erasmus Welcome Party | Bologna 14/09/2023 ',
    image: '/thumnails-gallery/welcome-bologna.jpg',
    linkUrl: "/welcome-bologna",
  },
  {
    id: 12,
    title: 'The Biggest Erasmus Welcome Party | Brussels 14/09/2023 ',
    image: '/thumnails-gallery/welcome-brussels.jpg',
    linkUrl: "/welcome-brussels-be",
  },
  {
    id: 11,
    title: 'The Biggest Erasmus Welcome Party | Milan 15/09/2023 ',
    image: '/thumnails-gallery/welcome-milan.jpg',
    linkUrl: "/welcome-milan",
  },
  {
    id: 10,
    title: 'The Biggest Erasmus Welcome Party | Budapest 16/09/2023 ',
    image: '/thumnails-gallery/welcome-budapest.jpg',
    linkUrl: "/welcome-budapest",
  },
  {
    id: 9,
    title: 'The Biggest 3rd Aniversary Party | Bratislava 18/09/2023 ',
    image: '/thumnails-gallery/aniversary-bratislava.jpg',
    linkUrl: "/aniversary-bratislava",
  },
  {
    id: 8,
    title: 'The Biggest Erasmus Welcome Party | Paris 20/09/2023 ',
    image: '/thumnails-gallery/welcome-paris.jpg',
    linkUrl: "/welcome-paris",
  },
  {
    id: 7,
    title: 'The Biggest Erasmus Welcome Party | Naples 21/09/23 ',
    image: '/thumnails-gallery/welcome-naples.jpg',
    linkUrl: "/welcome-naples",
  },
  {
    id: 6,
    title: 'The Biggest 3rd Aniversary Party | Brno 26/09/2023 ',
    image: '/thumnails-gallery/aniversary-brno.jpg',
    linkUrl: "/aniversary-brno",
  },
  {
    id: 5,
    title: 'Carnival Party | Bratislava 28/09/23 ',
    image: '/thumnails-gallery/carnival-bratislava.jpg',
    linkUrl: "/carnival-bratislava",
  },
  {
    id: 4,
    title: 'The Biggest Erasmus Welcome Party | Athens 02/10/2023 ',
    image: '/thumnails-gallery/welcome-athens.jpg',
    linkUrl: "/welcome-athens",
  },
  {
    id: 3,
    title: 'The Biggest Erasmus Welcome Party | Wroclaw 03/10/23 ',
    image: '/thumnails-gallery/welcome-wroclaw.jpg',
    linkUrl: "/welcome-wroclaw",
  },
  {
    id: 2,
    title: 'The Biggest Erasmus Welcome Party | Krakow 03/10/23 ',
    image: '/thumnails-gallery/welcome-krakow.jpg',
    linkUrl: "/welcome-krakow",
  },
  {
    id: 1,
    title: 'The Biggest Erasmus Welcome Party | Warsaw 04/10/23 ',
    image: '/thumnails-gallery/welcome-warsaw.jpg',
    linkUrl: "/welcome-warsaw",
  },
  {
    id: 0,
    title: 'The Biggest Erasmus Festival | Bratislava 14/10/23 ',
    image: '/thumnails-gallery/tbef.jpg',
    linkUrl: "/tbef-bratislava",
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
