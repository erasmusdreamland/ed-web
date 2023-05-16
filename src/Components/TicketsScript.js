import React, { useEffect } from 'react';
import { cardData } from './EventList';
import { idScript } from './CardEvents';

const scriptData = [
  {
    party: "BRATISLAVA OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072388/chk/006b/?ref=website_widget',
  },
  {
    party: "MILAN OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2072405/chk/55c6/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2072405/chk/55c6/?ref=website_widget',
  },
  {
    party: "GREECE OPENING",
    url1: "https://cdn.tickettailor.com/js/widgets/min/widget.js",
    url2: "https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget",
    url3: 'https://www.tickettailor.com/checkout/new-session/id/2075146/chk/e353/?ref=website_widget',
  }

]



const TicketsScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptData[idScript].url1;
    script.setAttribute('data-url', scriptData[idScript].url2);
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'true');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');

    const divWidget = document.createElement('div');
    divWidget.className = 'tt-widget';
    const divFallback = document.createElement('div');
    divFallback.className = 'tt-widget-fallback';
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = scriptData[idScript].url3;
    a.target = '_blank';
    a.innerText = 'Click here to buy tickets';
    p.appendChild(a);
    divFallback.appendChild(p);
    divWidget.appendChild(divFallback);
    divWidget.appendChild(script);

    const widgetContainer = document.getElementById('widget-container');
    widgetContainer.appendChild(divWidget);
  }, []);

  return <div id="widget-container"></div>;
};

export default TicketsScript;
