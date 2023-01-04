export const Cyxtera_MobileMenuItem = () => {
  return (
    <div
      className="relative z-40 lg:hidden"
      x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
    >
      <div
        // x-transition:enter="transition-opacity ease-linear duration-300"
        // x-transition:enter-start="opacity-0"
        // x-transition:enter-end="opacity-100"
        // x-transition:leave="transition-opacity ease-linear duration-300"
        // x-transition:leave-start="opacity-100"
        // x-transition:leave-end="opacity-0"
        // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
        className="fixed inset-0 bg-black bg-opacity-25"
      ></div>
      <div className="fixed inset-0 flex z-40">
        <div
          // x-transition:enter="transition ease-in-out duration-300 transform"
          // x-transition:enter-start="-translate-x-full"
          // x-transition:enter-end="translate-x-0"
          // x-transition:leave="transition ease-in-out duration-300 transform"
          // x-transition:leave-start="translate-x-0"
          // x-transition:leave-end="-translate-x-full"
          // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
          className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
          //  @click.
          // away="open = false"
        >
          <div className="px-4 pt-5 pb-2 flex">
            <button
              type="button"
              className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
              //  @click="open = false"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                x-description="Heroicon name: outline/x"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Links --> */}
          <div className="my-6 px-0 border-t border-gray-300">
            {/* <!-- Start --> */}

            <div className="text-sm border-b border-gray-300">
              <div className="flex items-center justify-between py-2 pr-2">
                <button
                  className="flex items-center grow group"
                  // @click.prevent="open = !open" :aria-expanded="open"
                >
                  <svg
                    className="w-8 h-8 shrink-0 fill-current text-anchor"
                    // :className="{ 'text-anchor-hover rotate-180': open }"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                  </svg>
                  <div className="text-anchor">Apparel</div>
                </button>
                <div className="">
                  <a href="product-listing.html" className="text-xs">
                    Show All
                  </a>
                </div>
              </div>
              <div className="bg-gray-100">
                <div className="border-t first:border-t-0 py-5 px-6">
                  <ul
                    role="list"
                    aria-labelledby="desktop-featured-heading-1"
                    className="flex flex-wrap gap-y-2"
                  >
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Men's Apparel
                      </a>
                    </li>
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Women's Apparel
                      </a>
                    </li>
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Headwear
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-sm border-b border-gray-300">
              <div className="flex items-center justify-between py-2 pr-2">
                <button className="flex items-center grow group">
                  {/* //  @click.prevent="open = !open" :aria-expanded="open" */}

                  <svg
                    className="w-8 h-8 shrink-0 fill-current text-anchor"
                    //  :className="{ 'text-anchor-hover rotate-180': open }"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                  </svg>
                  <div className="text-anchor">Accessories</div>
                </button>
                <div className="">
                  <a href="product-listing.html" className="text-xs">
                    Show All
                  </a>
                </div>
              </div>
              <div className="bg-gray-100">
                <div className="border-t first:border-t-0 py-5 px-6">
                  <ul
                    role="list"
                    aria-labelledby="desktop-featured-heading-1"
                    className="flex flex-wrap gap-y-2"
                  >
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Bags
                      </a>
                    </li>
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Drinkware
                      </a>
                    </li>
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Golf
                      </a>
                    </li>
                    <li className="w-full lg:w-1/2 flex items-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        Office
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-sm border-b border-gray-300">
              <div className="flex items-center justify-between py-3 px-2 pl-8">
                <div className="">
                  <a href="product-listing.html" className="">
                    Custom Requests
                  </a>
                </div>
              </div>
            </div>
            <div className="text-sm border-b border-gray-300">
              <div className="flex items-center justify-between py-3 px-2 pl-8">
                <div className="">
                  <a href="product-listing.html" className="">
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- <div className="px-1" >
                          <button className="flex items-center justify-between w-full group mb-1"
                          @click.prevent="open = !open" :aria-expanded="open"
                          >
                          <div className="text-sm text-gray-800 font-medium px-2">Company</div>
                          <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                          </svg> 
                          </button>
                      </div>
                      <div className="px-1" >
                          <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open">
                          <div className="text-sm text-gray-800 font-medium px-2">Stores</div>
                          <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                          </svg> 
                          </button>
                      </div> -->
                  </div>
                  <!-- <div className="border-t border-gray-200 py-6 px-4 space-y-6">                    
                      <div className="flow-root">
                          <a href="javascript:void(0);" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                      </div>
                  
                      <div className="flow-root">
                          <a href="javascript:void(0);" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                      </div>                    
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      <div className="flow-root">
                          <a href="javascript:void(0);" className="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
                      </div>
                      <div className="flow-root">
                          <a href="javascript:void(0);" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                      </div>
                  </div> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
