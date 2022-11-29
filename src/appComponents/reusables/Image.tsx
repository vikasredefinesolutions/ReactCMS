// import axios from 'axios';

import config from 'api.config';
import { icons as _images } from 'Assets/images.asset';
import NextImage, { StaticImageData } from 'next/image';
import React from 'react';
interface _props {
  src: string | null;
  alt: string;
  className: string;
  width?: number | string;
  height?: number | string;
  cKey?: number | string;
}

const ImageComponent: React.FC<_props> = ({
  src,
  alt,
  className,
  height,
  width,
  cKey,
}) => {
  const getMediaURL = (src: string | null) => {
    let url: string | StaticImageData = '';
    if (src) {
      const srcWithHTTPs = src.includes('http');

      if (srcWithHTTPs) {
        url = src;
      }

      if (srcWithHTTPs === false) {
        url = `${config.mediaBaseUrl}${src}`;
      }
    }

    if (src === null) {
      url = _images.defaultProduct;
    }

    return url;
  };

  const mediaURL: string | StaticImageData = getMediaURL(src);

  return (
    // <div className='w-auto h-auto m-auto max-h-[400px]'>
    <NextImage
      src={mediaURL}
      alt={alt || ''}
      // layout="fill"
      height={height || 1}
      width={width || 1}
      layout="responsive"
      className={className}
      loading={'eager'}
      key={cKey || 0}
      // objectFit='contain'
    />
    // <img src={imageSrc} className={className} alt={alt} />
    // </div>
  );
};

export default ImageComponent;
