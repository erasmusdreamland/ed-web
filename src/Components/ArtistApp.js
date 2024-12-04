import React from "react";
import ArtistSlider from "./ArtistSlider";

const images = [
  
  {
    src: "../artists/omar montes.jpg",
    title: "Omar Montes",
    description: "Artista Número 1 de España, con más de 10 canciones en el top 50, se una a nuestra familia erasmus tras realizar su gira por europa con nosotros.",
    inst:"https://www.instagram.com/omarmontes/",
    tiktok:"https://www.tiktok.com/@omarmontesoficial",
    logo:"../artists/logoomar.png"
  },
  {
    src: "../artists/selecta.jpg",
    title: "Selecta",
    description: "El niño, productor de artistas como Recycled J, Duki, Neo Pistea, Don Patricio, Bejo, ATICA o Israel B, entre otros, Selecta se consolida como uno de los productores clave en el panorama musical español con un estilo propio imposible de encasillar.",
    inst:"https://www.instagram.com/selecta33/",
    tiktok:"https://www.tiktok.com/@selectaelnino",
    logo:"../artists/logoselecta.png"
  },
  {
    src: "../artists/carmen.jpg",
    title: "Carmen de la Fuente",
    description: "Con más de 200K seguidores en redes, Carmen de la Fuente se ha proclamado la DJ con más impacto del panorama español.",
    inst:"https://www.instagram.com/carmendelafuente/",
    tiktok:"https://www.tiktok.com/@carmendelafuente",
    logo:"../artists/logocarmen.png"
  },
    {
      src: "../artists/alvama (FILEminimizer).png",
      title: "Alvama Ice",
      description: "El madrileño se dio a conocer tras subir sus sesiones a las redes sociales durante el confinamiento, alcanzando el millón de seguidores en TikTok y siendo conocido desde entonces por sus propios remixes y mashups, con ritmos de hip hop, trap o reggaeton.",
      inst:"https://www.instagram.com/alvama_ice/",
      tiktok:"https://www.tiktok.com/@alvama_ice",
      logo:"../artists/alvamalogo.png"
    },
    {
        src: "../artists/martini (FILEminimizer).png",
        title: "Alex Martini",
        description: "DJ y productor musical español conocido por sus mashups y su éxito 'Dime Bebesita', que acumula más de 38 millones de reproducciones. DJ residente en Shoko Madrid, con más de 500.000 seguidores en las redes sociales.",
        inst:"https://www.instagram.com/yoalexmartini/",
        tiktok:"https://www.tiktok.com/@alexmartini",
        logo:"../artists/martinilogo.png"
  
      },
      {
        src: "../artists/aissa (FILEminimizer).jpg",
        title: "Aissa",
        description: "Con su mayor éxito, 'Las Bratz', Aissa es una cantante marroquí que está a punto de alcanzar la cima del género urbano.",
        inst:"https://www.instagram.com/aissa.aslani/",
        tiktok:"https://www.tiktok.com/@aissa.aslanni",
        logo:"../artists/aissalogo.png"
  
      },
      {
        src: "../artists/barce (FILEminimizer).jpg",
        title: "Barce",
        description: "Con sólo 24 años, es uno de los DJ más solicitados de España. El autodenominado 'Pájaro' está listo para volar con nosotros por toda Europa.",
        inst:"https://www.instagram.com/jorgebarcenas_/",
        tiktok:"https://www.tiktok.com/@jorgebarcenas_",
        logo:"../artists/barcelogo.png"
  
      },
      {
        src: "../artists/cremades (FILEminimizer).jpg",
        title: "Jorge Cremades",
        description: "Con más de 3M de seguidores en las redes sociales, Jorge Cremades es un conocido Instagramer, que ahora ha dado el salto a su carrera como DJ. Pura energía y diversión",
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

  ];


function ArtistApp() {
  return <ArtistSlider images={images}/>;
}

export default ArtistApp;