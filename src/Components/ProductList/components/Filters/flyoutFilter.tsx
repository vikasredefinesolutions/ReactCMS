import { FilterChangeHandler, FilterType } from '@type/productList.type';

const FlyOutFilter = ({
  filters,
  checkedFilters,
  handleChange,
  closeFilter,
}: {
  filters: FilterType;
  checkedFilters: any;
  handleChange: FilterChangeHandler;
  closeFilter: (arg: boolean) => void;
}) => {
  return (
    <div className="bg-gray-100 fixed top-0 w-80 z-50 h-screen overflow-auto left-0">
      <div className="border-b border-b-neutral-300 p-2 sticky top-0 left-0 bg-gray-100 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">Filters</div>
        <button>
          <span
            onClick={() => closeFilter(false)}
            className="material-icons-outlined"
          >
            close
          </span>
        </button>
      </div>
      <div className="p-4 pt-0">
        <form className="mt-4 filter-box filter-type">
          <div>
            {/* <div
                            className="text-lg font-medium text-gray-900 hidden lg:block mb-4 uppercase"
                        >
                            Category
                        </div>
                        <div
                            className="py-4 border-t border-neutral-300 filter-type"
                            x-data="{ open: true }"
                        >
                            <div className="text-md" x-show="open">
                                <ul className="w-full">
                                    <ul className="ml-0 w-full text-base">
                                        <li className="w-full py-1">
                                            <a
                                                className="font-semibold flex items-center text-black"
                                                
                                            ><span className="material-symbols-outlined">expand_more</span>
                                                Polos(266)</a
                                            >
                                            <ul className="ml-3">
                                                <li className="py-1">
                                                    <a
                                                        
                                                        className="flex items-center text-black"
                                                    ><span className="material-symbols-outlined"
                                                    >chevron_right</span
                                                        >
                                                        Short Sleeve(240)</a
                                                    >
                                                </li>
                                                <li className="py-1">
                                                    <a
                                                        
                                                        className="flex items-center text-black"
                                                    ><span className="material-symbols-outlined"
                                                    >chevron_right</span
                                                        >
                                                        Long Sleeve(14)</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                Quarter Zips &amp; Pullovers(213)</a
                                            >
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                Jackets(307</a
                                            >
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                Hoodies &amp; Sweatshirts(128)</a
                                            >
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                Vests(95)</a
                                            >
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                T-Shirt(150)</a
                                            >
                                        </li>
                                        <li className="py-1">
                                            <a
                                                
                                                className="flex items-center text-black"
                                            ><span className="material-symbols-outlined"
                                            >chevron_right</span
                                                >
                                                Shirts(47)</a
                                            >
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div> */}

            {filters.map((filter, index) => (
              <div
                key={index}
                className={`py-4${
                  index === 0 ? '' : ' border-t border-neutral-300'
                }`}
                x-data="{ open: true }"
              >
                <button
                  className="flex items-center justify-between w-full group mb-1"
                  aria-expanded="true"
                >
                  <div className="text-lg font-medium text-gray-900 hidden lg:block uppercase">
                    {filter.label}
                  </div>
                </button>
                <div className="text-sm" x-show="open">
                  <ul
                    className={
                      filter.label.toLowerCase() === 'color'
                        ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                        : 'pb-6 pt-2 space-y-3'
                    }
                  >
                    {filter.options.map((option) => {
                      const checked =
                        checkedFilters.findIndex(
                          (res: { name: string; value: string }) =>
                            res.name === filter.label &&
                            res.value === option.name,
                        ) > -1;
                      return (
                        <>
                          {option.name || option.colorCode ? (
                            filter.label === 'Color' ? (
                              <li
                                key={index}
                                className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${
                                  checked && 'border-secondary'
                                }`}
                                style={{
                                  background: option.colorCode,
                                }}
                                onClick={() =>
                                  handleChange(
                                    filter.label,
                                    option.name,
                                    !checked,
                                  )
                                }
                              ></li>
                            ) : (
                              <li className="flex items-center">
                                <input
                                  name={filter.label}
                                  value={option.name}
                                  checked={checked}
                                  type="checkbox"
                                  onChange={(e) => {
                                    const { name, value, checked } = e.target;
                                    handleChange(name, value, checked);
                                  }}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor="brandfil-0"
                                  className="ml-3 text-black text-base"
                                >
                                  {option.name} ({option.productCount})
                                </label>
                              </li>
                            )
                          ) : null}
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}

            {/* <div className="py-4 border-t border-neutral-300" x-data="{ open: true }">
                            <button
                                className="flex items-center justify-between w-full group mb-1"
                                aria-expanded="true"
                            >
                                <div
                                    className="text-lg font-medium text-gray-900 hidden lg:block uppercase"
                                >
                                    Product Type
                                </div>
                                <svg
                                    className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button>
                            <div className="text-sm" x-show="open">
                                <ul className="pb-6 pt-2 space-y-3">
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-0"
                                            name="prodtypefile[]"
                                            value="Bottom"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-0" className="ml-3 text-black text-base"
                                        >Bottom</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-1"
                                            name="prodtypefile[]"
                                            value="coat-&amp;-jacket"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-1" className="ml-3 text-black text-base"
                                        >Coat &amp; Jacket</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-2"
                                            name="prodtypefile[]"
                                            value="jeans-&amp;-denim"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-2" className="ml-3 text-black text-base"
                                        >Jeans &amp; denim</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-3"
                                            name="prodtypefile[]"
                                            value="kids-wear"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-3" className="ml-3 text-black text-base"
                                        >Kids Wear</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-4"
                                            name="prodtypefile[]"
                                            value="sports-wear"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-4" className="ml-3 text-black text-base"
                                        >Sports Wear</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-5"
                                            name="prodtypefile[]"
                                            value="t-shirts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-5" className="ml-3 text-black text-base"
                                        >T-shirts</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="prodtypefile-6"
                                            name="prodtypefile[]"
                                            value="t-shirts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="prodtypefile-6" className="ml-3 text-black text-base"
                                        >Shoes</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div >
                        <div className="py-4 border-t border-neutral-300" x-data="{ open: true }">
                            <button
                                className="flex items-center justify-between w-full group mb-1"
                                aria-expanded="true"
                            >
                                <div
                                    className="text-lg font-medium text-gray-900 hidden lg:block uppercase"
                                >
                                    Select Color
                                </div>
                                <svg
                                    className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button >
                            <div className="text-base" x-show="open">
                                <ul
                                    role="list"
                                    className=""
                                >
                                    <li
                                        className="w-8 h-8 border-2 border-secondary hover:border-secondary p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/black-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/blue-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/brown-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/green-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/grey-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/orange-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/pink-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/purple-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/red-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/white-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/yellow-sc.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                    <li
                                        className="w-8 h-8 border-2 border-light-gray hover:border-secondary relative p-0.5"
                                    >
                                        <img
                                            src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/cyan-sc-175.jpg"
                                            alt=""
                                            title=""
                                            className=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div >
                        <div className="py-4 border-t border-neutral-300" x-data="{ open: true }">
                            <button
                                className="flex items-center justify-between w-full group mb-1"
                                aria-expanded="true"
                            >
                                <div
                                    className="text-lg font-medium text-gray-900 hidden lg:block uppercase"
                                >
                                    Select Size
                                </div>
                                <svg
                                    className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180"

                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button >
                            <div className="text-sm" x-show="open">
                                <ul className="pb-6 pt-2 space-y-3">
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-0"
                                            name="sizefil[]"
                                            value="new-arrivals"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-0" className="ml-3 text-black text-base"
                                        >XS (3)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-1"
                                            name="sizefil[]"
                                            value="tees"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-1" className="ml-3 text-black text-base"
                                        >S (1)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-2"
                                            name="sizefil[]"
                                            value="crewnecks"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-2" className="ml-3 text-black text-base"
                                        >M (10)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-3"
                                            name="sizefil[]"
                                            value="sweatshirts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-3" className="ml-3 text-black text-base"
                                        >L (25)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-4"
                                            name="sizefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-4" className="ml-3 text-black text-base"
                                        >XL (15)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="sizefil-5"
                                            name="sizefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="sizefil-5" className="ml-3 text-black text-base"
                                        >XXL (29)</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div >
                        <div className="py-4 border-t border-neutral-300" x-data="{ open: true }">
                            <button
                                className="flex items-center justify-between w-full group mb-1"
                                aria-expanded="true"
                            >
                                <div
                                    className="text-lg font-medium text-gray-900 hidden lg:block uppercase"
                                >
                                    Price Range
                                </div>
                                <svg
                                    className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button >
                            <div className="text-sm" x-show="open">
                                <ul className="pb-6 pt-2 space-y-3">
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-0"
                                            name="pricefil[]"
                                            value="new-arrivals"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-0" className="ml-3 text-black text-base"
                                        >$150 - $199 (2)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-1"
                                            name="pricefil[]"
                                            value="tees"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-1" className="ml-3 text-black text-base"
                                        >$200 - $249 (8)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-2"
                                            name="pricefil[]"
                                            value="crewnecks"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-2" className="ml-3 text-black text-base"
                                        >$250 - $299 (15)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-3"
                                            name="pricefil[]"
                                            value="sweatshirts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-3" className="ml-3 text-black text-base"
                                        >$300 - $349 (7)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-4"
                                            name="pricefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-4" className="ml-3 text-black text-base"
                                        >$350 - $399 (20)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-5"
                                            name="pricefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-5" className="ml-3 text-black text-base"
                                        >$400 - $449 (18)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-6"
                                            name="pricefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-6" className="ml-3 text-black text-base"
                                        >$450 - $499 (6)</label
                                        >
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            id="pricefil-7"
                                            name="pricefil[]"
                                            value="pants-shorts"
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="pricefil-7" className="ml-3 text-black text-base">$500 and above (4)</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div > */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlyOutFilter;
