import React from 'react';
import { useRouter } from 'next/router';
import { paths } from '../constants/paths.constant';
import { _Store } from '../constants/store.constant';
import { _ThankYouOrder } from '../../../definations/thankYou.type';
import { useTypedSelector } from '../hooks';
import ThankYouProductTable from './ThankYouProductTable';

interface _props {
  order: _ThankYouOrder;
}

const ThankYouProduct: React.FC<_props> = ({ order }) => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const navigateTo = (id: string) => {
    router.push(`${paths.PRODUCT}?cat=&_pid=${id}&_cl=`);
  };

  if (storeLayout === _Store.type2) {
    return (
      <li className="flex py-6 flex-wrap px-4">
        <div className="w-full lg:w-4/12 px-3 mt-3">
          <button onClick={() => navigateTo('id')}>
            <img
              src="images/1040623_25528_STH.jpg"
              alt=""
              className="rounded-md object-center object-cover"
            />
          </button>
        </div>

        <div className="w-full lg:w-8/12 px-3 mt-3">
          <div className="text-lg font-semibold">
            <button
              onClick={() => navigateTo('id')}
              className="text-black hover:text-anchor-hover"
            >
              Patagonia Men's Better Sweater Jacket
            </button>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="sm:w-2/3 mt-2">
              <div className="flex justify-between">
                <div className="text-base">
                  <span className="font-semibold">SKU :</span>
                  25528
                </div>
              </div>
              <div className="mt-1 flex">
                <div className="text-base">
                  <span className="font-semibold">Color :</span>
                  Stonewash
                </div>
              </div>
            </div>
            <div className="mt-2 sm:w-1/3">
              <div className="bold text-lg text-right">
                <span className="">Item Total: $2,964.00</span>
              </div>
            </div>

            <ThankYouProductTable order={order} />
            {/* <!-- <div className="flex justify-start items-center mb-3">
                              <div>
                                  <span className="material-icons text-[60px] mr-3">support_agent</span>
                              </div>
                              <div>
                                  <div className="text-lg font-semibold">Customize Later</div>
                                  <div className="text-base">A Gear Expert will contact you to discuss
                                      the
                                      customization of this product.</div>
                              </div>
                          </div> --> */}
          </div>
        </div>
      </li>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <li className="flex py-6 flex-wrap px-4">
        <div className="w-full lg:w-4/12 px-3 mt-3">
          <button onClick={() => navigateTo('id')}>
            <img
              src="images/1040623_25528_STH.jpg"
              alt=""
              className="rounded-md object-center object-cover"
            />
          </button>
        </div>

        <div className="w-full lg:w-8/12 px-3 mt-3">
          <div className="text-lg font-semibold">
            <button
              onClick={() => navigateTo('id')}
              className="text-black hover:text-blue-500"
            >
              Patagonia Men's Better Sweater Jacket
            </button>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="sm:w-2/3 mt-2">
              <div className="flex justify-between">
                <div className="text-base">
                  <span className="font-semibold">SKU :</span>
                  25528
                </div>
              </div>
              <div className="mt-1 flex">
                <div className="text-base">
                  <span className="font-semibold">Color :</span>
                  Stonewash
                </div>
              </div>
            </div>
            <div className="mt-2 sm:w-1/3">
              <div className="bold text-lg text-right">
                <span className="">Item Total: $2,964.00</span>
              </div>
            </div>

            <ThankYouProductTable order={order} />
            {/* <!-- <div className="flex justify-start items-center mb-3">
                                  <div>
                                      <span className="material-icons text-[60px] mr-3">support_agent</span>
                                  </div>
                                  <div>
                                      <div className="text-lg font-semibold">Customize Later</div>
                                      <div className="text-base">A Gear Expert will contact you to discuss
                                          the
                                          customization of this product.</div>
                                  </div>
                              </div> --> */}
          </div>
        </div>
      </li>
    );
  }
  return (
    <li className="flex py-6 flex-wrap px-4">
      <div className="w-full lg:w-4/12 px-3 mt-3">
        <button onClick={() => navigateTo('id')}>
          <img
            src="images/1040623_25528_STH.jpg"
            alt=""
            className="rounded-md object-center object-cover"
          />
        </button>
      </div>

      <div className="w-full lg:w-8/12 px-3 mt-3">
        <div className="text-lg font-semibold">
          <button
            onClick={() => navigateTo('id')}
            className="text-black hover:text-anchor-hover"
          >
            Patagonia Men's Better Sweater Jacket
          </button>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="sm:w-2/3 mt-2">
            <div className="flex justify-between">
              <div className="text-base">
                <span className="font-semibold">SKU :</span>
                25528
              </div>
            </div>
            <div className="mt-1 flex">
              <div className="text-base">
                <span className="font-semibold">Color :</span>
                Stonewash
              </div>
            </div>
          </div>
          <div className="mt-2 sm:w-1/3">
            <div className="bold text-lg text-right">
              <span className="">Item Total: $2,964.00</span>
            </div>
          </div>

          <ThankYouProductTable order={order} />
          {/* <!-- <div className="flex justify-start items-center mb-3">
                                  <div>
                                      <span className="material-icons text-[60px] mr-3">support_agent</span>
                                  </div>
                                  <div>
                                      <div className="text-lg font-semibold">Customize Later</div>
                                      <div className="text-base">A Gear Expert will contact you to discuss
                                          the
                                          customization of this product.</div>
                                  </div>
                              </div> --> */}
        </div>
      </div>
    </li>
  );
};

export default ThankYouProduct;
