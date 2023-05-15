import React from "react";
import ArtistSlider from "./ArtistSlider";

const images = [
    {
      src: "../artists/ALVAMA 027 (FILEminimizer).jpg",
      title: "Alvama Ice",
      description: "The Madrid-born artist became known after uploading his sessions to social networks during the confinement, reaching a million followers on TikTok and being known since then for his own remixes and mashups, with hip hop, trap or reggaeton beats."
    },
    {
        src: "../artists/AM3OK (FILEminimizer).jpeg",
        title: "Alex Martini",
        description: "Spanish DJ and music producer known for his mashups and his hit 'Dime Bebesita', which has accumulated more than 38 million plays. Resident DJ at Shoko Madrid, with more than 500,000 followers on social media."
      },
    {
      src: "../artists/foto_blanco (FILEminimizer).jpg",
      title: "Álvarez",
      description: "DJ and music producer, characterised by his energetic and versatile sets, playing both urban and electronic styles. This new addition gives Erasmus Dreamland an unique artist who has broken the urban music scene during his Erasmus stay in Krakow."
    },

    {
      src: "../artists/Marcos-7 (FILEminimizer).jpg",
      title: "Seaquake",
      description: "Description 4"
    }
  ];

function ArtistApp() {
  return <ArtistSlider images={images} />;
}

export default ArtistApp;