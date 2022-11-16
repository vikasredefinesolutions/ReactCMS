// import axios from 'axios';

import { useState, useEffect } from 'react';
import { icons as _images } from 'Assets/images.asset';
import NextImage from 'next/image';
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
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    if (src === null) {
      setImageSrc(_images.defaultProduct);
    }
  }, [src]);

  return (
    // <div className='w-auto h-auto m-auto max-h-[400px]'>
    <NextImage
      src={imageSrc ? imageSrc : ''}
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
