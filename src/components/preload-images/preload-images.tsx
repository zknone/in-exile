import React, { useEffect } from 'react';

interface PreloadImagesProps {
  images: string[];
}

const PreloadImages: React.FC<PreloadImagesProps> = ({ images }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
      });
    };

    preloadImages();
  }, [images]);

  return null;
};

export default PreloadImages;
