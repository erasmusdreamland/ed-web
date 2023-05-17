import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import "../Styles/main.css";
import Navbar from "./Nav";
import Home from "./Home";
import Map from "./Map";
import CardList from "./CardList";
import Footer from "./Footer";

function Gallery() {
  return (
    <div>
      <CardList />
      <Footer />
    </div>
  );
}

export default Gallery;