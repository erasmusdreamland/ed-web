import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import { cardData } from './CardList';
import Card from './Card';
import Countrycard, { idCard } from './CountryCard'
import Footer from './Footer';

import { whatsappLinksInfo } from './LinksData';


const WhatsappButtons = () => {
    const id = idCard;
    const countryData = whatsappLinksInfo[id];
  
    return (
      <div>
        <h1 className="title__whatsapp">BUSCA EL GRUPO DE TU CIUDAD AQUÍ!</h1>
        <div className="whatsapp-buttons">
          {countryData.data.map((cityData, index) => (
            <a href={cityData.whatsappLink} key={index}>
              <button className="whatsapp-buttons__button">
                {cityData.city}   <i className="fa fa-whatsapp whatsapp-buttons__button__icon" aria-hidden="true"></i>
              </button>
            </a>
          ))}

        </div>

      </div>
    );
  };
  
  export default WhatsappButtons;