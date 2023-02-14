import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { FilterChangeHandler, FilterType } from '@type/productList.type';
import { Fragment } from 'react';

const FilterLayout3 = ({
  filters,
  handleChange,
  checkedFilters,
}: {
  filters: FilterType;
  handleChange: FilterChangeHandler;
  checkedFilters: any;
}) => {
  return (
    <>
      {/* <div className="filter-box">
                    {filters.map((filter, index) => (
                        <div key={index} className="px-0 py-2" x-data="{ open: false }">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full group"
                                aria-expanded="false"
                            >
                                <div className="font-medium">{filter.label}</div>
                                <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180" viewBox="0 0 32 32">
                                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                            </svg>
                            </button>
                            <div className="text-sm pb-2" x-show="open">
                                <ul className="pt-2 pb-6 space-y-3">
                                    {filter.options.map((option, index) => (
                                        <li key={index} className="flex items-center">
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
                                                {option.name} ({option.productCount})
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                     ))}
            </div> */}
      <div className='filter-box sidebar'>
        {filters.map((filter, index) => (
          <Accordion key={`panel-header-${index + 1}`}>
            <AccordionSummary
              expandIcon={
                <>
                  <svg
                    className='w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180'
                    viewBox='0 0 32 32'
                  >
                    <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                  </svg>
                </>
              }
              aria-controls={`panel-content-${index + 1}`}
              id={`panel-header-${index + 1}`}
            >
              <Typography>{filter?.label}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul
                className={
                  filter.label == 'Color'
                    ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                    : 'pb-0 space-y-3'
                }
              >
                {filter.options.map((option, ind) => {
                  const checked =
                    checkedFilters.findIndex(
                      (res: { name: string; value: string }) =>
                        res.name === filter.label && res.value === option.name,
                    ) > -1;
                  return (
                    <Fragment key={ind}>
                      {option.name || option.colorCode ? (
                        filter.label === 'Color' ? (
                          <li
                            className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${
                              checked && 'border-secondary'
                            }`}
                            style={{
                              background: option.colorCode,
                            }}
                            onClick={() =>
                              handleChange(filter.label, option.name, !checked)
                            }
                          ></li>
                        ) : (
                          <li className='flex items-center sidebarTextInput'>
                            <input
                              name={filter.label}
                              value={option.name}
                              checked={checked}
                              type='checkbox'
                              onChange={(e) => {
                                const { name, value, checked } = e.target;
                                handleChange(name, value, checked);
                              }}
                              className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                            />
                            <label
                              htmlFor='brandfil-0'
                              className='ml-3 text-black text-base'
                            >
                              {option.name} ({option.productCount})
                            </label>
                          </li>
                        )
                      ) : null}
                    </Fragment>
                  );
                })}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default FilterLayout3;
