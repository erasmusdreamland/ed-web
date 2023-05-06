import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';
import Gallery from './Gallery';
import CountriesGallery from './WhatsappGroups';
import Events from './Events';
import Croatia from './CroatiaScript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <header>
      <img src="logo.png" alt="Logo" className="w-28" />
      <nav ref={navRef} className={showNav ? 'responsive_nav' : ''}>
        <div className="nav-items">
          <Link exact to="/" onClick={closeNav}>
            HOME
          </Link>
		  <a href = "https://www.tickettailor.com/events/erasmusdreamland1/"> TICKETS</a>

          <Link to="/events" onClick={() => {closeNav(); Events();}}>
            OUR EVENTS
          </Link>
          <Link to="/gallery" onClick={() => {closeNav(); Gallery();}}>
            GALLERY
          </Link>
          <div className="dropdown">
            <a href="#!" onClick={toggleNav}>
              SOCIALS <i className="fa fa-angle-down"></i>
            </a>
            <div className="dropdown-content">
              <a href="https://google.com">INSTAGRAM <i className="fa fa-instagram"></i></a>
              <a href="#!" >FACEBOOK <i className="fa fa-facebook"></i></a>
              <a href="#!">TIKTOK  <i class="fab fa-tiktok"></i></a>
            </div>
            
          </div>

          <Link to="/whatsapp-groups" onClick={() => {closeNav(); CountriesGallery();}} className="nav-item">
           WHATSAPP GROUPS
          </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={toggleNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
