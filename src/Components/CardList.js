import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id: 10,
    title: 'The Biggest Erasmus Festival | Brno 04.02 ',
    image: '/thumnails-gallery/thumbnail-alvama.jpg',
    linkUrl: "/alvama",
  },
  {
    id: 9,
    title: 'Write On Me Party | Bratislava  30.03 ',
    image: '/thumnails-gallery/thumbnail-draw.jpg',
    linkUrl: "/draw",
  },
  {
    id: 8,
    title: 'The Biggest Erasmus Festival | Porto  20.04.2023 ',
    image: '/thumnails-gallery/IMG_0338 (FILEminimizer).jpg',
    linkUrl: "/porto-tbef",
  },
  {
    id: 7,
    title: 'Sex Change Party | Bratislava  21.04.2023 ',
    image: '/thumnails-gallery/DSC_2002.jpg',
    linkUrl: "/sex-change",
  },
  {
    id: 6,
    title: 'Football Cup 2nd Edition | Bratislava  22.04.2023 ',
    image: '/thumnails-gallery/DSC_1056 (FILEminimizer).jpg',
    linkUrl: "/tournament",
  },
  {
    id: 5,
    title: 'Football Cup Party & Gala | Bratislava  22.04.2023 ',
    image: '/thumnails-gallery/DSC_1277 (FILEminimizer).jpg',
    linkUrl: "/tournament-party",
  },
  {
    id: 4,
    title: 'Mexican Party | Bratislava  27.04.2023 ',
    image: '/thumnails-gallery/DSC_1445 (FILEminimizer).jpg',
    linkUrl: "/mexican-party",
  },
  {
    id: 3,
    title: 'The Biggest Erasmus Festival with Alex Martini | Krakow  27.04.2023 ',
    image: '/thumnails-gallery/087 (FILEminimizer).jpg',
    linkUrl: "/krakow-festival",
  },
  {
    id: 2,
    title: 'Football Supercup | Bratislava  06.05.2023 ',
    image: '/thumnails-gallery/IMG_0455 (FILEminimizer).jpg',
    linkUrl: "/supercup",
  },
  {
    id: 1,
    title: 'Sunglasses Party | Bratislava  06.05.2023 ',
    image: '/thumnails-gallery/20-IMG_0582 (FILEminimizer).jpg',
    linkUrl: "/sunglasses-party",
  },
  {
    id: 0,
    title: 'The Biggest Erasmus Festival | Munich  11.05.2023 ',
    image: '/thumnails-gallery/5-IMG_0654 (FILEminimizer).jpg',
    linkUrl: "/munich",
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
