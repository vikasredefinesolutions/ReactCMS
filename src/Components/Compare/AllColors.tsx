import React, { useEffect } from 'react';
import Image from 'appComponents/reusables/Image';
import { useActions } from 'hooks';
import { _ProductColor } from '@type/APIs/colors.res';

interface _props {
  color: null | _ProductColor[];
  index: number;
}

const AllColors: React.FC<_props> = ({ color, index }) => {
  const { showCompareImage } = useActions();

  if (color === null) {
    return (
      <td key={index} className="">
        <div className="p-2">{'-'}</div>
      </td>
    );
  }

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
      label: color[0].name,
      url: color[0].imageUrl,
    });
  }, []);

  return (
    <td key={index} className="">
      <div className="p-2">
        {color.map((color) => (
          <div
            key={index}
            onClick={() =>
              showCompareImage({
                index,
                label: color.name,
                url: color.imageUrl,
              })
            }
            className="w-10 h-10 border border-gray-300 bg-gray-100 flex justify-center items-center"
          >
            <Image src={color.imageUrl} alt={color.name} className={''} />
          </div>
        ))}
      </div>
    </td>
  );
};

export default AllColors;
