import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";


export const cardData = [
  {
    id: 1,
    title: 'Card 1',
    image: '0 2.jpg',
    linkUrl: "/alvama",

  },
  {
    id: 2,
    title: 'Card 2',
    image: '0 2.jpg',
    linkUrl: "/card2",
  },
  {
    id: 3,
    title: 'Card 3',
    image: '0 2.jpg'
  },
  {
    id: 4,
    title: 'Card 4',
    image: '0 2.jpg'
  },
  {
    id: 5,
    title: 'Card 5',
    image: '0 2.jpg'
  },
  {
    id: 6,
    title: 'Card 6',
    image: '0 2.jpg'
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
