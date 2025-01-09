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
    linkUrl: "/alemania",
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
    linkUrl: "/belgica",
    icon: 'fi fi-be',
  },
  {
    id: 3,
    title: 'Bosnia y Herzegovina',
    image: '../countries/bosnia.jpg',
    linkUrl: "/bosnia",
    icon: 'fi fi-ba',
  },
  
  {
    id: 4,
    title: 'Bulgaria',
    image: '../countries/bulgaria.jpg',
    linkUrl: "/bulgaria",
    icon: 'fi fi-bg',
  },
  {
    id: 5,
    title: 'Chipre',
    image: '../countries/cyprus.jpg',
    linkUrl: "/chipre",
    icon: 'fi fi-cy',
  },
  {
    id: 6,
    title: 'Croacia',
    image: '../countries/croacia.jpg',
    linkUrl: "/croacia",
    icon: 'fi fi-hr',
  },
  {
    id:7,
    title: 'Dinamarca',
    image: '../countries/denmark.jpg',
    linkUrl: "/dinamarca",
    icon: 'fi fi-dk',
  },
  {
    id:8,
    title: 'Escocia',
    image: '../countries/escocia.jpg',
    linkUrl: "/escocia",
    icon: 'fi gb-sct',
  },
  {
    id: 9,
    title: 'Eslovaquia',
    image: '../countries/slovakia.jpg',
    linkUrl: "/eslovaquia",
    icon: 'fi fi-sk',
  },
  {
    id: 10,
    title: 'Eslovenia',
    image: '../countries/slovenia.jpg',
    linkUrl: "/eslovenia",
    icon: 'fi fi-si',
  },
  {
    id: 11,
    title: 'Estonia',
    image: '../countries/estonia.jpg',
    linkUrl: "/estonia",
    icon: 'fi fi-ee',
  },
  {
    id: 12,
    title: 'Finlandia',
    image: '../countries/finland.jpg',
    linkUrl: "/finland",
    icon: 'fi fi-fi',
  },
  {
    id: 13,
    title: 'Francia',
    image: '../countries/france.jpg',
    linkUrl: "/francia",
    icon: 'fi fi-fr',
  },
  {
    id: 14,
    title: 'Grecia',
    image: '../countries/greece.jpg',
    linkUrl: "/grecia",
    icon: 'fi fi-gr',
  },

  {
    id: 15,
    title: 'Hungría',
    image: '../countries/hungary.jpg',
    linkUrl: "/hungria",
    icon: 'fi fi-hu',
  },
  {
    id: 16,
    title: 'Inglaterra',
    image: '../countries/england.jpg',
    linkUrl: "/inglaterra",
    icon: 'fi fi-gb-eng',
  },
  
  {
    id: 17,
    title: 'Irlanda',
    image: '../countries/ireland.jpg',
    linkUrl: "/irlanda",
    icon: 'fi fi-ie',
  },
  {
    id: 18,
    title: 'Italia',
    image: '../countries/italy.jpg',
    linkUrl: "/italia",
    icon: 'fi fi-it',
  },
  {
    id: 19,
    title: 'Letonia',
    image: '../countries/letonia.jpg',
    linkUrl: "/letonia",
    icon: 'fi fi-lv',
  },
  {
    id: 20,
    title: 'Lituania',
    image: '../countries/lithuania.jpg',
    linkUrl: "/lituania",
    icon: 'fi fi-lt',
  },
  {
    id: 21,
    title: 'Luxemburgo',
    image: '../countries/lux.jpg',
    linkUrl: "/luxemburgo",
    icon: 'fi fi-lu',
  },
  {
    id: 22,
    title: 'Macedonia',
    image: '../countries/macedonia.jpg',
    linkUrl: "/macedonia",
    icon: 'fi fi-mk',
  },

  {
    id: 23,
    title: 'Malta',
    image: '../countries/malta.jpg',
    linkUrl: "/malta",
    icon: 'fi fi-mt',
  },
  {
    id: 24,
    title: 'Noruega',
    image: '../countries/norway.jpg',
    linkUrl: "/noruega",
    icon: 'fi fi-no',
  },
  {
    id: 25,
    title: 'Países Bajos',
    image: '../countries/netherlands.jpg',
    linkUrl: "/paisesbajos",
    icon: 'fi fi-nl',
  },
  {
    id: 26,
    title: 'Polonia',
    image: '../countries/poland.jpg',
    linkUrl: "/polonia",
    icon: 'fi fi-pl',
  },
  {
    id: 27,
    title: 'Portugal',
    image: '../countries/portugal.jpg',
    linkUrl: "/portugal",
    icon: 'fi fi-pt',
  },
  {
    id: 28,
    title: 'República Checa',
    image: '../countries/cz.jpg',
    linkUrl: "/cz",
    icon: 'fi fi-cz',
  },

  {
    id: 29,
    title: 'Rumania',
    image: '../countries/romania.jpg',
    linkUrl: "/rumania",
    icon: 'fi fi-ro',
  },
  {
    id: 30,
    title: 'Serbia',
    image: '../countries/serbia.jpg',
    linkUrl: "/serbia",
    icon: 'fi fi-rs',
  },

  {
    id: 31,
    title: 'Suecia',
    image: '../countries/sweden.jpg',
    linkUrl: "/suecia",
    icon: 'fi fi-se',
  },
  {
    id: 32,
    title: 'Suiza',
    image: '../countries/switzerland.jpg',
    linkUrl: "/suiza",
    icon: 'fi fi-ch',
  },
  {
    id: 33,
    title: 'Turquia',
    image: '../countries/turkey.jpg',
    linkUrl: "/turquia",
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
