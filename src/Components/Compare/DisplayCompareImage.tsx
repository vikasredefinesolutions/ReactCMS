import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import React from 'react';

interface _props {
  onRemove: (val: number) => void;
}

const DisplayCompareImage: React.FC<_props> = ({ onRemove }) => {
  const images = useTypedSelector((state) => state.compare.selectedImages);

  return (
    <tr className='divide-x divide-x-gray-300'>
      <td className=''>
        <div className='w-96 p-2 relative' />
        {/* to left 1st block empty */}
      </td>

      {images?.map((item, index) => (
        <td key={index}>
          <div className='w-96 p-2 relative'>
            <button
              onClick={() => onRemove(index)}
              className='absolute right-1 top-1 text-secondary hover:text-secondary-hover z-50'
            >
              <span className='material-icons-outlined text-lg '>close</span>
            </button>
            <Link key={index} href={item.seName || '/'}>
              <a>
                <Image
                  key={item.index}
                  src={item.url}
                  alt={item.label}
                  className={''}
                />
              </a>
            </Link>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default DisplayCompareImage;
