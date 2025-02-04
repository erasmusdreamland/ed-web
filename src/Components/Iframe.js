import React, { useEffect } from 'react';

const IframeFourvenues = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.fourvenues.com/assets/iframe/erasmus-dreamland/calendar@";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className="title-gallery">COMPRA TUS ENTRADAS</h2>
      <div id="fourvenues-iframe"></div>
    </div>
  );
};

export default IframeFourvenues;
