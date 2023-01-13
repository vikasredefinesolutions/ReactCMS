import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link
} from '@mui/material';
import { FilterChangeHandler, FilterType } from '@type/productList.type';

const SideFilter = ({
  filters,
  handleChange,
  checkedFilters,
}: {
  filters: FilterType;
  handleChange: FilterChangeHandler;
  checkedFilters: any;
}) => (
  <div className="relative">
    <div className="bg-gray-100 p-4">
      <div className="mt-4 filter-box filter-type">
        {filters &&
          filters.map((filter, index) => (
            <div
              key={index}
              className="py-1 border-t border-neutral-300 first:border-t-0 first:pt-0"
            >
              <Accordion
                style={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 rotate-180"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="flex items-center justify-between w-full group mb-1"
                >
                  <div className="text-lg font-medium text-gray-900 block uppercase">
                    {filter.label}
                  </div>
                </AccordionSummary>
                <AccordionDetails className="text-sm">
                  <ul
                    className={
                      filter.label === 'Color'
                        ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                        : filter.label === 'Category'
                          ? 'ml-0 w-full'
                          : 'pb-6 pt-2 space-y-3'
                    }
                  >
                    {filter.options.map((option, ind) => {
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
                                className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${checked && 'border-secondary'
                                  }`}
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
                            ) : filter.label === 'Category' ? (
                              <li key={ind} className="w-full py-1">
                                <Link
                                  key={option.name}
                                  id={option.name}
                                  className="font-semibold flex items-center text-black !no-underline"
                                  href={`${option.sename}.html`}
                                >
                                  <a className='font-semibold flex items-center text-black'>
                                    <span className="material-icons-outlined">
                                      expand_more
                                    </span>
                                    {option.name}({option.productCount})
                                  </a>
                                </Link>
                                {/* <ul className="ml-3">
                                    <li className="py-1"> <a href="javascript:void(0);" className="flex items-center text-black"> <span className="material-icons-outlined"> chevron_right</span> Short Sleeve(240)</a></li>
                                    <li className="py-1"> <a href="javascript:void(0);" className="flex items-center text-black"> <span className="material-icons-outlined"> chevron_right</span> Long Sleeve(14)</a></li>
                                  </ul> */}
                              </li>
                            ) : (
                              <li className="flex items-center" key={ind}>
                                <input
                                  id={`${option.name}-${ind}`}
                                  name={filter.label}
                                  value={option.name}
                                  checked={checked}
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
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
      </div>
    </div>
  </div>

  // <div className="relative">
  //   <div className="p-4">
  //     <div className="flex items-center justify-between">
  //       <h2 className="text-lg font-medium text-gray-900">Filters</h2>
  //     </div>

  //     <div>
  //       {filters &&
  //         filters.map((filter, index) => (
  //           <div
  //             className={`py-4${index === 0 ? '' : ' border-t border-neutral-300'
  //               }`}
  //             x-data="{ open: true }"
  //             key={index}
  //           >
  //             <button
  //               className="flex items-center justify-between w-full group mb-1"
  //               aria-expanded="true"
  //             >
  //               <div className="text-sm text-gray-800 font-medium">
  //                 {filter.label}
  //               </div>
  //               {/* {currentAccordion === index ? (
  //                   <OpenAccordionIcon />
  //                 ) : (
  //                   <CloseAccordionIcon />
  //                 )} */}
  //             </button>
  //             <div className="text-sm">
  //               <ul
  //                 className={
  //                   filter.label === 'Color'
  //                     ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
  //                     : 'pb-6 pt-2 space-y-3'
  //                 }
  //               >
  //                 {filter.options.map((option, ind) => {
  //                   const checked =
  //                     checkedFilters.findIndex(
  //                       (res: { name: string; value: string }) =>
  //                         res.name === filter.label &&
  //                         res.value === option.name,
  //                     ) > -1;

  //                   return (
  //                     <>
  //                       {option.name || option.colorCode ? (
  //                         filter.label === 'Color' ? (
  //                           <li
  //                             className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${checked && 'border-secondary'
  //                               }`}
  //                             style={{
  //                               background: option.colorCode,
  //                             }}
  //                             onClick={() => {
  //                               handleChange(
  //                                 filter.label,
  //                                 option.name,
  //                                 !checked,
  //                               );
  //                             }}
  //                           ></li>
  //                         ) : filter.label === 'Category' ? (
  //                           <li key={ind} className="w-full py-1">
  //                             <Link
  //                               key={option.name}
  //                               id={option.name}
  //                               className="font-semibold flex items-center text-black"
  //                               href={`${option.sename}.html`}
  //                             >
  //                               <a>
  //                                 <span className="material-icons-outlined">
  //                                   expand_more
  //                                 </span>{option.name}({option.productCount})
  //                               </a>
  //                             </Link>
  //                             {/* <ul className="ml-3">
  //                                   <li className="py-1"> <a href="javascript:void(0);" className="flex items-center text-black"> <span className="material-icons-outlined"> chevron_right</span> Short Sleeve(240)</a></li>
  //                                   <li className="py-1"> <a href="javascript:void(0);" className="flex items-center text-black"> <span className="material-icons-outlined"> chevron_right</span> Long Sleeve(14)</a></li>
  //                                 </ul> */}
  //                           </li>
  //                         ) : (
  //                           <li className="flex items-center" key={ind}>
  //                             <input
  //                               id={`${option.name}-${ind}`}
  //                               name={filter.label}
  //                               value={option.name}
  //                               checked={checked}
  //                               type="checkbox"
  //                               onChange={(e) => {
  //                                 const { name, value, checked } = e.target;
  //                                 handleChange(name, value, checked);
  //                               }}
  //                               className="h-4 w-4 border-gray-300 rounded text-indigo-600"
  //                             />
  //                             <label
  //                               htmlFor={`${option.name}-${ind}`}
  //                               className="ml-3 text-sm text-gray-600"
  //                             >
  //                               {option.name} ({option?.productCount})
  //                             </label>
  //                           </li>
  //                         )
  //                       ) : null}
  //                     </>
  //                   );
  //                 })}
  //               </ul>
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   </div>
  // </div>
);

export default SideFilter;
