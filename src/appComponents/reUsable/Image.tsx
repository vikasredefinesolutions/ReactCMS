// import axios from 'axios';

import { generateImageUrl } from 'helpers/common.helper';
import React from 'react';

import NextImage, { StaticImageData } from 'next/image';

interface _props {
  isStatic?: boolean;
  src: null | string | StaticImageData;
  alt: string;
  className: string;
  width?: number | string;
  height?: number | string;
  cKey?: number | string;
  useNextImage?: boolean;
  layout?: 'intrinsic' | 'fill' | 'responsive';
}

// 'fill' => Will the fill parent element width and height
// 'intrinsic' => max-width of image and will be responsive
// objectFit: will work with 'fill' => 'contain' or 'cover' => fill up the entire
// objectPosition:

const Image: React.FC<_props> = ({
  src,
  alt,
  className,
  height,
  width,
  cKey,
  layout = 'responsive',
  isStatic = false,
  useNextImage = true,
}) => {
  const imageUrl = generateImageUrl(src, isStatic);

  if (useNextImage) {
    return (
      <div style={{ width: '100%' }} className={className}>
        <NextImage
          src={imageUrl}
          alt={alt || ''}
          width={width || 1}
          height={height || 1}
          layout={layout}
          loading={'eager'}
          objectFit={'contain'}
          key={cKey || 0}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img src={imageUrl as string} alt={alt || ''} />
    </div>
  );
};

export default Image;
