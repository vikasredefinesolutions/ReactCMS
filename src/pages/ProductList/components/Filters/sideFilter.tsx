import { FilterChangeHandler, FilterType } from '@type/productList.type';

const SideFilter = ({filters, handleChange, checkedFilters}: {filters: FilterType, handleChange: FilterChangeHandler, checkedFilters: any}) => (
    <div className="w-full lg:w-3/12 px-4">
      <div className="relative">
        <div className="bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          </div>

          <div>
            {filters && filters.map((filter, index) => (
              <div
                className="py-4 border-t border-neutral-300"
                x-data="{ open: true }"
                key={index}
              >
                <button
                  className="flex items-center justify-between w-full group mb-1"
                  aria-expanded="true"
                
                >
                  <div className="text-sm text-gray-800 font-medium">
                    {filter.label}
                  </div>
                  {/* {currentAccordion === index ? (
                    <OpenAccordionIcon />
                  ) : (
                    <CloseAccordionIcon />
                  )} */}
                </button>
                <div
                  className="text-sm"
                //   style={{
                //     display: currentAccordion === index ? 'unset' : 'none',
                //   }}
                >
                  <ul className="pb-6 pt-2 space-y-3">
                    {filter.options.map((option, ind) => (
                      <li className="flex items-center" key={ind}>
                        <input
                          id={`${option.name}-${ind}`}
                          name={filter.label}
                          value={option.name}
                          checked={checkedFilters.findIndex((res: { name: string; value: string; }) => res.name === filter.label && res.value === option.name) > -1}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor={`${option.name}-${ind}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.name} ({option?.productCount})
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
)

export default SideFilter;