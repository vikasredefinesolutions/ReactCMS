import { list_FnProps } from '..';
import ProductLayout2 from '../components/PorudctComponent/Product.layout2';

const Layout3 = ({
  filters,
  products,
  checkedFilters,
  totalCount,
  showFilter,
  showSortMenu,
  productView,
  skuList,
  setShowSortMenu,
  setShowFilter,
  setProductView,
  colorChangeHandler,
  handleChange,
  loadMore,
  sortProductJson,
  clearFilters,
  compareCheckBoxHandler,
}: list_FnProps) => {
  return (
    <section id="" className="">
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-3/12 px-3 lg:w-2/12">
              <button className="md:!hidden btn btn-lg btn-secondary !py-2 !flex w-full items-center justify-between">
                <div className="">Filter</div>
                <div className="toggleicon">-</div>
              </button>
              <div className="filter-box">
                <div className="px-0 py-2" x-data="{ open: false }">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full group"
                    aria-expanded="false"
                  >
                    <span className="hidden">Button</span>
                    <div className="font-medium">Material</div>
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                  </button>
                  <div className="text-sm pb-2" x-show="open">
                    <ul className="pt-2 pb-6 space-y-3">
                      <li className="flex items-center">
                        <input
                          id="material-0"
                          name="material[]"
                          value="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="material-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Cotton (11)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="material-1"
                          name="material[]"
                          value="tees"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="material-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Silk-Cotton (5)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="material-2"
                          name="material[]"
                          value="crewnecks"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="material-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Crepe (6)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="material-3"
                          name="material[]"
                          value="sweatshirts"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="material-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Georgette (20)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="material-4"
                          name="material[]"
                          value="pants-shorts"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="material-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Rayon (8)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-9/12 px-3 lg:w-10/12"
              x-data="{ selected : 1 }"
            >
              <div className="flex justify-between items-center space-x-6 text-sm border-b border-slate-200 pb-4">
                <div className="lg:flex-1 flex flex-wrap items-center gap-4 leading-none">
                  <div className="flex items-center gap-2">
                    <a className="inline-block text-anchor hover:text-anchor-hover">
                      <span className="sr-only">Grid View</span>
                      <span className="material-icons-outlined">grid_view</span>
                    </a>

                    <a className="inline-block text-anchor-hover">
                      <span className="sr-only">List View</span>
                      <span className="material-icons-outlined">
                        view_agenda
                      </span>
                    </a>
                  </div>
                  <div className="">250 results</div>
                </div>
                <div className="col-start-1 row-start-1 px-2">
                  <div className="flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 z-40">
                    <div className="flex items-center">
                      <div
                        x-data="Components.menu({ open: false })"
                        x-init="init()"
                        className="relative inline-block text-left"
                      >
                        <div className="">
                          <button
                            type="button"
                            className="flex items-center text-anchor hover:text-anchor-hover"
                            id="menu-button"
                          >
                            <span className="">Sort</span>
                            <span className="material-icons-outlined">
                              expand_more
                            </span>
                          </button>
                        </div>
                        <div className="z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1 text-sm" role="none"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-labelledby="products-heading" className="mt-8">
                <div className="mt-8 relative gridlistview" id="gridview">
                  <div className="relative w-full pb-6 -mb-6">
                    <ul
                      role="list"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                    >
                      {products.map((product) => (
                        <ProductLayout2
                          skuList={skuList}
                          compareCheckBoxHandler={compareCheckBoxHandler}
                          product={product}
                          colorChangeHandler={colorChangeHandler}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="py-20 border-t border-t-gray-300 text-center">
                    <div className="mb-8">
                      You've seen 09 Products out of 250
                    </div>
                    <button type="submit" className="btn btn-lg btn-secondary">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout3;
