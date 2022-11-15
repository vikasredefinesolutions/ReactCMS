import React, { useEffect } from 'react';
import Image from 'appComponents/reusables/Image';
import { useActions } from '../hooks';

interface _props {
  color:
    | '-'
    | {
        label: string;
        url: string;
      }[];
  index: number;
}

const AllColors: React.FC<_props> = ({ color, index }) => {
  const { showCompareImage } = useActions();

  useEffect(() => {
    if (typeof color === 'string') {
      showCompareImage({
        index,
        label: '',
        url: '-',
      });
      return;
    }

    showCompareImage({
      index: index,
      label: color[0].label,
      url: color[0].url,
    });
  }, []);

  if (color === '-') {
    return (
      <td key={index} className="">
        <div className="p-2">{'-'}</div>
      </td>
    );
  }
  return (
    <td key={index} className="">
      <div className="p-2">
        {color.map((color) => (
          <div
            key={index}
            onClick={() => showCompareImage({ ...color, index })}
            className="w-10 h-10 border border-gray-300 bg-gray-100 flex justify-center items-center"
          >
            <Image src={color.url} alt={color.label} className={''} />
          </div>
        ))}
      </div>
    </td>
  );
};

export default AllColors;
