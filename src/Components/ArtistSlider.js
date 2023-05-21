import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaTiktok,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight
} from 'react-icons/fa';



function ArtistSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);
  const [visibleImages, setVisibleImages] = useState(4);
  const logoRef = useRef(null);
  const touchStartX = useRef(null);
  const transitionDuration = 300; // milliseconds

  const handlePrevClick = () => {
    setCurrentImageIndex(Math.max(0, currentImageIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex(Math.min(images.length - visibleImages, currentImageIndex + 1));
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

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevent default touch event behavior

    const touchCurrentX = event.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX.current;

    if (touchDeltaX > 0) {
      handlePrevClick();
    } else if (touchDeltaX < 0) {
      handleNextClick();
    }
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

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [currentImageIndex, images.length, visibleImages]);

  useEffect(() => {
    const logoHeight = logoRef.current ? logoRef.current.offsetHeight : 0;
    // Use the logoHeight value in CSS or perform any other logic based on the height value
    console.log('Logo height:', logoHeight);
  }, [logoRef.current]);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">OUR ARTISTS</h2>
      <p className="carousel-subtitle">
        Meet the DJs who will make you dance during the best year of your life.
      </p>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="carousel-slider"
          style={{
            transform: `translateX(-${currentImageIndex * (100 / visibleImages)}%)`,
            transitionDuration: `${transitionDuration}ms`,
          }}
        >
          {visibleImagesArray.map((image, index) => (
            <div
              className={`carousel-img-container ${hoveredImageIndex === index ? 'hovered' : ''}`}
              key={startImageIndex + index}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
            >
              <div className="carousel-img-details">
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
                      <a href={image.inst}>
                        &nbsp;
                        <i className="fa fa-instagram" style={{ color: 'yellow' }}></i>
                      </a>
                      <a href={image.tiktok}>
                        &nbsp;
                        <i className="fab fa-tiktok" style={{ color: 'yellow' }}></i>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {image.logo && (
                <img
                  className="artist-logo"
                  ref={logoRef}
                  src={image.logo}
                  alt={`${image.title} logo`}
                />
              )}
            </div>
          ))}
        </div>

        {showLeftArrow && (
          <button className="carousel-arrow prev" onClick={handlePrevClick}>
            <FaArrowAltCircleLeft />
          </button>
        )}
        {showRightArrow && (
          <button className="carousel-arrow next" onClick={handleNextClick}>
            <FaArrowAltCircleRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default ArtistSlider;
