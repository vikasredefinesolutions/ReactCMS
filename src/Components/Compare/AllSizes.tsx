import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  index: number;
  sizes: {
    colorAttributeOptionId: number;
    sizeArr: string[];
  };
}

const AllSizes: React.FC<_props> = ({ sizes, index }) => {
  const selectedImages = useTypedSelector(
    (state) => state.compare.selectedImages,
  );

  if (selectedImages) {
    if (
      sizes.colorAttributeOptionId === selectedImages[index]?.attibuteOptionId
    ) {
      return (
        <td className=''>
          <div className='p-2 flex flex-wrap gap-2'>
            {sizes.sizeArr.map((size, index) => (
              <div
                key={index}
                className='w-10 h-10 border border-gray-300 bg-gray-100 flex justify-center items-center'
              >
                {size}
              </div>
            ))}
          </div>
        </td>
      );
    }
  }
  return <></>;
};

export default AllSizes;
