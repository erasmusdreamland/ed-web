import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import "../Styles/main.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";


const europeMap = require('../europe.json'); // GeoJSON file containing Europe map data




const Map = () => {
  
  const [tooltipContent, setTooltipContent] = useState('');

  const handleTooltip = (europeMap) => {
    const name =  europeMap.properties.NAME
    const city =  europeMap.properties.CITY
    const club =  europeMap.properties.CLUB
    const img = europeMap.properties.IMAGE
    const city2 =  europeMap.properties.CITY2
    const club2 =  europeMap.properties.CLUB2
    const cityAndClub = city && club ? `${city} ${club}` : 'soon';
  
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
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 200, center: [20,20] }}
        >
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