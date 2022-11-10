export const HeaderLayout1 = () => {
  return (
    <div x-data="{ open: false }" className="bg-white">
      <div
        x-show="open"
        className="relative z-40 lg:hidden"
        x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
        x-ref="dialog"
        aria-modal="true"
        style={{ display: 'none' }}
      >
        <div
          x-show="open"
          className="fixed inset-0 bg-black bg-opacity-25"
          style={{ display: 'none' }}
        ></div>
        <div className="fixed inset-0 flex z-40">
          <div
            x-show="open"
            x-description="Off-canvas menu, show/hide based on off-canvas menu state."
            className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            style={{ display: 'none' }}
          >
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  x-description="Heroicon name: outline/x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="my-6 px-0 border-t border-gray-300">
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Brands 125</div>
                  </button>
                  <div className="">
                    <a href="product-listing.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div
                  className="bg-gray-100"
                  x-show="open"
                  // style={{ display: 'none' }}
                >
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Adidas
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          BAUER
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Callaway Golf
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Fairway &amp; Greene
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Footjoy
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Galvin Green
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Helly Hansen
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Johnnie-O
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          KNACK
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Lacoste
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Linksoul
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Patagonia
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Peter Millar
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Southern Tide
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          STATE Bags
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          STIO
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          TaylorMade
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Titleist
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Under Armour
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Vineyard Vines
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          YETI
                        </a>
                      </li>
                      <li className="w-full flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Zero Restriction
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Men</div>
                  </button>
                  <div className="">
                    <a href="product-listing.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div
                  className="bg-gray-100"
                  x-show="open"
                  style={{ display: 'none' }}
                >
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Polo
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Quarter Zips &amp; Pullovers
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Jackets
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Hoodies &amp; Sweetshirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Vests
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          T-Shirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Shirts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Women</div>
                  </button>
                  <div className="">
                    <a href="product-listing.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div
                  className="bg-gray-100"
                  x-show="open"
                  style={{ display: 'none' }}
                >
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Bottoms
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Polo
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Quarter Zips &amp; Pullovers
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Jackets
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Hoodies &amp; Sweetshirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Vests
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          T-Shirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          Shirts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Golf</div>
                  </button>
                  <div className="">
                    <a href="product-listing.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div
                  className="bg-gray-100"
                  x-show="open"
                  style={{ display: 'none' }}
                >
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-gear.png"
                              alt=""
                            />
                          </span>
                          CUSTOM GOLF GEAR
                        </a>
                      </li>
                      <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/customizable-golf-bags.png"
                              alt=""
                            />
                          </span>
                          CUSTOM GOLF BAGS
                        </a>
                      </li>
                      <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf balls.png"
                              alt=""
                            />
                          </span>
                          CUSTOM GOLF BALLS
                        </a>
                      </li>
                      <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-accessories.png"
                              alt=""
                            />
                          </span>
                          GOLF ACCESSORIES
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-listing.html" className="">
                      Consultation
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-listing.html" className="">
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="text-sm border-b border-gray-300"
                x-data="{ open: false }"
              >
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-listing.html" className="">
                      Sale
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white shadow-md">
            <div className="container mx-auto">
              <div className="">
                <div className="py-3 lg:py-4 flex items-center justify-between">
                  <div className="hidden lg:flex lg:items-center">
                    <a href="index.html">
                      <img
                        className="h-16 w-auto"
                        src="https://www.corporategear.com/images/logo.svg"
                        alt="Corporate Gear"
                      />
                    </a>
                  </div>
                  <div className="hidden h-full lg:flex items-center justify-center flex-1">
                    <div
                      className="ml-6"
                      x-data="Components.popoverGroup()"
                      x-init="init()"
                    >
                      <div className="h-full flex justify-center space-x-6 relative text-sm">
                        <div
                          className="flex"
                          x-data="Components.popover({ open: false, focus: false })"
                          x-init="init()"
                        >
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Brands
                              </span>
                            </button>
                          </div>
                          <div
                            x-show="open"
                            x-description="'"
                            className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                            x-ref="panel"
                            style={{ display: 'none' }}
                          >
                            <div className="relative bg-gray-100 z-50">
                              <div className="max-w-7xl mx-auto">
                                <div className="flex flex-wrap border-t first:border-t-0 py-5 px-5 border pt-8">
                                  <div className="w-full lg:w-1/4 text-center">
                                    <a
                                      href="product-listing.html"
                                      className="text-anchor hover:text-anchor-hover"
                                    >
                                      <img
                                        className="inline-block"
                                        src="images/adidas.png"
                                        alt=""
                                        title=""
                                      />
                                    </a>
                                  </div>
                                  <div className="w-full lg:w-1/4 text-center">
                                    <a
                                      href="product-listing.html"
                                      className="text-anchor hover:text-anchor-hover"
                                    >
                                      <img
                                        className="inline-block"
                                        src="images/peter-millar.png"
                                        alt=""
                                        title=""
                                      />
                                    </a>
                                  </div>
                                  <div className="w-full lg:w-1/4 text-center">
                                    <a
                                      href="product-listing.html"
                                      className="text-anchor hover:text-anchor-hover"
                                    >
                                      <img
                                        className="inline-block"
                                        src="images/adidas.png"
                                        alt=""
                                        title=""
                                      />
                                    </a>
                                  </div>
                                  <div className="w-full lg:w-1/4 text-center">
                                    <a
                                      href="product-listing.html"
                                      className="text-anchor hover:text-anchor-hover"
                                    >
                                      <img
                                        className="inline-block"
                                        src="images/peter-millar.png"
                                        alt=""
                                        title=""
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="border-t first:border-t-0 py-5 px-5">
                                  <div className="flex flex-wrap gap-y-2">
                                    <ul className="w-full lg:w-1/3">
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Adidas
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          BAUER
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Callaway Golf
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Fairway &amp; Greene
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Footjoy
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Galvin Green
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Helly Hansen
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Johnnie-O
                                        </a>
                                      </li>
                                    </ul>
                                    <ul className="w-full lg:w-1/3">
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          KNACK
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Lacoste
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Linksoul
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Patagonia
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Peter Millar
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Southern Tide
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          STATE Bags
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          STIO
                                        </a>
                                      </li>
                                    </ul>
                                    <ul className="w-full lg:w-1/3">
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          TaylorMade
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Titleist
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Under Armour
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Vineyard Vines
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          YETI
                                        </a>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="material-icons-outlined text-lg">
                                          chevron_right
                                        </span>
                                        <a
                                          href="product-listing.html"
                                          className="text-anchor hover:text-anchor-hover"
                                        >
                                          Zero Restriction
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex"
                          x-data="Components.popover({ open: false, focus: false })"
                          x-init="init()"
                        >
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Men
                              </span>
                            </button>
                          </div>
                          <div
                            x-show="open"
                            x-description="'Men' mega menu, show/hide based on flyout menu state."
                            className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                            x-ref="panel"
                            style={{ display: 'none' }}
                          >
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            ></div>
                            <div className="relative bg-gray-100 z-50">
                              <div className="max-w-7xl mx-auto">
                                <div className="border-t first:border-t-0 py-5 px-5">
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-featured-heading-1"
                                    className="flex flex-wrap gap-y-2"
                                  >
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Polo
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Quarter Zips &amp; Pullovers
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Jackets
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Hoodies &amp; Sweetshirts
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Vests
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Shirts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex"
                          x-data="Components.popover({ open: false, focus: false })"
                          x-init="init()"
                        >
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Women
                              </span>
                            </button>
                          </div>
                          <div
                            x-show="open"
                            x-description="'Men' mega menu, show/hide based on flyout menu state."
                            className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                            x-ref="panel"
                            style={{ display: 'none' }}
                          >
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            ></div>
                            <div className="relative bg-gray-100 z-50">
                              <div className="max-w-7xl mx-auto">
                                <div className="border-t first:border-t-0 py-5 px-5">
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-featured-heading-1"
                                    className="flex flex-wrap gap-y-2"
                                  >
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Bottoms
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Polo
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Quarter Zips &amp; Pullovers
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Jackets
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Hoodies &amp; Sweetshirts
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Vests
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/2 flex items-center">
                                      <span className="material-icons-outlined text-lg">
                                        chevron_right
                                      </span>
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover"
                                      >
                                        Shirts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex"
                          x-data="Components.popover({ open: false, focus: false })"
                          x-init="init()"
                        >
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Golf
                              </span>
                            </button>
                          </div>
                          <div
                            x-show="open"
                            x-description="'Men' mega menu, show/hide based on flyout menu state."
                            className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                            x-ref="panel"
                            style={{ display: 'none' }}
                          >
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            ></div>
                            <div className="relative bg-gray-100 z-50">
                              <div className="max-w-7xl mx-auto">
                                <div className="border-t first:border-t-0 py-5 px-5">
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-featured-heading-1"
                                    className="flex flex-wrap gap-y-2"
                                  >
                                    <li className="w-full lg:w-1/4 flex justify-center text-center">
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover p-2"
                                      >
                                        <span className="block mb-2">
                                          <img
                                            src="https://www.corporategear.com/images/custom-golf-gear.png"
                                            alt=""
                                          />
                                        </span>
                                        CUSTOM GOLF GEAR
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/4 flex justify-center text-center">
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover p-2"
                                      >
                                        <span className="block mb-2">
                                          <img
                                            src="https://www.corporategear.com/images/customizable-golf-bags.png"
                                            alt=""
                                          />
                                        </span>
                                        CUSTOM GOLF BAGS
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/4 flex justify-center text-center">
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover p-2"
                                      >
                                        <span className="block mb-2">
                                          <img
                                            src="https://www.corporategear.com/images/custom-golf balls.png"
                                            alt=""
                                          />
                                        </span>
                                        CUSTOM GOLF BALLS
                                      </a>
                                    </li>
                                    <li className="w-full lg:w-1/4 flex justify-center text-center">
                                      <a
                                        href="product-listing.html"
                                        className="text-anchor hover:text-anchor-hover p-2"
                                      >
                                        <span className="block mb-2">
                                          <img
                                            src="https://www.corporategear.com/images/custom-golf-accessories.png"
                                            alt=""
                                          />
                                        </span>
                                        GOLF ACCESSORIES
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="">
                            <a
                              href="product-listing.html"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary text-gray-700 hover:text-gray-800"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Accessories
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="">
                            <a
                              href="product-listing.html"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary text-gray-700 hover:text-gray-800"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Consultation
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="">
                            <a
                              href="product-listing.html"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary text-gray-700 hover:text-gray-800"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                FAQ
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="">
                            <a
                              href="product-listing.html"
                              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary text-gray-700 hover:text-gray-800"
                              aria-expanded="false"
                            >
                              <span className="uppercase text-primary">
                                Sale
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden space-x-4 pr-4">
                    <button
                      type="button"
                      x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                      className="bg-white py-2 rounded-md text-primary hover:text-gray-500"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        className="h-6 w-6"
                        x-description="Heroicon name: outline/menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                    <a
                      href="#"
                      className="py-2 text-primary hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <svg
                        className="w-6 h-6"
                        x-description="Heroicon name: outline/search"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <a href="index.html" className="lg:hidden">
                    <img
                      src="https://www.corporategear.com/images/logo.svg"
                      alt=""
                      className="h-14 w-auto"
                    />
                  </a>
                  <div className="flex items-center justify-end">
                    <div className="flex items-center lg:ml-6">
                      <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex">
                          <a
                            href="#"
                            className="-m-2 border border-gray-400 p-2 pr-10 text-gray-400 hover:text-gray-500 relative"
                          >
                            <input className="outline-none" />
                            <div className="w-6 h-6 absolute right-2 top-2">
                              <svg
                                className="w-6 h-6"
                                x-description="Heroicon name: outline/search"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                        <div className="flex">
                          <a
                            href="wishlist.html"
                            className="text-gray-400 hover:text-gray-500 relative"
                          >
                            <span className="sr-only">Wishlist</span>
                            <svg
                              className="w-6 h-6 fill-[#003a70] hover:fill-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"></path>
                            </svg>
                            <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">
                              0
                            </span>
                          </a>
                        </div>
                        <div className="flex">
                          <a
                            href="/"
                            className="text-primary hover:text-gray-500 flex items-center gap-1"
                            data-modal-toggle="LoginModal"
                          >
                            <span className="hidden lg:inline-block">
                              login
                            </span>
                            <svg
                              className="w-6 h-6"
                              x-description="Heroicon name: outline/user"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                        <div className="flow-root">
                          <a
                            href="cart.html"
                            className="text-primary hover:text-gray-500 group flex items-center gap-1 relative pr-2"
                          >
                            <span className="hidden lg:inline-block">
                              my cart
                            </span>
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-primary group-hover:text-gray-500"
                              x-description="Heroicon name: outline/shopping-cart"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              ></path>
                            </svg>
                            <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">
                              0
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderLayout1;
