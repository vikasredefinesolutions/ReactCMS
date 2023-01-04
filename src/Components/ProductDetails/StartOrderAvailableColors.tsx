import Image from 'appComponents/reUsable/Image';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect } from 'react';

const StartOrderAvailableColors: React.FC = () => {
  const { colors } = useTypedSelector((state) => state.product.product);
  const { setColor } = useActions();

  useEffect(() => {
    if (colors === null) return;
    setColor(colors[0]);
  }, []);

  return (
    <div>
      <div className="text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2">
        <span className="text-lg font-bold text-white">Available Colors:</span>
      </div>
      <div className="flex flex-wrap gap-5 text-sm text-center px-2">
        {colors?.map((color) => (
          <div
            className="w-20"
            key={color.productId}
            onClick={() => setColor(color)}
          >
            <div className="border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0">
              <Image
                src={color.imageUrl}
                alt={color.altTag}
                className="w-full object-center object-cover"
              />
            </div>
            <div
              className=""
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {color.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartOrderAvailableColors;
