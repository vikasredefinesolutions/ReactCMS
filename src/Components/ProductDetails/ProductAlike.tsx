import React from 'react';
import Slider from 'react-slick';

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="mainsection mt-10">
      <div className="container mx-auto">
        <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4">
          YOU MAY ALSO LIKE
        </div>
        <div className="relative" id="slider">
          <Slider {...settings}>
            {['', '', '', '', ''].map((ele) => {
              return (
                <div className="slide-item">
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
                            <a
                              href="product-page.html"
                              className="relative underline"
                            >
                              <span className="absolute inset-0"></span>
                              Patagonia Men's Better Sweater Jacket
                            </a>
                          </div>
                          <div className="mt-3 text-black text-base tracking-wider">
                            <span className="font-semibold">MSRP $149.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
