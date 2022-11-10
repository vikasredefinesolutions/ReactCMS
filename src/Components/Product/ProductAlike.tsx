import React, { useRef } from 'react';
import Slider from 'react-slick';
import { _Store } from '../../../constants/store.constant';
import { _Product } from '../../../definations/product.type';
import { useTypedSelector } from '../../../hooks';
interface _props {
  products: _Product[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductAlike: React.FC<_props> = ({ products }) => {
  const sliderRef = useRef<any>(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  const goToPrevSlide = () => {
    sliderRef.current!.slickNext();
  };
  const goToNextSlide = () => {
    sliderRef.current.slickPrev();
  };

  if (storeLayout === 'gameDayGear') {
    return (
      <section className="overflow-hidden">
        <div className="container mx-auto pt-10">
          <div className="w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title mb-4">
            YOU MAY ALSO LIKE
          </div>
          <div
            // xData="{swiper: null}"
            // x-init="swiper = new Swiper($refs.container, {
            //   loop: true,
            //   slidesPerView: 1,
            //   spaceBetween: 0,
            //   breakpoints: {
            //       640: {
            //           slidesPerView: 3,
            //           spaceBetween: 0,
            //       },
            //       768: {
            //           slidesPerView: 3,
            //           spaceBetween: 0,
            //       },
            //       1024: {
            //           slidesPerView: 5,
            //           spaceBetween: 0,
            //       },
            //   },
            //   })"
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

  if (storeLayout === _Store.type4) {
    return (
      <section className="mainsection mt-20">
        <div className="container mx-auto">
          <div className="">
            <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4">
              YOU MAY ALSO LIKE
            </div>
            <div
              x-data="{swiper: null}"
              x-init="swiper = new Swiper($refs.container, {loop: true, slidesPerView: 1, spaceBetween: 0, breakpoints: { 640: { slidesPerView: 3, spaceBetween: 0, }, 768: { slidesPerView: 3, spaceBetween: 0, }, 1024: { slidesPerView: 5, spaceBetween: 0, }, }, })"
              className="relative w-12/12 mx-auto flex flex-row"
            >
              <div
                className="swiper-container -mx-4 overflow-hidden"
                x-ref="container"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide px-4">
                    <div className="flex flex-col">
                      <div className="flex-shrink-0 rounded overflow-hidden">
                        {' '}
                        <img
                          className="h-auto w-screen object-cover"
                          src="./images/blue540x540.png"
                          alt=""
                        />{' '}
                      </div>
                      <div className="w-full pt-4 h-full text-center z-10">
                        <div className="w-full text-xl mb-3 h-14">
                          <a
                            href="javascript:void(0);"
                            className="text-[#051C2C] text-sm font-normal"
                          >
                            Patagonia Women's Better Sweater Jacket
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide px-4">
                    <div className="flex flex-col relative">
                      <div className="flex-shrink-0 rounded overflow-hidden">
                        {' '}
                        <img
                          className="h-auto w-full object-cover"
                          src="./images/blue540x540.png"
                          alt=""
                        />{' '}
                      </div>
                      <div className="w-full pt-4 h-full text-center z-10">
                        <div className="w-full text-xl mb-3 h-14">
                          <a
                            href="javascript:void(0);"
                            className="text-[#051C2C] text-sm font-normal"
                          >
                            Patagonia Women's Better Sweater Jacket
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide px-4">
                    <div className="flex flex-col">
                      <div className="flex-shrink-0 rounded overflow-hidden">
                        {' '}
                        <img
                          className="h-auto w-full object-cover"
                          src="./images/blue540x540.png"
                          alt=""
                        />{' '}
                      </div>
                      <div className="w-full pt-4 h-full text-center z-10">
                        <div className="w-full text-xl mb-3 h-14">
                          <a
                            href="javascript:void(0);"
                            className="text-[#051C2C] text-sm font-normal"
                          >
                            Patagonia Women's Better Sweater Jacket
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 z-10 flex items-center">
                <button className="bg-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
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
                <button className="bg-white -mr-2 lg:-mr-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
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
        </div>
      </section>
    );
  }

  return (
    <section className="mainsection mt-10">
      <div className="container mx-auto">
        <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4">
          YOU MAY ALSO LIKE
        </div>

        <div className="relative w-12/12 mx-auto flex flex-row">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <Slider {...settings}>
                <div className="swiper-slide">
                  <div className="px-2">
                    <div className="flex text-center lg:w-auto mb-6">
                      <div className="relative pb-4">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <a href="product-page.html" className="relative">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt=""
                              className="w-auto h-auto max-h-max"
                            />
                          </a>
                        </div>
                        <div className="mt-6">
                          <div className="mt-1 text-anchor hover:text-anchor-hover">
                            {' '}
                            <a
                              href="product-page.html"
                              className="relative underline"
                            >
                              {' '}
                              <span className="absolute inset-0"></span>{' '}
                              Patagonia Men's Better Sweater Jacket{' '}
                            </a>{' '}
                          </div>
                          <div className="mt-3 text-black text-base tracking-wider">
                            {' '}
                            <span className="font-semibold">MSRP $149.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="px-2">
                    <div className="flex text-center lg:w-auto mb-6">
                      <div className="relative pb-4">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <a href="product-page.html" className="relative">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt=""
                              className="w-auto h-auto max-h-max"
                            />
                          </a>
                        </div>
                        <div className="mt-6">
                          <div className="mt-1 text-anchor hover:text-anchor-hover">
                            {' '}
                            <a
                              href="product-page.html"
                              className="relative underline"
                            >
                              {' '}
                              <span className="absolute inset-0"></span>{' '}
                              Patagonia Men's Better Sweater Jacket{' '}
                            </a>{' '}
                          </div>
                          <div className="mt-3 text-black text-base tracking-wider">
                            {' '}
                            <span className="font-semibold">MSRP $149.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="px-2">
                    <div className="flex text-center lg:w-auto mb-6">
                      <div className="relative pb-4">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <a href="product-page.html" className="relative">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt=""
                              className="w-auto h-auto max-h-max"
                            />
                          </a>
                        </div>
                        <div className="mt-6">
                          <div className="mt-1 text-anchor hover:text-anchor-hover">
                            {' '}
                            <a
                              href="product-page.html"
                              className="relative underline"
                            >
                              {' '}
                              <span className="absolute inset-0"></span>{' '}
                              Patagonia Men's Better Sweater Jacket{' '}
                            </a>{' '}
                          </div>
                          <div className="mt-3 text-black text-base tracking-wider">
                            {' '}
                            <span className="font-semibold">MSRP $149.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <button className="bg-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
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
            <button className="bg-white -mr-2 lg:-mr-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none">
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
};

export default ProductAlike;
