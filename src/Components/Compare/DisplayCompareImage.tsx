import React from 'react';
import Image from '../appComponents/reusables/Image';
import { useTypedSelector } from '../hooks';

const DisplayCompareImage: React.FC = () => {
  const images = useTypedSelector((state) => state.compare.selectedImages);

  return (
    <tr className="divide-x divide-x-gray-300">
      <td className="">
        <div className="w-96 p-2 relative"></div>
      </td>
      {images?.map((item) => (
        <Image
          key={item.index}
          src={item.url}
          alt={item.label}
          className={''}
        />
      ))}
    </tr>
  );
};

export default DisplayCompareImage;
