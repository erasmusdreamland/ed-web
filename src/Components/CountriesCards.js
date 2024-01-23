import React from 'react';
import Card from './Card';
import { Link, Route } from "react-router-dom";
import Countrycard from './CountryCard';
import Footer from './Footer';
export const countryData = [
  {
    id: 0,
    title: 'Alemania',
    image: '../countries/germany.jpg',
    linkUrl: "/germany",
    icon: 'fi fi-de',
  },
  {
    id: 1,
    title: 'Austria',
    image: '../countries/austria.jpg',
    linkUrl: "/austria",
    icon: 'fi fi-at',
  },
  {
    id: 2,
    title: 'Bélgica',
    image: '../countries/belgium.jpg',
    linkUrl: "/belgium",
    icon: 'fi fi-be',
  },
  {
    id: 3,
    title: 'Bulgaria',
    image: '../countries/bulgaria.jpg',
    linkUrl: "/bulgaria",
    icon: 'fi fi-bg',
  },
  {
    id: 4,
    title: 'Chipre',
    image: '../countries/cyprus.jpg',
    linkUrl: "/cyprus",
    icon: 'fi fi-cy',
  },
  {
    id: 5,
    title: 'Croacia',
    image: '../countries/croacia.jpg',
    linkUrl: "/croatia",
    icon: 'fi fi-hr',
  },
  {
    id:6,
    title: 'Dinamarca',
    image: '../countries/denmark.jpg',
    linkUrl: "/denmark",
    icon: 'fi fi-dk',
  },
  {
    id: 7,
    title: 'Eslovaquia',
    image: '../countries/slovakia.jpg',
    linkUrl: "/slovakia",
    icon: 'fi fi-sk',
  },
  {
    id: 8,
    title: 'Eslovenia',
    image: '../countries/slovenia.jpg',
    linkUrl: "/slovenia",
    icon: 'fi fi-si',
  },
  {
    id: 9,
    title: 'Estonia',
    image: '../countries/estonia.jpg',
    linkUrl: "/estonia",
    icon: 'fi fi-ee',
  },
  {
    id: 10,
    title: 'Finlandia',
    image: '../countries/finland.jpg',
    linkUrl: "/finland",
    icon: 'fi fi-fi',
  },
  {
    id: 11,
    title: 'Francia',
    image: '../countries/france.jpg',
    linkUrl: "/france",
    icon: 'fi fi-fr',
  },
  {
    id: 12,
    title: 'Grecia',
    image: '../countries/greece.jpg',
    linkUrl: "/greece",
    icon: 'fi fi-gr',
  },
  {
    id: 13,
    title: 'Holanda',
    image: '../countries/netherlands.jpg',
    linkUrl: "/netherlands",
    icon: 'fi fi-nl',
  },
  {
    id: 14,
    title: 'Hungría',
    image: '../countries/hungary.jpg',
    linkUrl: "/hungary",
    icon: 'fi fi-hu',
  },
  {
    id: 15,
    title: 'Inglaterra',
    image: '../countries/england.jpg',
    linkUrl: "/england",
    icon: 'fi fi-gb-eng',
  },
  
  {
    id: 16,
    title: 'Irlanda',
    image: '../countries/ireland.jpg',
    linkUrl: "/ireland",
    icon: 'fi fi-ie',
  },
  {
    id: 17,
    title: 'Italia',
    image: '../countries/italy.jpg',
    linkUrl: "/italy",
    icon: 'fi fi-it',
  },
  
  {
    id: 18,
    title: 'Lituania',
    image: '../countries/lithuania.jpg',
    linkUrl: "/lithuania",
    icon: 'fi fi-lt',
  },
  {
    id: 19,
    title: 'Malta',
    image: '../countries/malta.jpg',
    linkUrl: "/malta",
    icon: 'fi fi-mt',
  },
  {
    id: 20,
    title: 'Noruega',
    image: '../countries/norway.jpg',
    linkUrl: "/norway",
    icon: 'fi fi-no',
  },
  {
    id: 21,
    title: 'Polonia',
    image: '../countries/poland.jpg',
    linkUrl: "/poland",
    icon: 'fi fi-pl',
  },
  {
    id: 22,
    title: 'Portugal',
    image: '../countries/portugal.jpg',
    linkUrl: "/portugal",
    icon: 'fi fi-pt',
  },
  {
    id: 23,
    title: 'República Checa',
    image: '../countries/cz.jpg',
    linkUrl: "/cz",
    icon: 'fi fi-cz',
  },

  {
    id: 24,
    title: 'Rumania',
    image: '../countries/romania.jpg',
    linkUrl: "/romania",
    icon: 'fi fi-ro',
  },


  {
    id: 25,
    title: 'Suecia',
    image: '../countries/sweden.jpg',
    linkUrl: "/sweden",
    icon: 'fi fi-se',
  },
  {
    id: 26,
    title: 'Suiza',
    image: '../countries/switzerland.jpg',
    linkUrl: "/switzerland",
    icon: 'fi fi-ch',
  },
  {
    id: 27,
    title: 'Turquia',
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
