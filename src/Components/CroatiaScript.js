import React, { useEffect } from 'react';

const Croatia = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//fpronline.checkfront.com/lib/interface--0.js';
    document.body.appendChild(script);

    script.onload = () => {
      new window.DROPLET.Widget({
        host: 'fpronline.checkfront.com',
        target: 'CHECKFRONT_WIDGET_01',
        item_id: '2162,2163',
        category_id: '35',
        tid: 'erasmusdreamland',
        locale_id: 'en_GB',
        options: 'tabs,hidesearch,hidedates',
        provider: 'droplet'
      }).render();
    };
  }, []);

  return (
    <div className="croatiascript">
        <div className="titles">
        <h1>Ready for the Latest Erasmus Festival in Croatia?</h1>
        <h2>Book Your Spot at Big Beach Spring Break in Croatia and create memories to last a lifetime!</h2>
        </div>
      {/* CHECKFRONT BOOKING PLUGIN v25*/}
      <div id="CHECKFRONT_WIDGET_01" className="crocards">
        <p id="CHECKFRONT_LOADER" style={{ background: "url('//fpronline.checkfront.com/images/loader.gif') left center no-repeat", padding: "5px 5px 5px 20px" }}>
          Searching Availability...
        </p>
      </div>
      <noscript>
        <a href="https://fpronline.checkfront.com/reserve/" style={{ fontSize: "16px" }}>
          Continue to Secure Booking System &raquo;
        </a>
      </noscript>
    </div>
  );
};

export default Croatia;
