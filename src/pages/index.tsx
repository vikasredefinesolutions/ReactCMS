export default function Home() {
  return (
    <>
      {/* <!-- ======================== images Slider Start  ============================ --> */}
      <section className="mainsection container mx-auto mt-5 mb-12 white-all">
        <div
          // x-data="{swiper: null}"
          //  x-init="swiper = new Swiper($refs.container, {
          // loop: true,
          // slidesPerView: 1,
          // spaceBetween: 0,
          // })"
          className="relative w-full mx-auto flex flex-row"
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center">
            <button
              //  @click="swiper.slidePrev()"
              className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-left w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="swiper-container"
            //  x-ref="container"
          >
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">
                <div className="relative">
                  <div className="overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/489862642?autoplay=1&amp;loop=1&amp;background=1&amp;muted=1"
                      allow="autoplay; fullscreen"
                      data-ready="true"
                      frameBorder="0"
                      className="w-full aspect-[7/3]"
                    ></iframe>
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-1">
                      BRANDED PROMOTIONAL & CORPORATE APPAREL
                    </div>
                    <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                      CUSTOM-EMBROIDERED LOGOS ON TOP-TIER NAME BRANDS
                    </div>
                    {/* <!-- <a href="product-page.html" className="inline-block bg-secondary border border-transparent py-3 px-12 text-xl text-gray-900 hover:bg-gray-100 mx-auto font-semibold">SHOP BY BRAND</a> --> */}
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP BY BRAND
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative">
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full"
                      src="https://www.corporategear.com/images/home-banner/patagonia-promotional-embroidered-clothing.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-1">
                      CORPORATE PATAGONIA CLOTHING
                    </div>
                    <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                      UPGRADE YOUR CORPORATE CLOTHING AND COMPANY SWAG
                    </div>
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP PATAGONIA
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative">
                  <div className="overflow-hidden">
                    <img
                      className="h-auto w-full"
                      src="https://www.corporategear.com/images/home-banner/yeti-promotional-engraved-drinkware.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-1">
                      CUSTOM YETI
                    </div>
                    <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                      PERSONALIZED YETI WITH YOUR LOGO
                    </div>
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP YETI
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center">
            <button
              //  @click="swiper.slideNext()"
              className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-right w-10 h-10"
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
      </section>
      {/* <!-- ======================== images Slider End  ============================ -->
  <!-- ======================== Banner Row Start ============================ --> */}
      <section className="mainsection container mx-auto mt-20 white-all overflow-hidden">
        <div className="flex flex-wrap -mx-3 gap-y-6">
          <div className="w-full md:w-1/2 lg:w-2/3 px-3 flex">
            <div className="flex relative w-full text-white">
              <img
                className="w-full h-96 object-cover"
                src="images/patagonia-promotional-embroidered-clothing.jpg"
                alt=""
                title=""
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4">
                <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2">
                  PATAGONIA CORPORATE APPAREL
                </div>
                <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                  ELEVATE YOUR CORPORATE GIFTS
                </div>
                <div className="">
                  <a
                    href="product-page.html"
                    className="btn btn-lg btn-secondary"
                  >
                    SHOP PATAGONIA
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 flex">
            <div className="flex relative w-full text-white">
              <img
                className="w-full h-96 object-cover"
                src="images/nike-promotional-embroidered-clothing.jpg"
                alt=""
                title=""
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4">
                <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2">
                  CUSTOM NIKE
                </div>
                <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                  WITH YOUR LOGO
                </div>
                <div className="">
                  <a
                    href="product-page.html"
                    className="btn btn-lg btn-secondary"
                  >
                    SHOP CUSTOM NIKE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================== Banner Row End ============================ -->
  <!-- ======================== Banner Row Start ============================ --> */}
      <section className="mainsection container mx-auto mt-6 white-all overflow-hidden">
        <div className="flex flex-wrap -mx-3 gap-y-6">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 flex">
            <div className="flex relative w-full text-white">
              <img
                className="w-full h-96 object-cover"
                src="images/peter-millar-promotional-embroidered-clothing.jpg"
                alt=""
                title=""
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4">
                <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2">
                  PETER MILLAR
                </div>
                <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                  CUSTOM GOLF SHIRTS
                </div>
                <div className="">
                  <a
                    href="product-page.html"
                    className="btn btn-lg btn-secondary"
                  >
                    SHOP PETER MILLAR
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 px-3 flex">
            <div className="flex relative w-full text-white">
              <img
                className="w-full h-96 object-cover"
                src="images/yeti-promotional-engraved-drinkware.jpg"
                alt=""
                title=""
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4">
                <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2">
                  CUSTOM YETI CUPS
                </div>
                <div className="w-full text-xl md:text-2xl lg:text-sub-title font-sub-title mb-2">
                  CUSTOMIZE YETI WITH YOUR LOGO
                </div>
                <div className="">
                  <a
                    href="product-page.html"
                    className="btn btn-lg btn-secondary"
                  >
                    SHOP CUSTOM YETI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================== Banner Row End ============================ -->        
  <!-- ======================== Banner Row Start ============================ --> */}
      <section className="mainsection container mx-auto mt-20 text-center">
        <img
          className="text-center inline-block"
          src="images/seperator-design.png"
          alt=""
        />
      </section>
      {/* <!-- ======================== Banner Row End ============================ -->
  <!-- ======================== Tab Section Start ============================ --> */}
      <section className="mainsection container mx-auto mt-20">
        <div className="w-full text-2xl md:text-3xl lg:text-title font-title text-center mb-4">
          FEATURED ITEMS
        </div>
        <div className="flex flex-col md:flex-row md:-mr-px text-sm">
          <div
            x-data="{activeTab:01, activeClass: 'tab py-2 mr-1 px-2 block hover:text-primary text-primary focus:outline-none text-default-text border-b-2 font-medium border-primary', inactiveClass : 'tab py-2 px-2 block text-default-text hover:text-primary focus:outline-none mr-1 rounded-sm font-medium border-slate-300 hover:border-primary' }"
            className="w-full"
          >
            <ul className="w-full flex justify-center max-w-4xl mx-auto flex-wrap">
              <li className="mr-0.5 md:mr-0 font-semibold">
                <a
                  href="/"
                  // x-on:click="activeTab = 01"
                  // :className="activeTab === 01 ? activeClass : inactiveClass"
                >
                  Patagonia
                </a>
              </li>
              <li className="mr-0.5 md:mr-0 font-semibold">
                <a
                  href="/"
                  // x-on:click="activeTab = 02"
                  //  :className="activeTab === 02 ? activeClass : inactiveClass"
                >
                  Nike
                </a>
              </li>
              <li className="mr-0.5 md:mr-0 font-semibold">
                <a
                  href="/"
                  // x-on:click="activeTab = 03"
                  //  :className="activeTab === 03 ? activeClass : inactiveClass"
                >
                  Peter Millar
                </a>
              </li>
              <li className="mr-0.5 md:mr-0 font-semibold">
                <a
                  href="/"
                  // x-on:click="activeTab = 04"
                  // :className="activeTab === 04 ? activeClass : inactiveClass"
                >
                  YETI
                </a>
              </li>
            </ul>
            <div className="text-center mx-auto pt-10">
              <div
                x-show="activeTab === 01"
                className="panel-01 tab-content overflow-hidden"
              >
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $189.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $169.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $159.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $109.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                x-show="activeTab === 02"
                className="panel-01 tab-content overflow-hidden"
              >
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $119.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $129.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $149.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $169.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                x-show="activeTab === 03"
                className="panel-01 tab-content overflow-hidden"
              >
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $199.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $159.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $169.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $109.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                x-show="activeTab === 04"
                className="panel-01 tab-content overflow-hidden"
              >
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $149.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $149.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $149.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
                    <div className="">
                      <div className="flex text-center lg:w-auto">
                        <div className="relative border border-gray-200 pb-4">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt="Front of men's Basic Tee in white."
                              className="w-auto h-auto max-h-max"
                              width="50"
                            />
                            <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 44 44"
                                className="w-4 h-4"
                              >
                                <path
                                  id="favorite_FILL0_wght400_GRAD0_opsz48"
                                  d="M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z"
                                  transform="translate(-2 -1.3)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mt-1 text-anchor hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </a>
                            </div>
                            <div className="mt-3 text-black text-base tracking-wider">
                              <span className="font-semibold">
                                MSRP $149.00
                              </span>
                            </div>
                            <ul
                              role="list"
                              className="flex items-center mt-2 justify-center space-x-1"
                            >
                              <li className="w-7 h-7 border-2 border-secondary hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1040623_25528_STH.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1297169_8458788_color_blk.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043670_25528_NENA.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/1043694_25528_PEK.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                              <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary">
                                <img
                                  src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                                  alt=""
                                  title=""
                                  className=""
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================== Tab Section end ============================ -->

  <!-- ======================== images Slider Start  ============================ --> */}
      <section className="mainsection container mx-auto mt-20 white-all">
        <div
          x-data="{swiper: null}"
          x-init="swiper = new Swiper($refs.container, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
  })"
          className="relative w-full mx-auto flex flex-row"
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center">
            <button
              //  @click="swiper.slidePrev()"
              className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-left w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="swiper-container" x-ref="container">
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">
                <div className="relative text-white">
                  <div className="overflow-hidden">
                    <img
                      className="h-auto"
                      src="./images/nike-promotional-embroidered-clothing-banner.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2 text-white">
                      SPRING WHITE
                    </div>
                    <div className="w-full text-lg md:text-xl lg:text-small-title font-small-title mb-5 text-white">
                      SPRING WHITE COLLECTION
                    </div>
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative text-white">
                  <div className="overflow-hidden">
                    <img
                      className="h-auto"
                      src="./images/peter-millar-promotional-embroidered-clothing-banner.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2 text-white">
                      SPRING WHITE
                    </div>
                    <div className="w-full text-lg md:text-xl lg:text-small-title font-small-title mb-5 text-white">
                      SPRING WHITE COLLECTION
                    </div>
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative text-white">
                  <div className="overflow-hidden">
                    <img
                      className="h-auto"
                      src="./images/yeti-promotional-engraved-drinkware-banner.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                    <div className="w-full text-2xl md:text-3xl lg:text-title font-title mb-2 text-white">
                      SPRING WHITE
                    </div>
                    <div className="w-full text-lg md:text-xl lg:text-small-title font-small-title mb-5 text-white">
                      SPRING WHITE COLLECTION
                    </div>
                    <a
                      href="product-page.html"
                      className="btn btn-lg btn-secondary"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center">
            <button
              //  @click="swiper.slideNext()"
              className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-right w-10 h-10"
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
      </section>
      {/* <!-- ======================== images Slider End  ============================ -->
  <!-- ======================== Contant Section Start  ============================ --> */}
      <section className="mainsection container mx-auto mt-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src="images/custom-embroidery-and-branded-promotional-and-corporate-clothing.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full">
              <div className="text-2xl md:text-3xl lg:text-title font-title mb-3">
                CUSTOM EMBROIDERY
              </div>
              {/* <!-- <div className="text-sm lg:text-2xl md:text-lg uppercase mb-2">Just In</div> --> */}
              <div className="text-default-text font-default-text mb-6">
                Custom embroidery is a great way to embellish your company logo
                on premium promotional products. Personalize a wide range of
                promotional items from custom hoodies, to custom business
                shirts, company shirts, custom golf shirts, custom tote bags,
                and so much more.
              </div>
              <div className="">
                <a href="category.html" className="btn btn-lg btn-secondary">
                  DECORATION GUIDE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================== Contant Section Start  ============================ --> */}
      <section className="mainsection container mx-auto mt-20">
        <div className="w-full">
          <ul className="mt-4">
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: true }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom branded corporate clothing
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
              >
                <p>
                  A good business always searches for a competitive edge.
                  Branding is one of the primary ways to gain that advantage.
                </p>
                <p>
                  No matter how big or small a company is, marketing and
                  promotion need to be in their game plan. Companies are
                  becoming more creative about establishing their presence and
                  increasing brand recognition. The closer their brand gets to
                  people, the more it gets remembered.
                </p>
                <p>
                  Corporate Gear gives its customers exclusive, direct access to
                  custom branded clothing and accessories from iconic premium
                  sports and lifestyle brands. We&apos;ve built close
                  relationships with some of the best-known clothing and
                  accessory providers in the world and we&apos;ve introduced
                  them to our customers.
                </p>
                <p>
                  Our customers partner with these instantly recognizable brands
                  to produce high-quality corporate gear and swag at a
                  reasonable cost. Corporate Gear helps our customers design and
                  manufacture branded promotional apparel and accessories,
                  including T-shirts, uniforms, jackets, water bottles, bags,
                  and more.
                </p>
                <p>
                  Corporate Gear&apos;s process is streamlined and smooth. It
                  helps us produce all your merchandise on short lead times and
                  tight deadlines. Our custom embroidered promotional clothing
                  and useful accessories are cost-efficiently manufactured with
                  quick turnaround times. We offer a low minimum for product
                  manufacturing and perform full quality and environmental tests
                  on each item we make.
                </p>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  A wide selection of branded embroidered corporate clothing and
                  swag
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <p>
                  Corporate Gear offers a full suite of promotional branding
                  services under one roof. Sales, design, creative work,
                  e-commerce services, and warehousing all take place at our
                  offices and facilities. Customers find our turnkey solution
                  more efficient and manageable, without the need for excessive
                  additional third parties for certain steps. It also helps us
                  keep our pricing reasonable and affordable.
                </p>
                <p>
                  You control every creative step in Corporate Gear&apos;s
                  full-service process. You select the choice of clothing or
                  products, style and color, graphic design, decoration, use of
                  screen printing or embroidery, and more. Our employees can
                  guide and consult with you at every step in your order.
                </p>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Outerwear: A Trending Brand Influence
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-2">
                  Today's outerwear is also today's professional wear. The lines
                  have blurred for the better! It can't be overstated: The
                  quality and feel of a customized jacket, with your brand logo,
                  sends an instant message that your brand strongly values
                  high-standards and success.
                </div>
                <div>
                  Outerwear is versatile and works with almost any style of
                  clothing. It's also one of the most powerful branding items
                  because of its usage-frequency. Your recipients will choose to
                  wear your custom jacket from top-name brands. We have seen
                  from experience that brands that make the investment in
                  high-quality custom jackets, custom fleeces, or vests
                  invariably find that these get a lot of traction, and more
                  impressions, which raise brand-recognition. Outerwear brands
                  everyone loves, with your custom logo are a smart, effective
                  option, then, to strengthen your brand persona. We've found
                  this is true for both small businesses and enterprise
                  organizations.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom Golf Gear: Luxury, Classic Brand Impact
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div>
                  Custom golf apparel is another category of custom clothing and
                  gear that has also found its way front-and-center into the
                  corporate professional office-wear. Customized golf polos,
                  golf balls, and custom golf bags are also standard promotional
                  schwag. Quality-first custom golf gifts and gear will
                  stand-out at promotional events, from golf tournaments to
                  conventions. Corporate Gear is a direct partner with select
                  golf apparel and gear brands, and can ensure that
                  customizations on high-quality golf polos, and shirts are
                  well-executed (to a tee!).
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom Sports Apparel and Gear: The Positive Impact for
                  Professional Brands
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-6">
                  Athleisure is the cross between high-performing athletic wear
                  and style that works in settings other than the gym, trail, or
                  on the field. But in order to make the jump from active to
                  office-wear, today's consumers desire a sophisticated-level of
                  quality for sports apparel. They want to feel comfortable
                  wearing a piece to the office, or during the workday, that
                  looks like it's suited for a professional environment.
                  Corporate Gear has offered a select number of premium brands
                  that have trailblazed this unique, practical demand.
                </div>
                <div className="mb-6">
                  The difference is in the quality and style options. As
                  organizations move more toward a casual professional style, on
                  one day of the week, or continue a hybrid-remote-office
                  structure, these custom sporting apparel choices are perfectly
                  comfortable, but also offer structure and professionalism at
                  the same time. Form-fitting, custom, stylish fleeces, for
                  instance, make a smart and comfortable silhouette as custom
                  employee clothing. Additionally, custom sporting goods and
                  gear are an unquestionably strong staple for often-used custom
                  backpacks, and bags.
                </div>
                <div>
                  Custom sporting apparel has a positive impact that&apos;s
                  similar to team benefits, for the office. This type of custom
                  apparel engenders the same sense of positive
                  community-building, competitive edge, and success as it does
                  for a sports team. But it's the name-brand quality that sets
                  that positive bar for your brand.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom Premium Accessories: Boost Promotional Events
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-6">
                  Premium accessories are the right option for promotional
                  events, and products. Swag should be a quality gift.
                  Recipients no longer want a toss-away item (did they ever?).
                  Your brand is expected to meet a customer or client's current
                  expectation. Your employees, colleagues, and recipients will
                  appreciate their custom, quality tumblers, backpacks, and
                  coolers from well-loved brands. Corporate Gear&apos;s quality
                  selection is strategic to ensure that what your custom order
                  garners repeated uses. We know that&apos;s the goal. Tumblers
                  that keep coffee hot for hours, laser-engraved with your
                  custom logo, are a great example. Custom backpacks that are
                  stylish and durable will be the first choice to use, because
                  they feel great–and work great.
                </div>
                <div>
                  Our quality selection makes it easy. You&apos;ll never have to
                  forgo quality for the items you want. Customize your logo on
                  top name-brand promotional products, and customize premium
                  corporate gifts. You can shop bags, company hats, custom
                  backpacks, corporate drinkware, and custom electronics, then
                  we'll customize your brand logo to perfection.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Online Ordering for Every-Size Business
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-2">
                  For Corporate Gear customers, your marketing is never a
                  one-size-fits-all approach to reaching customers and new
                  clients. We seek to meet every brand's need. Our selection of
                  corporate gear, customized promotional accessories, and
                  corporate branded clothing is decidedly versatile, to meet
                  your brand marketing goals. You&apos;ll find that your online
                  ordering and customization experience reflects that. For any
                  size business, your order process will include:
                </div>
                <div className="mb-2 ml-6">
                  <ul className="list-disc">
                    <li>Hassle-free process</li>
                    <li>Low minimum order quantities</li>
                    <li>
                      Intuitive customization tools for color, design, size, and
                      quantity selection
                    </li>
                  </ul>
                </div>
                <div className="mb-2">
                  Once you&apos;ve customized your perfect selection, Corporate
                  Gear provides free shipping on your premium customized apparel
                  and accessories, which are delivered right to your door!
                </div>
                <div>
                  Flexible return policy - In the unlikely event that the
                  product you receive is damaged or incorrect, our helpful and
                  knowledgeable staff are always available to assist in making
                  it right. Corporate Gear can refund damaged items, as well as
                  some pieces that were customized incorrectly. However, our
                  service team is here every step of the way to help you address
                  any order or customization question you have.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Enhanced Experience with Full-Service Support
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-2">
                  When you order with Corporate Gear, your customization service
                  happens in-house, on-premise, for a full-service, responsive
                  experience. We specialize in services that include, but are
                  not limited to, screen printing, embroidery, laser-engraving,
                  and heat press. Embroidered decorations can span an array of
                  color options, while corporate embellishments on apparel and
                  products can be personalized for a subtle, or stand-out
                  result, to best highlight your brand logo and company.
                </div>
                <div className="mb-2">
                  You&apos;ll feel the difference in having a full-service,
                  in-house team for your custom corporate apparel and logo
                  orders.
                </div>
                <div className="mb-2">
                  The process is more personalized, immediate, and personable.
                  It enables us to respond faster, to make adjustments on the
                  fly when needed, and execute on any-sized order with better
                  results.
                </div>
                <div>
                  We are more agile, and can ensure you're a greater part of the
                  process, if that's what you prefer. From order updates, to
                  inquiries on customization changes, our full-service model is
                  a key to why customers return, and love their results.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom Branding and Large Orders
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-2">
                  Our commitment to your business is that large orders should
                  not equate to large hassles. Not only that, but your business
                  should benefit from large-orders in pricing, without the
                  hassle of lengthy shipment timelines. We do our best to ensure
                  you have the order you desire, within a reasonable timeline.
                  It&apos;s not uncommon for us to be in touch with our
                  customers frequently to ensure we&apos;re meeting your order
                  expectations.
                </div>
                <div className="mb-2">
                  Corporate Gear is also committed to anticipating and guiding
                  our customers around shipping delays due to market or
                  supply-line shortfalls. We go the distance behind the scenes,
                  working with our premium brand partners, to orchestrate the
                  best order timelines, customization options, and inventory
                  upkeep.
                </div>
                <div>
                  Large orders receive the same level of customization detail
                  and service as a small-batch run, no matter the type of
                  customization. You&apos;ll also benefit from smart savings,
                  and expert guidance so surplus and the right item-quantity are
                  not an issue.
                </div>
              </div>
            </li>
            <li
              className="mb-4 last:mb-0 border border-light-gray"
              x-data="{ open: false }"
            >
              <button
                className="w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0"
                // @click.prevent="open = !open" :aria-expanded="open"
                aria-expanded="false"
              >
                <div className="text-lg md:text-xl lg:text-small-title font-small-title">
                  Custom Branding Services for Small Businesses
                </div>
                <span className="material-icons-outlined" x-show="!open">
                  add_circle
                </span>
                <span className="material-icons-outlined" x-show="open">
                  remove_circle
                </span>
              </button>
              <div
                className="text-default-text font-default-text px-2 pt-2 pb-4 border-t border-light-gray"
                x-show="open"
                style={{ display: 'none' }}
              >
                <div className="mb-2">
                  Our low-ordering minimums make it easy to create your order
                  for your business and marketing needs. Additionally, free
                  shipping provides a cost-effective route to getting your order
                  to your front door.
                </div>
                <div className="mb-2">
                  Our pricing is in reach for small and local, to start-up, and
                  service businesses. Because we&apos;ve been in business for
                  many years, we have developed partnerships and pricing models
                  that ensure the quality brands you love are available for your
                  small business. These are priced to fit your budget. Even
                  better, all-inclusive pricing takes all of the surprises out
                  of online ordering with Corporate Gear.
                </div>
                <div>
                  At Corporate Gear, we employ a long-time staff of pros who can
                  expertly decorate your existing logo or create a custom design
                  that&apos;s one-of-a-kind. We don&apos;t just take an order
                  never to be heard from, we ensure a responsive process
                  throughout your experience with us. You can reach us by phone,
                  email, or by chat, and we typically reply instantly or within
                  a few hours, like any local service.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
