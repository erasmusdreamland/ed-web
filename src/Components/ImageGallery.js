import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import { cardData } from './CardList'; 
import Card from './Card';
import { idCard } from './Card';




const folderInfo = [  
  {
    imageFolder: '/welcome-coimbra-24/',
    imageFiles:require.context('../../public/welcome-coimbra-24', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | COIMBRA (PORTUGAL) | 12/09/24'
  },
  {
    imageFolder: '/welcome-lp-24/',
    imageFiles:require.context('../../public/welcome-lp-24', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | LAS PALMAS (ESPAÑA) | 11/09/24'
  },

  {
    imageFolder: '/feid-afterparty/',
    imageFiles:require.context('../../public/feid-afterparty', false, /\.(jpe?g|png|gif)$/),
    title: 'FEID AFTER PARTY | MILAN (ITALY) | 06/11/23'
  },
  {
    imageFolder: '/halloween-krakow/',
    imageFiles:require.context('../../public/halloween-krakow', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS HALLOWEEN FESTIVAL | KRAKOW (POLAND) | 27/10/23'
  },
  {
    imageFolder: '/tbef-bratislava/',
    imageFiles:require.context('../../public/tbef-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL | BRATISLAVA (SLOVAKIA) | 14/10/23'
  },
  {
    imageFolder: '/tbef-brussels/',
    imageFiles:require.context('../../public/tbef-brussels', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL | BRUSSELS (BELGIUM) | 12/10/23'
  }



]



const ImageSlider = () => {
  const id = idCard
  const imageFolder = folderInfo[id].imageFolder;
  const imageFiles = folderInfo[id].imageFiles;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [thumbnailOffset, setThumbnailOffset] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(2);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setSelectedThumbnailIndex(2);
  }, [selectedImageIndex]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseSlider = () => {
    setSelectedImageIndex(null);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
    if (thumbnailOffset > 0) {
      setThumbnailOffset(thumbnailOffset - 1);
    }
    if (selectedThumbnailIndex > 0) {
      setSelectedThumbnailIndex(selectedThumbnailIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < imageFiles.keys().length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
    if (thumbnailOffset < imageFiles.keys().length - 5) {
      setThumbnailOffset(thumbnailOffset + 1);
    }
    if (selectedThumbnailIndex < 4) {
      setSelectedThumbnailIndex(selectedThumbnailIndex + 2);
    }
  };

  return (
    <div>
      <h1 className="title-gallery" >{folderInfo[id].title}</h1>

      <div className="image-gallery">
        {imageFiles.keys().map((imageName, index) => (
          <img
            src={`${imageFolder}${imageName}`}
            alt={imageName}
            key={imageName}
            className="image-gallery__image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="slider-img-overlay" onClick={handleCloseSlider}>
          <div className="slider-img" onClick={(event) => event.stopPropagation()}>
            <img
              src={`${imageFolder}${imageFiles.keys()[selectedImageIndex]}`}
              alt={imageFiles.keys()[selectedImageIndex]}
              className="slider-img__image"
            />

            <button className="slider-img__close-button" onClick={handleCloseSlider} >
              X
            </button>

            {selectedImageIndex > 0 && (
              <button className="slider-img__arrow slider-img__arrow--left" onClick={handlePreviousImage}>
                &#10094;
              </button>
            )}

            {selectedImageIndex < imageFiles.keys().length - 1 && (
              <button className="slider-img__arrow slider-img__arrow--right" onClick={handleNextImage}>
                &#10095;
              </button>
            )}

            <div className="slider-img__thumbnails">
              {imageFiles.keys().slice(thumbnailOffset, thumbnailOffset + 5).map((imageName, index) => (
                <img
                  src={`${imageFolder}${imageName}`}
                  alt={imageName}
                  key={imageName}
                  className={`slider-img__thumbnail ${selectedImageIndex === index + thumbnailOffset ? 'slider-img__thumbnail--selected' : ''}`}
                  onClick={() => handleImageClick(index + thumbnailOffset)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;