import React, { useState } from "react";

function ArtistSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

  const handlePrevClick = () => {
    setCurrentImageIndex(Math.max(0, currentImageIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex(Math.min(images.length - 1, currentImageIndex + 1));
  };

  const startImageIndex = Math.max(0, currentImageIndex - 3);
  const endImageIndex = Math.min(images.length - 1, startImageIndex + 3);

  const visibleImagesArray = images.slice(startImageIndex, endImageIndex + 1);

  const showLeftArrow = startImageIndex !== 0;
  const showRightArrow = endImageIndex !== images.length - 1;

  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredImageIndex(-1);
  };

  return (
    <div className="carousel-container">
      {visibleImagesArray.map((image, index) => (
         <div className="carousel-img-container" key={startImageIndex + index}>
        <img
          key={startImageIndex + index}
          className={`carousel-img ${hoveredImageIndex === index ? 'hovered' : ''}`}
          src={image.src}
          alt="carousel"
          title={image.title}
          aria-describedby={image.description}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={handleImageLeave}
        />
        {hoveredImageIndex === index && (
            <div className="image-details">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
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
  );
}

export default ArtistSlider;
