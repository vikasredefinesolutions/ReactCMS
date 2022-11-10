import React from 'react';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';
const ProductRecentlyViewed: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);
  if (storeLayout === _Store.type2) {
    return (
      <section className="pb-10 overflow-hidden">
        <div className="container mx-auto pt-10">
          <div className="w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title mb-4">
            RECENTLY VIEWED
          </div>
          <div
            x-data="{swiper: null}"
            x-init="swiper = new Swiper($refs.container, {
                  loop: true,
                  slidesPerView: 1,
                  spaceBetween: 0,
              
                  breakpoints: {
                      640: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                      },
                      768: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                      },
                      1024: {
                          slidesPerView: 5,
                          spaceBetween: 0,
                      },
                  },
              })"
            className="relative w-12/12 mx-auto flex flex-row"
          >
            <div className="swiper-container -mx-4" x-ref="container">
              <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div className="swiper-slide px-4">
                  <div className="flex flex-col">
                    <div className="flex-shrink-0 rounded overflow-hidden">
                      <img
                        className="h-auto w-full object-cover"
                        src="./images/1040623_25528_STH.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-full pt-4 h-full text-center z-10">
                      <div className="w-full text-xl mb-3 h-14">
                        <a
                          href="/"
                          className="text-secondary text-xl font-bold"
                        >
                          Patagonia Women's Better Sweater
                        </a>
                      </div>
                      <div className="text-secondary-hover font-bold">
                        MSRP $149.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide px-4">
                  <div className="flex flex-col relative">
                    <div className="flex-shrink-0 rounded overflow-hidden">
                      <img
                        className="h-auto w-full object-cover"
                        src="./images/1040623_25528_STH.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-full pt-4 h-full text-center z-10">
                      <div className="w-full text-xl mb-3 h-14">
                        <a
                          href="/"
                          className="text-secondary text-xl font-bold"
                        >
                          Patagonia Women's Better Sweater Jacket
                        </a>
                      </div>
                      <div className="text-secondary-hover font-bold">
                        MSRP $149.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide px-4">
                  <div className="flex flex-col">
                    <div className="flex-shrink-0 rounded overflow-hidden">
                      <img
                        className="h-auto w-full object-cover"
                        src="./images/1040623_25528_STH.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-full pt-4 h-full text-center z-10">
                      <div className="w-full text-xl mb-3 h-14">
                        <a
                          href="/"
                          className="text-secondary text-xl font-bold"
                        >
                          Patagonia Women's Better Sweater Jacket
                        </a>
                      </div>
                      <div className="text-secondary-hover font-bold">
                        MSRP $149.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 z-10 flex items-center">
              <button
                // @click="swiper.slidePrev()"
                className="bg-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
              >
                <span className="hidden">Previous</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="chevron-left w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-10 flex items-center">
              <button
                // @click="swiper.slideNext()"
                className="bg-white -mr-2 lg:-mr-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
              >
                <span className="hidden">Next</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="chevron-right w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <></>;
};

export default ProductRecentlyViewed;
