import { _ProductColor } from '@type/APIs/colors.res';
import Image from 'appComponents/reusables/Image';
import { useActions } from 'hooks';
import React, { useEffect } from 'react';

interface _props {
  color: null | _ProductColor[];
  index: number;
  seName: string;
}

const AllColors: React.FC<_props> = ({ color, index, seName }) => {
  const { showCompareImage } = useActions();

  useEffect(() => {
    if (color !== null) {
      if (typeof color === 'string') {
        showCompareImage({
          index,
          label: '',
          url: '-',
          attibuteOptionId: 0,
          seName: '/',
        });
        return;
      }

      showCompareImage({
        index: index,
        label: color[0].name,
        url: color[0].imageUrl,
        seName: seName,
        attibuteOptionId: color[0].attributeOptionId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (color === null) {
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
            onClick={() =>
              showCompareImage({
                index,
                label: color.name,
                url: color.imageUrl,
                attibuteOptionId: color.attributeOptionId,
                seName: seName,
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
