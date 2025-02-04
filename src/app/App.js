import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Components/Nav';
import Home from '../Components/Home';
import Gallery from '../Components/Gallery';
import NotFound from '../Components/NotFound';
import { cardData } from "../Components/CardList";
import ImageGallery from '../Components/ImageGallery';
import { countryData } from '../Components/CountriesCards';
import CountriesList from '../Components/CountriesCards';
import WhatsappButtons from '../Components/WhatsappLinks';
import IframeFourvenues from '../Components/Iframe';

import PrivacyPolicy from '../Components/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/entradas" element={<IframeFourvenues />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/whatsapp-groups" element={<CountriesList />} />

        <Route component={NotFound} />
        {cardData.map((card) => (
          <Route key={card.id} path={card.linkUrl} element={<ImageGallery />} />
        ))}
        {countryData.map((cardCountry) => (
          <Route key={cardCountry.id} path={cardCountry.linkUrl} element={<WhatsappButtons />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
