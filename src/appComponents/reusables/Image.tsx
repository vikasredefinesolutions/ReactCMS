// import axios from 'axios';

import config from 'api.config';
import { icons as _images } from 'Assets/images.asset';
import { useState } from 'react';

interface _props {
  src: string | null;
  alt: string;
  className: string;
}

const ImageComponent: React.FC<_props> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('loading');
  const isLoading = imageSrc === 'loading';
  if (src === null) {
    setImageSrc(_images.defaultProduct);
  } else {
    checkIfImageExists();
  }
  function checkIfImageExists() {
    const url = `${config.mediaBaseUrl}${src}`;

    // const img = new Image();
    // img.onload = () => setImageSrc(url);
    // img.onerror = () => setImageSrc(_images.defaultProduct);
    // img.src = url;
  }

  return (
    <img
      src={isLoading ? _images.loaderGif : imageSrc}
      alt={alt || ''}
      className={isLoading ? 'h-20 m-auto' : className}
    />
  );
};

export default ImageComponent;
