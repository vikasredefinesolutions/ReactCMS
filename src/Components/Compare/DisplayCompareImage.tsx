import React from 'react';
import Image from 'appComponents/reusables/Image';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';

const DisplayCompareImage: React.FC = () => {
  const images = useTypedSelector((state) => state.compare.selectedImages);

  return (
    <tr className="divide-x divide-x-gray-300">
      <td className="">
        <div className="w-96 p-2 relative" />
        {/* to left 1st block empty */}
      </td>

      {images?.map((item) => (
        <Link href={item.seName || '/'}>
          <a>
            <Image
              key={item.index}
              src={item.url}
              alt={item.label}
              className={''}
            />
          </a>
        </Link>
      ))}
    </tr>
  );
};

export default DisplayCompareImage;
