import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id: 0,
    title: 'Sex Change Party | Bratislava  21.04.2023 ',
    image: '/thumnails-gallery/DSC_2002.jpg',
    linkUrl: "/sex-change",
  },
  {
    id: 1,
    title: 'Write On Me Party | Bratislava  30.03 ',
    image: '/thumnails-gallery/thumbnail-draw.jpg',
    linkUrl: "/draw",
  },
  {
    id: 2,
    title: 'The Biggest Erasmus Festival | Brno 04.02 ',
    image: '/thumnails-gallery/thumbnail-alvama.jpg',
    linkUrl: "/alvama",
  },

];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map(card => (
        <Card id={card.id} title={card.title} image={card.image} linkUrl={card.linkUrl} />
      ))}
    </div>
  );
};

export default CardList;
