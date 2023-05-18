import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function ArtistSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);
  const [visibleImages, setVisibleImages] = useState(4);

  const handlePrevClick = () => {
    setCurrentImageIndex(Math.max(0, currentImageIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex(Math.min(images.length - visibleImages, currentImageIndex + 1));
  };

  const handleSwipe = () => {
    const threshold = 50; // Minimum distance for a swipe action
    const deltaX = endX - startX;

    if (deltaX > threshold) {
      // Swipe to the left (previous card)
      handlePrevClick();
    } else if (deltaX < -threshold) {
      // Swipe to the right (next card)
      handleNextClick();
    }
  };

  let startX;
  let endX;

  const startSwipe = (e) => {
    startX = e.clientX || e.touches[0].clientX;
  };

  const endSwipe = (e) => {
    endX = e.clientX || e.changedTouches[0].clientX;
    handleSwipe();
  };

  const startImageIndex = Math.max(0, currentImageIndex);
  const endImageIndex = Math.min(images.length - 1, startImageIndex + visibleImages - 1);

  const visibleImagesArray = images.slice(startImageIndex, endImageIndex + 1);

  const showLeftArrow = startImageIndex !== 0;
  const showRightArrow = endImageIndex !== images.length - 1;

  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredImageIndex(-1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleImages(1);
      } else {
        setVisibleImages(4);
        const newCurrentImageIndex = Math.max(0, currentImageIndex - (visibleImages - 4));
        setCurrentImageIndex(Math.min(images.length - visibleImages, newCurrentImageIndex));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentImageIndex, images.length, visibleImages]);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">OUR ARTISTS</h2>
      <p className="carousel-subtitle">
        Meet the DJs who will make you dance during the best year of your life.
      </p>
      <div className="carousel-container">
        {visibleImagesArray.map((image, index) => (
          <div
            className={`carousel-img-container ${hoveredImageIndex === index ? "hovered" : ""}`}
            key={startImageIndex + index}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={handleImageLeave}
          >
            <img
              className="carousel-img"
              src={image.src}
              alt="carousel"
              title={image.title}
              aria-describedby={image.description}
            />
            {hoveredImageIndex === index && (
              <div className="image-details">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <div className="artist-icons">
                  <a href={image.inst}>&nbsp;<i className="fa fa-instagram" style={{color:"yellow"}}></i></a>
                  <a href={image.tiktok}>&nbsp;<i className="fab fa-tiktok" style={{color:"yellow"}}></i></a>
                </div>
              </div>
            )}
            {image.logo && (
              <img
                className="artist-logo"
                src={image.logo}
                alt={`${image.title} logo`}
              />
            )}
          </div>
        ))}

        {showLeftArrow && (
          <button className="carousel-arrow prev" onClick={handlePrevClick}>
            &lt;
          </button>
        )}
        {showRightArrow && (
          <button className="carousel-arrow next" onClick={handleNextClick}>
            &gt;
          </button>
        )}
        
      </div>
    </div>
  );
}

export default ArtistSlider;
