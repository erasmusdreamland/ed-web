import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id: 31,
    title: 'The Biggest Erasmus Festival | Brno 04.02 ',
    image: '/thumnails-gallery/thumbnail-alvama.jpg',
    linkUrl: "/alvama",
  },
  {
    id: 30,
    title: 'Write On Me Party | Bratislava  30.03 ',
    image: '/thumnails-gallery/thumbnail-draw.jpg',
    linkUrl: "/draw",
  },
  {
    id: 29,
    title: 'The Biggest Erasmus Festival | Porto  20.04.2023 ',
    image: '/thumnails-gallery/IMG_0338 (FILEminimizer).jpg',
    linkUrl: "/porto-tbef",   
  },
  {
    id: 28,
    title: 'Sex Change Party | Bratislava  21.04.2023 ',
    image: '/thumnails-gallery/DSC_2002.jpg',
    linkUrl: "/sex-change",
  },
  {
    id: 27,
    title: 'Football Cup 2nd Edition | Bratislava  22.04.2023 ',
    image: '/thumnails-gallery/DSC_1056 (FILEminimizer).jpg',
    linkUrl: "/tournament",
  },
  {
    id: 26,
    title: 'Football Cup Party & Gala | Bratislava  22.04.2023 ',
    image: '/thumnails-gallery/DSC_1277 (FILEminimizer).jpg',
    linkUrl: "/tournament-party",
  },
  {
    id: 25,
    title: 'Mexican Party | Bratislava  27.04.2023 ',
    image: '/thumnails-gallery/DSC_1445 (FILEminimizer).jpg',
    linkUrl: "/mexican-party",
  },
  {
    id: 24,
    title: 'The Biggest Erasmus Festival with Alex Martini | Krakow  27.04.2023 ',
    image: '/thumnails-gallery/087 (FILEminimizer).jpg',
    linkUrl: "/krakow-festival",
  },
  {
    id: 23,
    title: 'Football Supercup | Bratislava  06.05.2023 ',
    image: '/thumnails-gallery/IMG_0455 (FILEminimizer).jpg',
    linkUrl: "/supercup",
  },
  {
    id: 22,
    title: 'Sunglasses Party | Bratislava  06.05.2023 ',
    image: '/thumnails-gallery/20-IMG_0582 (FILEminimizer).jpg',
    linkUrl: "/sunglasses-party",
  },
  {
    id: 21,
    title: 'The Biggest Erasmus Festival | Munich  11.05.2023 ',
    image: '/thumnails-gallery/5-IMG_0654 (FILEminimizer).jpg',
    linkUrl: "/munich",
  },
  {
    id: 20,
    title: 'Ibiza Party | Bratislava  14.05.2023 ',
    image: '/thumnails-gallery/22-IMG_0768.jpeg',
    linkUrl: "/ibiparty",
  },
  {
    id: 19,
    title: 'The Biggest Last Erasmus Party | Brno 20.05.2023 ',
    image: '/thumnails-gallery/23-IMG_0856 (FILEminimizer).jpg',
    linkUrl: "/brno-tblef",
  },
  {
    id: 18,
    title: 'The Oscars Party | Bratislava 25.05.2023 ',
    image: '/thumnails-gallery/oscars.jpg',
    linkUrl: "/oscars-party",
  },
  {
    id: 17,
    title: 'The Biggest Erasmus Festival Beach Edition | Bratislava 13.06.2023 ',
    image: '/thumnails-gallery/2I6A1051 (FILEminimizer).jpg',
    linkUrl: "/tbef-beach",
  },
  {
    id: 16,
    title: 'The Biggest Erasmus Welcome Party | Copenhagen 31/08/2023 ',
    image: '/thumnails-gallery/copen.jpg',
    linkUrl: "/copenhagen",
  },
  {
    id: 15,
    title: 'The Biggest Erasmus Welcome Party | Bergen 01/09/2023 ',
    image: '/thumnails-gallery/berguen.jpg',
    linkUrl: "/bergen",
  },
  {
    id: 14,
    title: 'The Biggest Erasmus Welcome Party | Bratislava 11/09/2023 ',
    image: '/thumnails-gallery/welcome-bratislava.jpg',
    linkUrl: "/welcome-bratislava",
  },
  {
    id: 13,
    title: 'The Biggest Erasmus Welcome Party | Viena 12/09/2023 ',
    image: '/thumnails-gallery/welcome-viena.jpg',
    linkUrl: "/welcome-viena",
  },
  {
    id: 12,
    title: 'Traffic Light Party | Bratislava 13/09/2023 ',
    image: '/thumnails-gallery/traffic-light-bratislava.jpg',
    linkUrl: "/traffic-light-bratislava",
  },
  {
    id: 11,
    title: 'The Biggest Erasmus Welcome Party | Las Palmas de Gran Canaria 13/09/2023 ',
    image: '/thumnails-gallery/welcome-laspalmas.jpg',
    linkUrl: "/welcome-laspalmas",
  },
    
  {
    id: 10,
    title: 'The Biggest Erasmus Welcome Party | Bologna 14/09/2023 ',
    image: '/thumnails-gallery/welcome-bologna.jpg',
    linkUrl: "/welcome-bologna",
  },
  {
    id: 9,
    title: 'The Biggest Erasmus Welcome Party | Brussels 14/09/2023 ',
    image: '/thumnails-gallery/welcome-brussels.jpg',
    linkUrl: "/welcome-brussels-be",
  },
  {
    id: 8,
    title: 'The Biggest Erasmus Welcome Party | Milan 15/09/2023 ',
    image: '/thumnails-gallery/welcome-milan.jpg',
    linkUrl: "/welcome-milan",
  },
  {
    id: 7,
    title: 'The Biggest Erasmus Welcome Party | Budapest 16/09/2023 ',
    image: '/thumnails-gallery/welcome-budapest.jpg',
    linkUrl: "/welcome-budapest",
  },
  {
    id: 6,
    title: 'The Biggest 3rd Aniversary Party | Bratislava 18/09/2023 ',
    image: '/thumnails-gallery/aniversary-bratislava.jpg',
    linkUrl: "/aniversary-bratislava",
  },
  {
    id: 5,
    title: 'The Biggest Erasmus Welcome Party | Paris 20/09/2023 ',
    image: '/thumnails-gallery/welcome-paris.jpg',
    linkUrl: "/welcome-paris",
  },
  {
    id: 4,
    title: 'The Biggest Erasmus Welcome Party | Naples 21/09/23 ',
    image: '/thumnails-gallery/welcome-naples.jpg',
    linkUrl: "/welcome-naples",
  },
  {
    id: 3,
    title: 'The Biggest 3rd Aniversary Party | Brno 26/09/2023 ',
    image: '/thumnails-gallery/aniversary-brno.jpg',
    linkUrl: "/aniversary-brno",
  },
  {
    id: 2,
    title: 'Carnival Party | Bratislava 28/09/23 ',
    image: '/thumnails-gallery/carnival-bratislava.jpg',
    linkUrl: "/carnival-bratislava",
  },
  {
    id: 1,
    title: 'The Biggest Erasmus Welcome Party | Athens 02/10/2023 ',
    image: '/thumnails-gallery/welcome-athens.jpg',
    linkUrl: "/welcome-athens",
  },
  {
    id: 0,
    title: 'The Biggest Erasmus Welcome Party | Wroclaw 03/10/23 ',
    image: '/thumnails-gallery/welcome-wroclaw.jpg',
    linkUrl: "/welcome-wroclaw",
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
