// import axios from 'axios';

import { useState, useEffect } from 'react';
import config from 'api.config';
import { icons as _images } from 'Assets/images.asset';
import NextImage from 'next/image';
import { icons } from '../../Assets/images.asset';
interface _props {
  src: string | null;
  alt: string;
  className: string;
  width?: number | string;
  height?: number | string;
}

const ImageComponent: React.FC<_props> = ({
  src,
  alt,
  className,
  height,
  width,
}) => {
  return (
    // <div className='w-auto h-auto m-auto max-h-[400px]'>
    <NextImage
      src={src || _images.defaultProduct}
      alt={alt || ''}
      // layout="fill"
      height={height || 1}
      width={width || 1}
      layout="responsive"
      className={className}
      loading={'eager'}
      // objectFit='contain'
    />
    // <img src={imageSrc} className={className}/>
    // </div>
  );
};

export default ImageComponent;
