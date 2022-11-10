import React from 'react';
import { _Store } from '../constants/store.constant';
import { _Footer } from '../../../../definations/footer.type';
import { useTypedSelector } from '../hooks';

type _props = Pick<_Footer, 'features'>;

const Features: React.FC<_props> = ({ features }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (storeLayout === _Store.type2) {
    return (
      <div className="container mx-auto pt-10">
        <div className="bg-[#CFD2D3] p-4 flex flex-wrap">
          <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r last:border-r-0 border-[#8b9ba7] flex justify-center items-center gap-2 text-3xl font-bold px-1 lg:px-6 tracking-wide lg:tracking-widest lg:justify-end">
            <div className="w-1/4 lg:w-auto">
              <img src="images/first-logo-img.png" alt="" />
            </div>
            <div>First Logo Free</div>
          </div>
          <div className="w-full lg:w-1/2 border-r last:border-r-0 border-[#8b9ba7] flex justify-center items-center gap-2 text-3xl font-bold px-1 lg:px-6 tracking-wide lg:tracking-widest lg:justify-start">
            <div className="w-1/4 lg:w-auto">
              <img src="images/free-shipping-img.png" alt="" />
            </div>
            <div>Free Shipping</div>
          </div>
        </div>
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: features }}></div>;
};

export default Features;
