// import axios from 'axios';

import config from 'api.config';
import { icons as _images } from 'Assets/images.asset';
import NextImage from 'next/image';
import { useState } from 'react';
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
  const addingMediaUrl = config.mediaBaseUrl + src;
  const [imageSrc, setImageSrc] = useState(addingMediaUrl || '');
  if (src === null) {
    setImageSrc(_images.defaultProduct);
  }

  return (
    // <div className='w-auto h-auto m-auto max-h-[400px]'>
    <NextImage
      src={imageSrc}
      alt={alt || ''}
      // layout="fill"
      height={height || 1}
      width={width || 1}
      layout="responsive"
      className={className}
      // objectFit='contain'
    />
    // </div>
  );
};

export default ImageComponent;
