import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import { cardData } from './CardList';
import Card from './Card';
import { idCard } from './Card';




const folderInfo = [
  {
    imageFolder: '/welcome-naples/',
    imageFiles:require.context('../../public/welcome-naples', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | NAPLES (ITALY) | 21/09/23'
  },
  {
    imageFolder: '/welcome-paris/',
    imageFiles:require.context('../../public/welcome-paris', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | PARIS (FRANCE) | 20/09/23'
  },
  {
    imageFolder: '/aniversary-bratislava/',
    imageFiles:require.context('../../public/aniversary-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST 3RD ANIVERSARY PARTY | BRATISLAVA (SLOVAKIA) | 18/09/23'
  },
  {
    imageFolder: '/welcome-budapest/',
    imageFiles:require.context('../../public/welcome-budapest', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | BUDAPEST (HUNGARY) | 16/09/23'
  },
  {
    imageFolder: '/welcome-milan/',
    imageFiles:require.context('../../public/welcome-milan', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | MILAN (ITALY) | 15/09/23'
  },

  {
    imageFolder: '/welcome-brussels-be/',
    imageFiles:require.context('../../public/welcome-brussels-be', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | BRUSSELS (BELGIUM) | 14/09/23'
  },
  {
    imageFolder: '/welcome-bologna/',
    imageFiles:require.context('../../public/welcome-bologna', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | BOLOGNA (ITALY) | 14/09/23'
  },
  {
    imageFolder: '/welcome-laspalmas/',
    imageFiles:require.context('../../public/welcome-laspalmas', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | LAS PALMAS DE GRAN CANARIA (SPAIN) | 13/09/23'
  },
  {
    imageFolder: '/traffic-light-bratislava/',
    imageFiles:require.context('../../public/traffic-light-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'TRAFFIC LIGHT PARTY | BRATISLAVA (SLOVAKIA) | 13/09/23'
  },
  {
    imageFolder: '/welcome-viena/',
    imageFiles:require.context('../../public/welcome-viena', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | VIENA (AUSTRIA) | 12/09/23'
  },
  {
    imageFolder: '/welcome-bratislava/',
    imageFiles:require.context('../../public/welcome-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | BRATISLAVA (SLOVAKIA) | 11/09/23'
  },
  
  {
    imageFolder: '/bergen/',
    imageFiles:require.context('../../public/bergen', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | BERGEN (NORWAY) | 01/09/23'
  },
  {
    imageFolder: '/copenhagen/',
    imageFiles:require.context('../../public/copenhagen', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | COPENHAGEN (DENMARK) | 31/08/23'
  },
  {
    imageFolder: '/tbef-beach/',
    imageFiles:require.context('../../public/tbef-beach', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL BEACH EDITION | BRATISLAVA (SLOVAKIA) | 13.06.23'
  },
  {
    imageFolder: '/oscars-party/',
    imageFiles:require.context('../../public/oscars-party', false, /\.(jpe?g|png|gif)$/),
    title: 'THE OSCARS PARTY | BRATISLAVA (SLOVAKIA) | 25.05.23'
  },
  {
    imageFolder: '/brno-tblef/',
    imageFiles:require.context('../../public/brno-tblef', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST LAST ERASMUS PARTY | BRNO (CZECH REPUBLIC) | 20.05.23'
  },
  {
    imageFolder: '/ibiparty/',
    imageFiles:require.context('../../public/ibiparty', false, /\.(jpe?g|png|gif)$/),
    title: 'IBIZA PARTY | BRATISLAVA (SLOVAKIA) | 14.05.23'
  },
  {
    imageFolder: '/munich/',
    imageFiles:require.context('../../public/munich', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL | MUNICH (GERMANY) | 11.05.23'
  },
  {
    imageFolder: '/sunglasses-party/',
    imageFiles:require.context('../../public/sunglasses-party', false, /\.(jpe?g|png|gif)$/),
    title: 'SUNGLASSES PARTY | BRATISLAVA (SLOVAKIA) | 06.05.23'
  },
  {
    imageFolder: '/supercup/',
    imageFiles:require.context('../../public/supercup', false, /\.(jpe?g|png|gif)$/),
    title: 'FOOTBALL SUPERCUP | BRATISLAVA (SLOVAKIA) | 06.05.23'
  },
  {
    imageFolder: '/krakow-festival/',
    imageFiles:require.context('../../public/krakow-festival', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL WITH ALEX MARTINI | KRAKOW (POLAND) | 27.04.23'
  },
  {
    imageFolder: '/mexican-party/',
    imageFiles:require.context('../../public/mexican-party', false, /\.(jpe?g|png|gif)$/),
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
    imageFolder: '/porto/',
    imageFiles:require.context('../../public/porto', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL | PORTO (PORTUGAL) | 20.04.23'
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