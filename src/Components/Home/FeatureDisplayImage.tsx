import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import React from 'react';

interface _props {
  productIndex: number;
  seName: string;
}

const FeatureDisplayImage: React.FC<_props> = ({ productIndex, seName }) => {
  const images = useTypedSelector((state) => state.home.selected.image);

  if (images === null) return <></>;

  return (
    <Link href={seName}>
      <a>
        <Image
          src={images[productIndex].imageUrl}
          alt={images[productIndex].altTag}
          className=""
        />
        {/* <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            //    xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 44 44"
            className="w-4 h-4"
          >
            <path
              id="favorite_FILL0_wght400_GRAD0_opsz48"
              d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
              transform="translate(-2 -1.3)"
            ></path>
          </svg>
        </div> */}
      </a>
    </Link>
  );
};

export default FeatureDisplayImage;
