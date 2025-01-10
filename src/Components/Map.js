import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import "../Styles/main.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";


const europeMap = require('../europe.json'); // GeoJSON file containing Europe map data

const Map = () => {

  const [projectionConfig, setProjectionConfig] = useState({
    scale: 200,
    center: [20, 20],
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 800) {
        setProjectionConfig({ scale: 450, center: [20, 55] });
      } else {
        setProjectionConfig({ scale: 200, center: [20, 20] });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const [tooltipContent, setTooltipContent] = useState('');

  const handleTooltip = (europeMap) => {
    const name =  europeMap.properties.NAME
    const city =  europeMap.properties.CITY
    const club =  europeMap.properties.CLUB
    const img = europeMap.properties.IMAGE
    const city2 =  europeMap.properties.CITY2
    const club2 =  europeMap.properties.CLUB2
    const city3 =  europeMap.properties.CITY3
    const club3 =  europeMap.properties.CLUB3
    const city4 =  europeMap.properties.CITY4
    const club4 =  europeMap.properties.CLUB4
    const city5 =  europeMap.properties.CITY5
    const club5 =  europeMap.properties.CLUB5
    const city6 =  europeMap.properties.CITY6
    const club6 =  europeMap.properties.CLUB6
    const city7 =  europeMap.properties.CITY7
    const club7 =  europeMap.properties.CLUB7
    const city8 =  europeMap.properties.CITY8
    const club8 =  europeMap.properties.CLUB8
    const city9 =  europeMap.properties.CITY9
    const club9 =  europeMap.properties.CLUB9
    const city10 =  europeMap.properties.CITY10
    const club10 =  europeMap.properties.CLUB10
    const city11 =  europeMap.properties.CITY11
    const club11 =  europeMap.properties.CLUB11
    const city12 =  europeMap.properties.CITY12
    const club12=  europeMap.properties.CLUB12
    const city13 =  europeMap.properties.CITY13
    const club13 =  europeMap.properties.CLUB13
    const city14 =  europeMap.properties.CITY14
    const club14 =  europeMap.properties.CLUB14


    const cityAndClub = city && club ? `${city} ${club}` : '¡Muy pronto!';
  
    setTooltipContent((
      <div>
        <h1>{name}<span className={img}></span></h1>
        {city || club ? (
          <ul>
            {city && club && (
              <li>{city} {club}</li>
            )}
            {city2 && club2 && (
              <li>{city2} {club2}</li>
            )}
            {city3 && club3 && (
              <li>{city3} {club3}</li>
            )}
            {city4 && club4 && (
              <li>{city4} {club4}</li>
            )}
            {city5 && club5 && (
              <li>{city5} {club5}</li>
            )}
            {city6 && club6 && (
              <li>{city6} {club6}</li>
            )}
            {city7 && club7 && (
              <li>{city7} {club7}</li>
            )}
            {city8 && club8 && (
              <li>{city8} {club8}</li>
            )}
            {city9 && club9 && (
              <li>{city9} {club9}</li>
            )}
                        {city10 && club10 && (
              <li>{city10} {club10}</li>
            )}
                        {city11 && club11 && (
              <li>{city11} {club11}</li>
            )}
                        {city12 && club12 && (
              <li>{city12} {club12}</li>
            )}
                        {city13 && club13 && (
              <li>{city13} {club13}</li>
            )}
                        {city14 && club14 && (
              <li>{city14} {club14}</li>
            )}
            
          </ul>
        ) : (
          <p>{cityAndClub}</p>
        )}
      </div>
    ));
  };
  

  const resetTooltip = () => {
    setTooltipContent('');
  };

  return (
    <div className="map">
       <ComposableMap projection="geoMercator" projectionConfig={projectionConfig}>
        <Geographies geography={europeMap}>
          {({ geographies }) =>
          
            geographies.map((geo) => (
              
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleTooltip(geo)}
                onMouseLeave={resetTooltip}
                className="rsm-geography"
                style={{
                  default: {
                    fill: "#ffffff",
                    outline: '#000000',
                    stroke: "#000000",
                    strokeWidth: 0.5
                  },
                  hover: {
                    fill: "#fffe22",
                    outline: 'none',
                    stroke: "#000000"
                  },
                  pressed: {
                    fill: 'fffe22',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div className="tooltip">
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default Map;

