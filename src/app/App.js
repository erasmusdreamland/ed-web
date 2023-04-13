import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Components/Nav';
import Home from '../Components/Home';
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';
import NotFound from '../Components/NotFound';
import { cardData } from "../Components/CardList"; // import cardData from CardList.js
import ImageGallery from '../Components/ImageGallery';
import { countryData } from '../Components/CountriesCards';
import CountriesList from '../Components/CountriesCards';
import WhatsappButtons from '../Components/WhatsappLinks';
import Croatia from '../Components/CroatiaScript';


function App() {
  return (


    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/events" element={ <Events />} />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/whatsapp-groups" element={ <CountriesList/> } />
        <Route component={NotFound} />
        <Route path="/springbreak" element={ <Croatia />} />
        {cardData.map((card) => (
          <Route key={card.id} path={card.linkUrl} element={<ImageGallery/>} />
        ))}
          {countryData.map((cardCountry) => (
          <Route key={cardCountry.id} path={cardCountry.linkUrl} element={<WhatsappButtons/>} />
        ))}
      </Routes>

      
      
    </BrowserRouter>
  );
}

export default App;
