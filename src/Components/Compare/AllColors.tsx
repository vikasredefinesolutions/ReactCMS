import { _ProductColor } from '@type/APIs/colors.res';
import Image from 'appComponents/reUsable/Image';
import { useActions } from 'hooks';
import React, { useEffect } from 'react';

interface _props {
  color: null | _ProductColor[];
  index: number;
  seName: string;
}

const AllColors: React.FC<_props> = ({ color, index, seName }) => {
  const { updateCompareDisplayImage } = useActions();

  useEffect(() => {
    if (color !== null) {
      if (typeof color === 'string') {
        updateCompareDisplayImage({
          type: 'ADD',
          data: {
            index,
            label: '',
            url: '-',
            attibuteOptionId: 0,
            seName: '/',
          },
        });
        return;
      }

      updateCompareDisplayImage({
        type: 'ADD',
        data: {
          index: index,
          label: color[0].name,
          url: color[0].imageUrl,
          seName: seName,
          attibuteOptionId: color[0].attributeOptionId,
        },
      });
    }
    return () => {
      updateCompareDisplayImage({
        type: 'REMOVE',
        data: {
          index: index,
        },
      });
    };
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
      <div className="p-2 flex gap-2 flex-wrap">
        {color.map((color) => (
          <div
            key={index}
            onClick={() =>
              updateCompareDisplayImage({
                type: 'ADD',
                data: {
                  index,
                  label: color.name,
                  url: color.imageUrl,
                  attibuteOptionId: color.attributeOptionId,
                  seName: seName,
                },
              })
            }
            className="w-10 h-10 border border-gray-300 p-1 flex items-center justify-center"
          >
            <Image
              src={color.imageUrl}
              alt={color.name}
              className={'inline-block max-h-full'}
            />
          </div>
        ))}
      </div>
    </td>
  );
};

export default AllColors;
