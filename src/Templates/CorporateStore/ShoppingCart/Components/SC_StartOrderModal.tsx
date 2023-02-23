import React from 'react';

// Bacardi - BacardiToGo - BacardiGreyGoose -
export const SC_StartOrderModal_withLogo: React.FC = () => {
  return (
    <div
      id='startorderModal'
      // aria-hidden="true"
      className='hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
          <div className='relative bg-white shadow max-h-screen overflow-y-auto'>
            <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
              <div className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                Patagonia Men's Better Sweater Jacket
              </div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                data-modal-toggle='startorderModal'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6'>
              <div className='flex flex-wrap mb-6'>
                <div className='w-full lg:w-1/2'>
                  <div className=''>
                    <span className='font-semibold'>SKU : </span>
                    <span>25528</span>
                  </div>
                  <div className=''>
                    <span className='font-semibold'>Color : </span>
                    <span>Stonewash</span>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 lg:text-right'>
                  <div className='font-semibold'>Item Total :</div>
                  <div className='font-semibold'>$0.00</div>
                </div>
              </div>
              <div className='mb-6' x-data='{ open : false}'>
                <div className=''>
                  <button
                    type='button'
                    //   @click="open = !open"
                    className='text-indigo-500 text-sm font-semibold underline'
                  >
                    See All 6 Colors
                  </button>
                </div>
                <div x-show='open' x-cloak>
                  <div className='text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2'>
                    <span className='text-lg font-bold text-white'>
                      Available Colors:
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-5 text-sm text-center px-2'>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Stonewash</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Black</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>New Navy</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Pale Khaki</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Nickel w/Forge Grey</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Nickel</div>
                    </div>
                  </div>
                </div>
                {/* <!-- Colors --> */}
                <div className='mt-3'>
                  <h2 className='sr-only'>Product information</h2>
                </div>
                <div>
                  <div className='text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5'>
                    <span className='text-lg font-semibold text-white'>
                      Discount Pricing:
                    </span>
                    <a
                      href='javascript:void(0);'
                      className='text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center'
                      data-toggle='collapse'
                      data-target='#minimum-order'
                      id='aMinOrder'
                    >
                      <span>MINIMUM ORDER :</span> 12 units per color
                    </a>
                  </div>
                  {/* <!-- <div className="text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2">
                                  <p className=""><span className="text-lg font-semibold mr-1">Price: $139.00</span>per item</p>
                                  <a href="javascript:void(0);" className="uppercase items-center" data-toggle="collapse" data-target="#minimum-order" id=""> <strong>DISCOUNT PRICING AVAILABLE!</strong> </a>
                              </div>
                              <div className="mt-3 border border-gray-700 p-2 flex flex-wrap justify-between items-center gap-y-2">
                                  <div className="w-full md:w-1/2 text-lg font-bold text-gray-900">
                                      <span className="w-full block">LOGIN OR CREATE AN ACCOUNT</span>
                                      <span className="w-full block text-base font-normal">to see discounted pricing on this product.</span>
                                  </div>
                                  <div className="w-full md:w-1/2 text-left flex justify-end">
                                      <button data-modal-toggle="startorderModal" type="button" className="btn btn-lg btn-secondary !flex items-center justify-center w-full">Login / Create an account</button>
                                  </div>                                    
                              </div> --> */}
                  <div className='bg-gray-100 flex flex-wrap text-center border border-gray-300'>
                    <div className='hidden md:block text-left'>
                      <div className='p-1 px-2 border-r border-b border-gray-300 font-semibold'>
                        Quantity:
                      </div>
                      <div className='p-1 px-2 border-r border-gray-300 font-semibold'>
                        Price:
                      </div>
                    </div>
                    <div className='flex flex-wrap text-center grow'>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          12+
                        </div>
                        <div className='p-1 px-2'>$139.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          24+
                        </div>
                        <div className='p-1 px-2'>$129.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          48+
                        </div>
                        <div className='p-1 px-2'>$119.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          72+
                        </div>
                        <div className='p-1 px-2'>$109.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          144+
                        </div>
                        <div className='p-1 px-2'>$99.00</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-xs p-3 pb-0'
                    //   style="display: none"
                    id='divMinorder'
                  >
                    We reserve the right to reject orders that do not meet the
                    12 piece minimum per style and color, exceptions may apply
                    for men’s and women’s companion styles per color.
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='overflow-x-auto max-h-screen'>
                  <table
                    cellPadding='0'
                    cellSpacing='0'
                    className='table-auto w-full text-xs text-center text-[#191919]'
                  >
                    <thead className='text-xs font-semibold border-b border-neutral-200'>
                      <tr className=''>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Size</div>
                        </th>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Price</div>
                        </th>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Qty</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XS</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className='hidden'>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input
                              type='text'
                              className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                            />
                            <button
                              type='button'
                              className='bg-indigo-600 border-0 py-1 px-2 text-white'
                            >
                              Save
                            </button>
                            <button
                              type='button'
                              className='bg-white border border-neutral-200 text-gray-500 py-1 px-2'
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>SM</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>MD</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>LG</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XXL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>3XL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='mb-6'>
                <div className='' x-data='{custom_logo : 1}'>
                  <label
                    htmlFor='logo_later'
                    className='block p-2 border mb-1'
                    //   :className="custom_logo == 1 ? 'border-secondary' : 'border-slate-200'"
                  >
                    <input
                      type='radio'
                      value='1'
                      name='customize_logo'
                      id='logo_later'
                      x-model='custom_logo'
                      checked
                    />
                    Customize Logo Later with Dedicated Account Specialist
                  </label>
                  <label
                    htmlFor='logo_now'
                    className='block p-2 border mb-1'
                    //   :className="custom_logo == 2 ? 'border-secondary' : 'border-slate-200'"
                  >
                    <input
                      type='radio'
                      value='2'
                      name='customize_logo'
                      id='logo_now'
                      x-model='custom_logo'
                    />
                    Customize Logo Now
                  </label>
                  <div
                  //  className="" :className="custom_logo == 2 ? '' : 'hidden'"
                  >
                    <div className='p-2 mb-2 border bg-gray-50 border-slate-200'>
                      <div className='font-semibold text-lg mb-4'>
                        First Logo (FREE)
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select a location to print your logo :
                        </label>
                        <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                          <option value=''>Select</option>
                          <option value=''>Right Sleeve</option>
                          <option value=''>back Yoke</option>
                        </select>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select your logo :
                        </label>
                        <div className='flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2'>
                          <div className=''>
                            <img
                              src='images/logo-to-be-submitted.webp'
                              alt=''
                            />
                          </div>
                          <div className=''>
                            Logo to be submitted after order is placed
                          </div>
                          <div className=''>
                            <label
                              htmlFor='upload1'
                              className='inline-block bg-indigo-600 border-0 py-2 px-3 text-white'
                            >
                              Upload
                            </label>
                            <input
                              type='file'
                              name=''
                              id='upload1'
                              className='sr-only'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-2 mb-2 border bg-gray-50 border-slate-200'>
                      <div className='flex items-center justify-between mb-4 gap-2'>
                        <div className='font-semibold text-lg'>
                          Second Logo ($6.00)
                        </div>
                        <div className=''>
                          <a
                            href='javascript:void(0);'
                            className='text-rose-600'
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select a location to print your logo :
                        </label>
                        <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                          <option value=''>Select</option>
                          <option value=''>Right Sleeve</option>
                          <option value=''>back Yoke</option>
                        </select>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select your logo :
                        </label>
                        <div className='flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2'>
                          <div className=''>Upload Your Logo</div>
                          <div className=''>
                            <a
                              href='javascript:void(0);'
                              className='text-indigo-600 font-semibold'
                            >
                              Add Logo Later
                            </a>
                          </div>
                          <div className=''>
                            <label
                              htmlFor='upload2'
                              className='inline-block bg-indigo-600 border-0 py-2 px-3 text-white'
                            >
                              Upload
                            </label>
                            <input
                              type='file'
                              name=''
                              id='upload2'
                              className='sr-only'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <a
                        href='javascript:void(0);'
                        className='text-indigo-600 font-semibold'
                      >
                        + Add Second Logo
                      </a>
                      (Additional $6.00 per item)
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 p-4 flex flex-wrap items-end justify-between gap-2 text-sm mb-6'>
                <div className=''>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>
                      Quantity Selected:
                    </span>
                    <span className='font-semibold text-base'>0 </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>Price Per Item:</span>
                    <span className='font-semibold text-base'>$139 </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>First Logo:</span>
                    <span className='font-semibold text-base'>FREE </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>
                      Additional Logo(s):
                    </span>
                    <span className='font-semibold text-base'>$0.00</span>
                  </div>
                </div>
                <div className='text-base'>
                  <span className='inline-block mb-2'>Subtotal:</span>
                  <span className='font-semibold text-xl lg:text-3xl'>
                    $0.00
                  </span>
                </div>
              </div>
              <div className=''>
                <label htmlFor='' className='block mb-2'>
                  Notes :{' '}
                </label>
                <textarea
                  name=''
                  id=''
                  //
                  className='block w-full border border-gray-600 shadow-sm text-base py-2 px-4'
                  rows={10}
                ></textarea>
              </div>
            </div>
            <div className='p-6 pt-0'>
              <button
                data-modal-toggle='startorderModal'
                type='button'
                className='btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2'
              >
                Update Cart
              </button>
              <button
                data-modal-toggle='startorderModal'
                type='button'
                className='block w-full text-gray-500 hover:text-gray-700'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// bbcprod - bcorp - bbcProd
export const SC_StartOrderModal_withoutLogo: React.FC = () => {
  return (
    <div
      id='startorderModal'
      aria-hidden='true'
      className='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
          <div className='relative bg-white shadow max-h-screen overflow-y-auto'>
            <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
              <div className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                Patagonia Men's Better Sweater Jacket
              </div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                data-modal-toggle='startorderModal'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6'>
              <div className='flex flex-wrap mb-6'>
                <div className='w-full lg:w-1/2'>
                  <div className=''>
                    <span className='font-semibold'>SKU : </span>
                    <span>25528</span>
                  </div>
                  <div className=''>
                    <span className='font-semibold'>Color : </span>
                    <span>Stonewash</span>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 lg:text-right'>
                  <div className='font-semibold'>Item Total :</div>
                  <div className='font-semibold'>$0.00</div>
                </div>
              </div>
              <div className='mb-6' x-data='{ open : false}'>
                <div className=''>
                  <button
                    type='button'
                    //  @click="open = !open"
                    className='text-indigo-500 text-sm font-semibold underline'
                  >
                    See All 6 Colors
                  </button>
                </div>
                <div x-show='open' x-cloak>
                  <div className='text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2'>
                    <span className='text-lg font-bold text-white'>
                      Available Colors:
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-5 text-sm text-center px-2'>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Stonewash</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Black</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>New Navy</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Pale Khaki</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Nickel w/Forge Grey</div>
                    </div>
                    <div className='w-20'>
                      <div className='border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0'>
                        <img
                          src='images/1040623_25528_STH.jpg'
                          alt=''
                          className='w-full object-center object-cover'
                        />
                      </div>
                      <div className=''>Nickel</div>
                    </div>
                  </div>
                </div>
                {/* <!-- Colors --> */}
                <div className='mt-3'>
                  <h2 className='sr-only'>Product information</h2>
                </div>
                <div>
                  <div className='text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5'>
                    <span className='text-lg font-semibold text-white'>
                      Discount Pricing:
                    </span>
                    <a
                      href='javascript:void(0);'
                      className='text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center'
                      data-toggle='collapse'
                      data-target='#minimum-order'
                      id='aMinOrder'
                    >
                      {' '}
                      <span>MINIMUM ORDER :</span> 12 units per color
                    </a>
                  </div>
                  {/* <!-- <div className="text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2">
                              <p className=""><span className="text-lg font-semibold mr-1">Price: $139.00</span>per item</p>
                              <a href="javascript:void(0);" className="uppercase items-center" data-toggle="collapse" data-target="#minimum-order" id=""> <strong>DISCOUNT PRICING AVAILABLE!</strong> </a>
                          </div>
                          <div className="mt-3 border border-gray-700 p-2 flex flex-wrap justify-between items-center gap-y-2">
                              <div className="w-full md:w-1/2 text-lg font-bold text-gray-900">
                                  <span className="w-full block">LOGIN OR CREATE AN ACCOUNT</span>
                                  <span className="w-full block text-base font-normal">to see discounted pricing on this product.</span>
                              </div>
                              <div className="w-full md:w-1/2 text-left flex justify-end">
                                  <button data-modal-toggle="startorderModal" type="button" className="btn btn-lg btn-secondary !flex items-center justify-center w-full">Login / Create an account</button>
                              </div>                                    
                          </div> --> */}
                  <div className='bg-gray-100 flex flex-wrap text-center border border-gray-300'>
                    <div className='hidden md:block text-left'>
                      <div className='p-1 px-2 border-r border-b border-gray-300 font-semibold'>
                        Quantity:
                      </div>
                      <div className='p-1 px-2 border-r border-gray-300 font-semibold'>
                        Price:
                      </div>
                    </div>
                    <div className='flex flex-wrap text-center grow'>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          12+
                        </div>
                        <div className='p-1 px-2'>$139.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          24+
                        </div>
                        <div className='p-1 px-2'>$129.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          48+
                        </div>
                        <div className='p-1 px-2'>$119.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          72+
                        </div>
                        <div className='p-1 px-2'>$109.00</div>
                      </div>
                      <div className='sm:w-1/5'>
                        <div className='p-1 px-2 border-b border-gray-300'>
                          144+
                        </div>
                        <div className='p-1 px-2'>$99.00</div>
                      </div>
                    </div>
                  </div>
                  <div className='text-xs p-3 pb-0' id='divMinorder'>
                    We reserve the right to reject orders that do not meet the
                    12 piece minimum per style and color, exceptions may apply
                    for men’s and women’s companion styles per color.
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='overflow-x-auto max-h-screen'>
                  <table
                    cellPadding='0'
                    cellSpacing='0'
                    className='table-auto w-full text-xs text-center text-[#191919]'
                  >
                    <thead className='text-xs font-semibold border-b border-neutral-200'>
                      <tr className=''>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Size</div>
                        </th>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Price</div>
                        </th>
                        <th className='px-2 py-4 w-32'>
                          <div className=''>Qty</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XS</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className='hidden'>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input
                              type='text'
                              className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                            />
                            <button
                              type='button'
                              className='bg-indigo-600 border-0 py-1 px-2 text-white'
                            >
                              Save
                            </button>
                            <button
                              type='button'
                              className='bg-white border border-neutral-200 text-gray-500 py-1 px-2'
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>SM</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>MD</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>LG</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>XXL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='px-2 py-4'>
                          <div className=''>3XL</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>$139.00</div>
                        </td>
                        <td className='px-2 py-4'>
                          <div className=''>
                            <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                              <option value=''>0</option>
                              <option value=''>1</option>
                              <option value=''>2</option>
                              <option value=''>3</option>
                              <option value=''>4</option>
                              <option value=''>5</option>
                              <option value=''>6</option>
                              <option value=''>7</option>
                              <option value=''>8</option>
                              <option value=''>9</option>
                              <option value=''>10+</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='mb-6'>
                <div className='' x-data='{custom_logo : 1}'>
                  <label
                    htmlFor='logo_later'
                    // className="block p-2 border mb-1" :className="custom_logo == 1 ? 'border-secondary' : 'border-slate-200'"
                  >
                    <input
                      type='radio'
                      value='1'
                      name='customize_logo'
                      id='logo_later'
                      x-model='custom_logo'
                      checked
                    />
                    Customize Logo Later with Dedicated Account Specialist
                  </label>
                  <label
                    htmlFor='logo_now'
                    className='block p-2 border mb-1'
                    //  :className="custom_logo == 2 ? 'border-secondary' : 'border-slate-200'"
                  >
                    <input
                      type='radio'
                      value='2'
                      name='customize_logo'
                      id='logo_now'
                      x-model='custom_logo'
                    />
                    Customize Logo Now
                  </label>
                  <div
                    className=''
                    // :className="custom_logo == 2 ? '' : 'hidden'"
                  >
                    <div className='p-2 mb-2 border bg-gray-50 border-slate-200'>
                      <div className='font-semibold text-lg mb-4'>
                        First Logo (FREE)
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select a location to print your logo :{' '}
                        </label>
                        <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                          <option value=''>Select</option>
                          <option value=''>Right Sleeve</option>
                          <option value=''>back Yoke</option>
                        </select>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select your logo :{' '}
                        </label>
                        <div className='flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2'>
                          <div className=''>
                            <img
                              src='images/logo-to-be-submitted.webp'
                              alt=''
                            />
                          </div>
                          <div className=''>
                            Logo to be submitted after order is placed
                          </div>
                          <div className=''>
                            <label
                              htmlFor='upload1'
                              className='inline-block bg-indigo-600 border-0 py-2 px-3 text-white'
                            >
                              Upload
                            </label>
                            <input
                              type='file'
                              name=''
                              id='upload1'
                              className='sr-only'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-2 mb-2 border bg-gray-50 border-slate-200'>
                      <div className='flex items-center justify-between mb-4 gap-2'>
                        <div className='font-semibold text-lg'>
                          Second Logo ($6.00)
                        </div>
                        <div className=''>
                          <a
                            href='javascript:void(0);'
                            className='text-rose-600'
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select a location to print your logo :{' '}
                        </label>
                        <select className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'>
                          <option value=''>Select</option>
                          <option value=''>Right Sleeve</option>
                          <option value=''>back Yoke</option>
                        </select>
                      </div>
                      <div className='mb-4 last:mb-0'>
                        <label htmlFor='' className='block mb-2'>
                          Select your logo :{' '}
                        </label>
                        <div className='flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2'>
                          <div className=''>Upload Your Logo</div>
                          <div className=''>
                            <a
                              href='javascript:void(0);'
                              className='text-indigo-600 font-semibold'
                            >
                              Add Logo Later
                            </a>
                          </div>
                          <div className=''>
                            <label
                              htmlFor='upload2'
                              className='inline-block bg-indigo-600 border-0 py-2 px-3 text-white'
                            >
                              Upload
                            </label>
                            <input
                              type='file'
                              name=''
                              id='upload2'
                              className='sr-only'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <a
                        href='javascript:void(0);'
                        className='text-indigo-600 font-semibold'
                      >
                        + Add Second Logo
                      </a>{' '}
                      (Additional $6.00 per item)
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-100 p-4 flex flex-wrap items-end justify-between gap-2 text-sm mb-6'>
                <div className=''>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>
                      Quantity Selected:
                    </span>{' '}
                    <span className='font-semibold text-base'>0 </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>Price Per Item:</span>{' '}
                    <span className='font-semibold text-base'>$139 </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>First Logo:</span>{' '}
                    <span className='font-semibold text-base'>FREE </span>
                  </div>
                  <div className='mb-2'>
                    <span className='inline-block w-40'>
                      Additional Logo(s):
                    </span>{' '}
                    <span className='font-semibold text-base'>$0.00</span>
                  </div>
                </div>
                <div className='text-base'>
                  <span className='inline-block mb-2'>Subtotal:</span>{' '}
                  <span className='font-semibold text-xl lg:text-3xl'>
                    $0.00
                  </span>
                </div>
              </div>
              <div className=''>
                <label htmlFor='' className='block mb-2'>
                  Notes :{' '}
                </label>
                <textarea
                  name=''
                  id=''
                  className='block w-full border border-gray-600 shadow-sm text-base py-2 px-4'
                  rows={10}
                ></textarea>
              </div>
            </div>
            <div className='p-6 pt-0'>
              <button
                data-modal-toggle='startorderModal'
                type='button'
                className='btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2'
              >
                Update Cart
              </button>
              <button
                data-modal-toggle='startorderModal'
                type='button'
                className='block w-full text-gray-500 hover:text-gray-700'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
