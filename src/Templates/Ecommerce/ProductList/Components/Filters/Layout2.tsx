import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import { FilterChangeHandler, FilterType } from '@type/productList.type';
import { ChevronDown } from 'mdi-material-ui';
import { Fragment } from 'react';

const FilterLayout2 = ({
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
      <div className='relative sidebar'>
        {filters.map((filter, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls={`panel-content-${index + 1}`}
              id={`panel-header-${index + 1}`}
            >
              <Typography style={{ fontWeight: '600', fontFamily: 'inherit' }}>
                {filter?.label}
              </Typography>
            </AccordionSummary>
            <ul
              className={
                filter.label === 'Color'
                  ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                  : 'pb-6 pt-2 space-y-3'
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
                    <div
                      className={filter.label == 'Color' ? 'color' : 'extra'}
                    >
                      <AccordionDetails>
                        {option.name || option.colorCode ? (
                          filter.label === 'Color' ? (
                            <button
                              className={`w-8 h-8 border border-black border-opacity-10 bg-[#111827]`}
                              style={{
                                background: option.colorCode,
                                listStyle: 'none',
                              }}
                              onClick={() => {
                                handleChange(
                                  filter.label,
                                  option.name,
                                  !checked,
                                );
                              }}
                            ></button>
                          ) : (
                            <li
                              className='flex items-center'
                              style={{ display: 'flex' }}
                              key={ind}
                            >
                              <input
                                id={`${option.name}-${ind}`}
                                name={filter.label}
                                value={option.name}
                                checked={checked}
                                type='checkbox'
                                onChange={(e) => {
                                  const { name, value, checked } = e.target;
                                  handleChange(name, value, checked);
                                }}
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600'
                              />
                              {option.label === 'Size' ||
                              option.label === 'Price Range' ? (
                                <label
                                  htmlFor={`${option.name}-${ind}`}
                                  className='ml-3 text-sm text-gray-600'
                                >
                                  {option.name}
                                </label>
                              ) : (
                                <label
                                  htmlFor={`${option.name}-${ind}`}
                                  className='ml-3 text-sm text-gray-600'
                                >
                                  {option.name} ({option?.productCount})
                                </label>
                              )}
                            </li>
                          )
                        ) : null}
                        {/* <li key={index} className="flex items-center">
                        <input
                            id="material-0"
                            name="material[]"
                            value="new-arrivals"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            onChange={(e) => {
                                const { name, value, checked } = e.target;
                                handleChange(name, value, checked);
                              }}
                        />
                        <label
                            htmlFor="material-0"
                            className="ml-3 text-sm text-gray-600"
                        >
                            {option.name} ({option.productCount})
                        </label>
                    </li> */}
                      </AccordionDetails>
                    </div>
                  </Fragment>
                );
              })}
            </ul>
          </Accordion>
        ))}
      </div>
      {/* <div className="relative">
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
      </div>

      <div>
        {filters &&
          filters.map((filter, index) => (
            <div
              className={`py-4${index === 0 ? '' : ' border-t border-neutral-300'
                }`}
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
              
              </button>
              <div className="text-sm">
                <ul
                  className={
                    filter.label === 'Color'
                      ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                      : 'pb-6 pt-2 space-y-3'
                  }
                >
                  {
                    filter.options.map((option, ind) => {
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
                                className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${checked && 'border-secondary'}`}
                                style={{
                                  background: option.colorCode,
                                }}
                                onClick={() => {
                                  handleChange(
                                    filter.label,
                                    option.name,
                                    !checked,
                                  );
                                }}
                              ></li>
                            ) : (
                              <li className="flex items-center" key={ind}>
                                <input
                                  id={`${option.name}-${ind}`}
                                  name={filter.label}
                                  value={option.name}
                                  checked={
                                    checked
                                  }
                                  type="checkbox"
                                  onChange={(e) => {
                                    const { name, value, checked } = e.target;
                                    handleChange(name, value, checked);
                                  }}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600"
                                />
                                <label
                                  htmlFor={`${option.name}-${ind}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.name} ({option?.productCount})
                                </label>
                              </li>
                            )
                          ) : null}
                        </>
                      );
                    })
                  }
                </ul >
              </div >
            </div >
          ))}
      </div >
    </div >
  </div > */}
    </>
  );
};

export default FilterLayout2;
