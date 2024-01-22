import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Components/Nav';
import Home from '../Components/Home';
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';
import NotFound from '../Components/NotFound';
import { cardData } from "../Components/CardList";
import ImageGallery from '../Components/ImageGallery';
import { countryData } from '../Components/CountriesCards';
import CountriesList from '../Components/CountriesCards';
import WhatsappButtons from '../Components/WhatsappLinks';
import Croatia from '../Components/CroatiaScript';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import TicketsScript from '../Components/TicketsScript';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/grupos-whatsapp-erasmus-españoles-24-25" element={<CountriesList />} />
        <Route path="/croatia-festival" element={<Croatia />} />

        <Route path="/tickets/:id" element={<TicketsScript />} />

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
