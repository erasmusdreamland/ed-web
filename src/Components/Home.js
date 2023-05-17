import React from 'react';
import Map from './Map';
import Slider from './Slider';
import Body_2 from './Body_2'
import Croatia from './CroatiaScript';
import ArtistApp from './ArtistApp'; 
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Slider />
        <Body_2 />
        <Map />
        <ArtistApp />
        <Footer />
    </div>
  );
}

export default Home;