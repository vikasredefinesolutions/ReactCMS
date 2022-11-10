// import axios from 'axios';
import React, { useState } from 'react';
import { imageLoaderGif } from '../../Assets/images';
import defaultImg from '../../Assets/images/newNavy.png';
import config from '../../config';

interface _props {
  src: string | null;
  alt: string;
  className: string;
}

const ImageComponent: React.FC<_props> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('loading');
  const isLoading = imageSrc === 'loading';
  if (src === null) {
    setImageSrc(defaultImg);
  } else {
    checkIfImageExists();
  }
  function checkIfImageExists() {
    const url = `${config.mediaBaseUrl}${src}`;

    const img = new Image();
    img.onload = () => setImageSrc(url);
    img.onerror = () => setImageSrc(defaultImg);

    img.src = url;
  }

  return (
    <img
      src={isLoading ? imageLoaderGif : imageSrc}
      alt={alt || ''}
      className={isLoading ? 'h-20 m-auto' : className}
    />
  );
};

export default ImageComponent;
