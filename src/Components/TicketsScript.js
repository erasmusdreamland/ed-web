import React, { useEffect } from 'react';

import { idR } from './CardEvents';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
const scriptData = [

  {
    party: "BRATISLAVA OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget',
    image: "/banner-tickets/bratis.png"
  },
  {
    party: "PRAGA OPEN",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072402/chk/db0f/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072402/chk/db0f/?ref=website_widget',
    image:"/banner-tickets/prague.png"
  },
  {
    party: "BRNO OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072392/chk/ba44/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072392/chk/ba44/?ref=website_widget',
    image:"/banner-tickets/brno-welcome.png"
  },
    {
    party: "VIENA OPENING NO ESTA",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072393/chk/1a85/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072393/chk/1a85/?ref=website_widget',
    image:"/banner-tickets/vieH.png"
  },
  {
    party: "GRAN CANARIA",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072396/chk/e571/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072396/chk/e571/?ref=website_widget',
    image:"/banner-tickets/granH.png"
  },
  {
    party: "PORTO OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2672426/chk/38b5/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2672426/chk/38b5/?ref=website_widget',
    image:"/banner-tickets/portoH.png"
  },
  {
    party: "BOLO OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2455063/chk/e148/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2455063/chk/e148/?ref=website_widget',
    image:"/banner-tickets/boloH.png"
  },
  {
    party: "BRUSSLES",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072404/chk/a465/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072404/chk/a465/?ref=website_widget',
    image:"/banner-tickets/bruH.png"
  },

  {
    party: "MILAN OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072405/chk/55c6/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072405/chk/55c6/?ref=website_widget',
    image:"/banner-tickets/milan.png"
  },
  {
    party: "BUDAPEST",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2672419/chk/f494/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2672419/chk/f494/?ref=website_widget',
    image:"/banner-tickets/budaH.png"
  },
  {
    party: "MADRID OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2424041/chk/626d/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2424041/chk/626d/?ref=website_widget',
    image:"/banner-tickets/madrid.png"
  },
  {
    party: "PARIS OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072426/chk/26a8/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072426/chk/26a8/?ref=website_widget',
    image:"/banner-tickets/paris.png"
  },
  {
    party: "LJUBLJANA",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072426/chk/26a8/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072426/chk/26a8/?ref=website_widget',
    image:"/banner-tickets/ljubljianaH.png"
  },
  {
    party: "GREECE OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget',
    image:"/banner-tickets/greece.png"
  },
    {
    party: "WROCLAW NO ESTA OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2075157/chk/c1d6/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2075157/chk/c1d6/?ref=website_widget',
    image:"/banner-tickets/wroH.png"
  },
  {
    party: "KRA OPENING NO ESTA",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: 'https://www.tickettailor.com/checkout/new-session/id/2481924/chk/eac6/?ref=website_widget',
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2481924/chk/eac6/?ref=website_widget',
    image:"/banner-tickets/kraH.png"
  },
    {
    party: "LODZ NO ESTA OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: 'https://www.tickettailor.com/checkout/new-session/id/2075181/chk/2775/?ref=website_widget',
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2075181/chk/2775/?ref=website_widget',
    image:"/banner-tickets/lodzH.png"
  }



]



const TicketsScript = () => {

  let { id } = useParams();
  useEffect(() => {
    let idR = Number(id);
    const script = document.createElement('script');
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
    script.setAttribute('data-url', scriptData[idR].url2);
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');

    const divWidget = document.createElement('div');
    divWidget.className = 'tt-widget';
    const divFallback = document.createElement('div');
    divFallback.className = 'tt-widget-fallback';
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = scriptData[idR].url2;
    a.target = '_blank';
    a.innerText = 'Click here to buy tickets';
    p.appendChild(a);
    divFallback.appendChild(p);
    divWidget.appendChild(divFallback);
    divWidget.appendChild(script);

    const widgetContainer = document.getElementById('widget-container');
    widgetContainer.appendChild(divWidget);
  }, [id]);
  const idR = Number(id);


  return (
    <div className='ticket-page'>
      <img src={scriptData[idR].image} alt="Party Image" className='banner-tickets' />
      <div id="widget-container" className="center-container"></div>
      <Footer />
    </div>
  );
};

export default TicketsScript;
