import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import "../Styles/main.css";
import Navbar from "./Nav";
import Home from "./Home";
import EventList from "./EventList";
import Croatia from "./CroatiaScript";
import { idR } from "./CardEvents";
import Footer from "./Footer";


function Gallery() {
  return (
    <div>
      <EventList />
      <Footer />
    </div>
  );
}

export default Gallery;