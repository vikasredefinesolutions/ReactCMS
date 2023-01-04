import React from 'react';

export const Bacardi_MenuItems: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="hidden h-full lg:flex items-center justify-between">
          <div className="">
            {/* <!-- Mega menus --> */}
            <div className="ml-3" x-data="Components.popoverGroup()">
              <div className="h-full flex justify-center space-x-6 xl:space-x-10 relative text-base xl:tracking-widest">
                <div
                  className="flex"
                  x-data="Components.popover({ open: false, focus: false })"
                  //  @keydown.escape="onEscape"
                  // @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                >
                  <div className="relative flex">
                    <button
                      type="button"
                      // x-state:on="Item active"
                      className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
                      // @mouseover="open = true" :aria-expanded="open.toString()"
                    >
                      <span className="font-semibold uppercase">Apparel</span>
                    </button>
                  </div>
                  <div
                    // x-transition:enter="transition ease-out duration-200"
                    // x-transition:enter-start="opacity-0"
                    // x-transition:enter-end="opacity-100"
                    // x-transition:leave="transition ease-in duration-150"
                    // x-transition:leave-start="opacity-100"
                    // x-transition:leave-end="opacity-0"
                    // x-description="'Men' mega menu, show/hide based on flyout menu state."
                    className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"

                    // x-ref="panel" @mouseover="open = true"
                  >
                    {/* // <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>
                    <div className="relative bg-white border z-50">
                      <div className="max-w-7xl mx-auto">
                        <div className="border-t first:border-t-0 py-5 px-5">
                          <ul
                            role="list"
                            aria-labelledby="desktop-featured-heading-1"
                            className="flex flex-wrap gap-y-2"
                          >
                            <li className="w-full flex items-center font-semibold uppercase">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                Mens
                              </a>
                            </li>
                            <li className="w-full flex items-center font-semibold uppercase">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                Headwear & Aprons
                              </a>
                            </li>
                            <li className="w-full flex items-center font-semibold uppercase">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                Women's
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
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">Bags</span>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">Golf</span>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">Premiums</span>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">Barware</span>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">
                        Custom Requests
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      <span className="font-semibold uppercase">
                        Ordering Information
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="hidden lg:flex flex-grow max-w-[500px]">
              <div className="border-b border-black w-full p-2 text-white hover:text-primary relative">
                <input
                  type="text"
                  className="outline-none text-black text-lg w-full bg-white"
                  placeholder="Enter Search here"
                />
                <div className="absolute right-1.5 top-1.5 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black text-lg"
                    x-description="Heroicon name: outline/search"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
