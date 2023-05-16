import React, { useState, useRef } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import { Link } from 'react-router-dom';

function Footer() {

    const navRef = useRef();
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
      setShowNav(!showNav);
    };
  
    const closeNav = () => {
      setShowNav(false);
    };
  return (
    <footer className="footer">
      <p className="footer__company">Erasmus Dreamland &copy; {new Date().getFullYear()}</p>
        <Link to="/privacy-policy" className="footer__link" onClick={() => {closeNav(); PrivacyPolicy();}}>Privacy Policy </Link>

    </footer>
  );
}

export default Footer;
