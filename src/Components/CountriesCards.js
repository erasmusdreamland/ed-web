import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";
import Countrycard from './CountryCard';

export const countryData = [
  {
    id: 0,
    title: 'Austria',
    image: '../countries/austria.jpg',
    linkUrl: "/austria",
    icon: 'fi fi-at',
  },
  {
    id: 1,
    title: 'Belgium',
    image: '../countries/belgium.jpg',
    linkUrl: "/belgium",
    icon: 'fi fi-be',
  },
  {
    id: 2,
    title: 'Bulgaria',
    image: '../countries/bulgaria.jpg',
    linkUrl: "/bulgaria",
    icon: 'fi fi-bg',
  },
  {
    id: 3,
    title: 'Croatia',
    image: '../countries/croacia.jpg',
    linkUrl: "/croatia",
    icon: 'fi fi-hr',
  },
  {
    id: 4,
    title: 'Cyprus',
    image: '../countries/cyprus.jpg',
    linkUrl: "/cyprus",
    icon: 'fi fi-cy',
  },
  {
    id: 5,
    title: 'Czech Republic',
    image: '../countries/cz.jpg',
    linkUrl: "/cz",
    icon: 'fi fi-cz',
  },
  {
    id:6,
    title: 'Denmark',
    image: '../countries/denmark.jpg',
    linkUrl: "/denmark",
    icon: 'fi fi-dk',
  },
  {
    id: 7,
    title: 'England',
    image: '../countries/england.jpg',
    linkUrl: "/england",
    icon: 'fi fi-gb-eng',
  },
  {
    id: 8,
    title: 'Estonia',
    image: '../countries/estonia.jpg',
    linkUrl: "/estonia",
    icon: 'fi fi-ee',
  },
  {
    id: 9,
    title: 'Finland',
    image: '../countries/finland.jpg',
    linkUrl: "/finland",
    icon: 'fi fi-fi',
  },
  {
    id: 10,
    title: 'France',
    image: '../countries/france.jpg',
    linkUrl: "/france",
    icon: 'fi fi-fr',
  },
  {
    id: 11,
    title: 'Germany',
    image: '../countries/germany.jpg',
    linkUrl: "/germany",
    icon: 'fi fi-de',
  },
  {
    id: 12,
    title: 'Greece',
    image: '../countries/greece.jpg',
    linkUrl: "/greece",
    icon: 'fi fi-gr',
  },
  {
    id: 13,
    title: 'Hungary',
    image: '../countries/hungary.jpg',
    linkUrl: "/hungary",
    icon: 'fi fi-hu',
  },
  {
    id: 14,
    title: 'Ireland',
    image: '../countries/ireland.jpg',
    linkUrl: "/ireland",
    icon: 'fi fi-ie',
  },
  {
    id: 15,
    title: 'Italy',
    image: '../countries/italy.jpg',
    linkUrl: "/italy",
    icon: 'fi fi-it',
  },
  {
    id: 16,
    title: 'Lithuania',
    image: '../countries/lithuania.jpg',
    linkUrl: "/lithuania",
    icon: 'fi fi-lt',
  },
  {
    id: 17,
    title: 'Malta',
    image: '../countries/malta.jpg',
    linkUrl: "/malta",
    icon: 'fi fi-mt',
  },
  {
    id: 18,
    title: 'Netherlands',
    image: '../countries/netherlands.jpg',
    linkUrl: "/netherlands",
    icon: 'fi fi-nl',
  },
  {
    id: 19,
    title: 'Norway',
    image: '../countries/norway.jpg',
    linkUrl: "/norway",
    icon: 'fi fi-no',
  },
  {
    id: 20,
    title: 'Poland',
    image: '../countries/poland.jpg',
    linkUrl: "/poland",
    icon: 'fi fi-pl',
  },
  {
    id: 21,
    title: 'Portugal',
    image: '../countries/portugal.jpg',
    linkUrl: "/portugal",
    icon: 'fi fi-pt',
  },
  {
    id: 22,
    title: 'Romania',
    image: '../countries/romania.jpg',
    linkUrl: "/romania",
    icon: 'fi fi-ro',
  },
  {
    id: 23,
    title: 'Slovakia',
    image: '../countries/slovakia.jpg',
    linkUrl: "/slovakia",
    icon: 'fi fi-sk',
  },
  {
    id: 24,
    title: 'Slovenia',
    image: '../countries/slovenia.jpg',
    linkUrl: "/slovenia",
    icon: 'fi fi-si',
  },
  {
    id: 25,
    title: 'Sweden',
    image: '../countries/sweden.jpg',
    linkUrl: "/sweden",
    icon: 'fi fi-se',
  },
  {
    id: 26,
    title: 'Switzerland',
    image: '../countries/switzerland.jpg',
    linkUrl: "/switzerland",
    icon: 'fi fi-ch',
  },
  {
    id: 27,
    title: 'Turkey',
    image: '../countries/turkey.jpg',
    linkUrl: "/turkey",
    icon: 'fi fi-tr',
  },
];


const CountriesList = () => {
  return (
    <div className="card-list">
      {countryData.map(cardCountry => (
        <Countrycard id={cardCountry.id} title={cardCountry.title} image={cardCountry.image} linkUrl={cardCountry.linkUrl} icon={cardCountry.icon}/>
      ))}
    </div>
  );
};

export default CountriesList;
