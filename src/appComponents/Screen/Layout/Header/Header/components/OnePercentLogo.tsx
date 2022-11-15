import React from 'react';
import { _Store } from '../../constants/store.constant';
import { useTypedSelector } from '../../hooks';

const OnePercentLogo: React.FC<{ position: 'HEADER' | 'FOOTER' }> = ({
  position,
}) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type4) {
    if (position === 'HEADER') {
      return (
        <div className="flow-root">
          <a
            href="#"
            className="text-primary hover:text-gray-500 flex items-center gap-1"
          >
            <img src="../images/for-the-planet.png" title="" alt="" />
          </a>
        </div>
      );
    }
  }
  return <></>;
};

export default OnePercentLogo;
