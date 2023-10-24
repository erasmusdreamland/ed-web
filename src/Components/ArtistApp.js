import React from "react";
import ArtistSlider from "./ArtistSlider";

const images = [
    {
      src: "../artists/alvama (FILEminimizer).png",
      title: "Alvama Ice",
      description: "The Madrid-born artist became known after uploading his sessions to social networks during the confinement, reaching a million followers on TikTok and being known since then for his own remixes and mashups, with hip hop, trap or reggaeton beats.",
      inst:"https://www.instagram.com/alvama_ice/",
      tiktok:"https://www.tiktok.com/@alvama_ice",
      logo:"../artists/alvamalogo.png"

    },
    {
        src: "../artists/martini (FILEminimizer).png",
        title: "Alex Martini",
        description: "Spanish DJ and music producer known for his mashups and his hit 'Dime Bebesita', which has accumulated more than 38 million plays. Resident DJ at Shoko Madrid, with more than 500,000 followers on social media.",
        inst:"https://www.instagram.com/yoalexmartini/",
        tiktok:"https://www.tiktok.com/@alexmartini",
        logo:"../artists/martinilogo.png"
  
      },
      {
        src: "../artists/aissa (FILEminimizer).jpg",
        title: "Aissa",
        description: "With his biggest hit, 'Las Bratz', Aissa is a singer from Morocco who is about to reach the top of the urban genre.",
        inst:"https://www.instagram.com/aissa.aslani/",
        tiktok:"https://www.tiktok.com/@aissa.aslanni",
        logo:"../artists/aissalogo.png"
  
      },
      {
        src: "../artists/barce (FILEminimizer).jpg",
        title: "Barce",
        description: "At just 24 years old, he is one of the most sought-after DJs in Spain. The self-styled 'Pájaro' is ready to fly with us all over Europe.",
        inst:"https://www.instagram.com/jorgebarcenas_/",
        tiktok:"https://www.tiktok.com/@jorgebarcenas_",
        logo:"../artists/barcelogo.png"
  
      },
      {
        src: "../artists/cremades (FILEminimizer).jpg",
        title: "Jorge Cremades",
        description: "With more than 3M followers on social media, Jorge Cremades is a well-known Instagramer, who has now made the leap to a career as a DJ. Pure energy and fun",
        inst:"https://www.instagram.com/jorgescremades/",
        tiktok:"https://www.tiktok.com/@jorgescremades",
        logo:"../artists/cremadeslogo.png"
  
      },
      {
        src: "../artists/vybs (FILEminimizer).png",
        title: "Vybs",
        description: "With more than 400k followers on TikTok thanks to his absolutely macabre humour videos, Vybs presents his new facet as a DJ, so that all future Erasmus students can dance to the rhythm of his madness.",
        inst:"https://www.instagram.com/_vybs/",
        tiktok:"https://www.tiktok.com/@vybs",
        logo:"../artists/vybslogo.png"
  
      },
    {
      src: "../artists/alvarez (FILEminimizer).png",
      title: "Álvarez",
      description: "DJ and music producer, characterised by his energetic and versatile sets, playing both urban and electronic styles. This new addition gives Erasmus Dreamland an unique artist who has broken the urban music scene during his Erasmus stay in Krakow.",
      inst:"",
      tiktok:"",
      logo:"../artists/alvarezlogo.png"

    },
    {
      src: "../artists/seaquake (FILEminimizer).jpg",
      title: "Seaquake",
      description: "Our resident DJ, with more than 7 years in the sector, characterised by mixing the urban genre with the hardest genres of music. Closures are his thing. Stay until the end, because that's when the absolute madness will be unleashed!",
      inst:"https://www.instagram.com/iamseaquake/",
      tiktok:"https://www.tiktok.com/@iamseaquake",
      logo:"../artists/seaquakelogo.png"

    }


  ];


function ArtistApp() {
  return <ArtistSlider images={images}/>;
}

export default ArtistApp;