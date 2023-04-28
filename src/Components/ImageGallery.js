import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import { cardData } from './CardList';
import Card from './Card';
import { idCard } from './Card';




const folderInfo = [
  {
    imageFolder: '/mexican/',
    imageFiles:require.context('../../public/mexican', false, /\.(jpe?g|png|gif)$/),
    title: 'MEXICAN PARTY | BRATISLAVA (SLOVAKIA) | 27.04.23'
  },
  {
    imageFolder: '/tournament-party/',
    imageFiles:require.context('../../public/tournament-party', false, /\.(jpe?g|png|gif)$/),
    title: 'FOOTBALL CUP PARTY & GALA | BRATISLAVA (SLOVAKIA) | 22.04.23'
  },
  {
    imageFolder: '/tournament/',
    imageFiles:require.context('../../public/tournament', false, /\.(jpe?g|png|gif)$/),
    title: 'FOOTBALL CUP 2ND EDITION | BRATISLAVA (SLOVAKIA) | 22.04.23'
  },
  {
    imageFolder: '/sex-change/',
    imageFiles:require.context('../../public/sex-change', false, /\.(jpe?g|png|gif)$/),
    title: 'SEX CHANGE PARTY | BRATISLAVA (SLOVAKIA) | 21.04.23'
  },
  {
    imageFolder: '/draw/',
    imageFiles:require.context('../../public/draw', false, /\.(jpe?g|png|gif)$/),
    title: 'WRITE ON ME PARTY | BRATISLAVA (SLOVAKIA) | 30.03.23'
  },
  {
    imageFolder: '/alvama/',
    imageFiles:require.context('../../public/alvama', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL @ALVAMAICE'
  },

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