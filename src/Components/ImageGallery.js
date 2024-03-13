import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import { cardData } from './CardList';
import Card from './Card';
import { idCard } from './Card';




const folderInfo = [  
  {
    imageFolder: '/martini/',
    imageFiles:require.context('../../public/martini', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL WITH ALEX MARTINI | KRAKOW (POLAND) | 07/03/24'
  },
  {
    imageFolder: '/carnaval-cracovia/',
    imageFiles:require.context('../../public/carnaval-cracovia', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST CARNIVAL XXL FESTIVAL | KRAKOW (POLAND) | 24/02/24'
  },
  {
    imageFolder: '/carnaval-granada/',
    imageFiles:require.context('../../public/carnaval-granada', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST CARNIVAL XXL FESTIVAL | GRANADA (SPAIN) | 15/02/24'
  },
  {
    imageFolder: '/carnaval-bruselas/',
    imageFiles:require.context('../../public/carnaval-bruselas', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST CARNIVAL XXL FESTIVAL | BRUSSELS (BELGIUM) | 08/02/24'
  },
  {
    imageFolder: '/barce-krakow/',
    imageFiles:require.context('../../public/barce-krakow', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL WITH BARCE | KRAKOW (POLAND) | 07/12/23'
  },
  {
    imageFolder: '/barce-rome/',
    imageFiles:require.context('../../public/barce-rome', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS FESTIVAL WITH BARCE | ROME (ITALY) | 06/12/23'
  },
  {
    imageFolder: '/feid-afterparty/',
    imageFiles:require.context('../../public/feid-afterparty', false, /\.(jpe?g|png|gif)$/),
    title: 'FEID AFTER PARTY | MILAN (ITALY) | 06/11/23'
  },
  {
    imageFolder: '/halloween-brno/',
    imageFiles:require.context('../../public/halloween-brno', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS HALLOWEEN FESTIVAL | BRNO (CZECH REPUBLIC) | 31/10/23'
  },
  {
    imageFolder: '/halloween-bratislava/',
    imageFiles:require.context('../../public/halloween-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS HALLOWEEN FESTIVAL | BRATISLAVA (SLOVAKIA) | 30/10/23'
  },
  {
    imageFolder: '/halloween-krakow/',
    imageFiles:require.context('../../public/halloween-krakow', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS HALLOWEEN FESTIVAL | KRAKOW (POLAND) | 27/10/23'
  },
  {
    imageFolder: '/ibiza-party/',
    imageFiles:require.context('../../public/ibiza-party', false, /\.(jpe?g|png|gif)$/),
    title: 'IBIZA PARTY | BRATISLAVA (SLOVAKIA) | 26/10/23'
  },
  {
    imageFolder: '/halloween-bolonia/',
    imageFiles:require.context('../../public/halloween-bolonia', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS HALLOWEEN FESTIVAL | BOLOGNA (ITALY) | 25/10/23'
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
  },
  {
    imageFolder: '/welcome-warsaw/',
    imageFiles:require.context('../../public/welcome-warsaw', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | WARSAW (POLAND) | 04/10/23'
  },
  {
    imageFolder: '/welcome-krakow/',
    imageFiles:require.context('../../public/welcome-krakow', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | KRAKOW (POLAND) | 03/10/23'
  },
  {
    imageFolder: '/welcome-wroclaw/',
    imageFiles:require.context('../../public/welcome-wroclaw', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | WROCLAW (POLAND) | 03/10/23'
  },
  {
    imageFolder: '/welcome-athens/',
    imageFiles:require.context('../../public/welcome-athens', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST ERASMUS WELCOME PARTY | ATHENS (GREECE) | 02/10/23'
  },
  {
    imageFolder: '/carnival-bratislava/',
    imageFiles:require.context('../../public/carnival-bratislava', false, /\.(jpe?g|png|gif)$/),
    title: 'CARNIVAL PARTY | BRATISLAVA (SLOVAKIA) | 28/09/23'
  },
  {
    imageFolder: '/aniversary-brno/',
    imageFiles:require.context('../../public/aniversary-brno', false, /\.(jpe?g|png|gif)$/),
    title: 'THE BIGGEST 3RD ANIVERSARY PARTY | BRNO (CZECH REPUBLIC) | 26/09/23'
  },
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