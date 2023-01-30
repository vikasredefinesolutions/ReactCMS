// import axios from 'axios';

import { generateImageUrl } from 'helpers/common.helper';
import NextImage, { StaticImageData } from 'next/image';
import React from 'react';

interface _props {
  isStatic?: boolean;
  src: null | string | StaticImageData;
  alt: string;
  className: string;
  width?: number | string;
  height?: number | string;
  cKey?: number | string;
}

const Image: React.FC<_props> = ({
  src,
  alt,
  className,
  height,
  width,
  cKey,
  isStatic = false,
}) => {
  const imageUrl = generateImageUrl(src, isStatic);

  return (
    <div style={{ width: '100%' }} className={className}>
      <NextImage
        src={imageUrl}
        alt={alt || ''}
        height={height || 1}
        width={width || 1}
        layout='responsive'
        loading={'eager'}
        key={cKey || 0}
      />
    </div>
  );
};

export default Image;
