import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _Props {
  modal?: 'NO';
  // eslint-disable-next-line no-unused-vars
  modalHandler(val: null | _modals): void;
}
const SizeChart: React.FC<
  _Props & {
    storeCode: string;
  }
> = ({ modalHandler, modal, storeCode }) => {
  const sizeChart = useTypedSelector(
    (state) => state.product.product.sizeChart,
  );

  if (modal === 'NO' && storeCode === _Store.type3) {
    return (
      <section className='mainsection pt-10'>
        <div className='container mx-auto'>
          <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4'>
            {sizeChart?.name}
          </div>
          <div className=''>
            <p>FIND YOUR SIZE</p>
            <div className='overflow-x-auto max-h-screen bg-gray-100 p-5'>
              <table
                cellPadding={0}
                cellSpacing={0}
                className='table-auto w-full text-sm text-center border border-neutral-200'
              >
                <thead className='text-sm bg-gray-100 font-semibold uppercase border-b border-neutral-200'>
                  <tr className='divide-x divide-slate-200'>
                    <th className='px-2 py-4'>&nbsp;</th>
                    {sizeChart?.measurements.map((length, index) => {
                      return (
                        <th key={index} className='px-2 py-4'>
                          <div className=''>{length}</div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {sizeChart?.sizeChartRange.map((range, index) => (
                    <tr key={index} className='divide-x divide-slate-200'>
                      <td className='px-2 py-3 text-left'>{range}</td>
                      {sizeChart?.measurements.map((length, index) => (
                        <td key={index} className='px-2 py-3'>
                          <div className=''>
                            {sizeChart.sizeChartView[`${length}${range}`]}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div
        id='sizechartModal'
        className='overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
            <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
                <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                  {sizeChart?.name}
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  onClick={() => modalHandler(null)}
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
              <div className=''>
                <div className='overflow-x-auto max-h-screen'>
                  <table
                    cellPadding='0'
                    cellSpacing='0'
                    className='table-auto w-full text-sm text-center text-[#191919]'
                  >
                    <thead className='text-sm bg-gray-100 font-semibold uppercase border-b border-neutral-200'>
                      <tr className='divide-x divide-slate-200'>
                        <th className='px-2 py-4'>&nbsp;</th>
                        {sizeChart?.measurements.map((length, index) => (
                          <th key={index} className='px-2 py-4'>
                            <div className=''>{length}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      {sizeChart?.sizeChartRange.map((range, index) => (
                        <tr key={index} className='divide-x divide-slate-200'>
                          <td className='px-2 py-3 text-left'>{range}</td>
                          {sizeChart?.measurements.map((length, index) => (
                            <td key={index} className='px-2 py-3'>
                              <div className=''>
                                {sizeChart.sizeChartView[`${length}${range}`]}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button data-modal-toggle="sizechartModal" type="button" className="p-2 px-3 bg-white border border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                    <button data-modal-toggle="sizechartModal" type="button" className="p-2 px-3 bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
                </div> --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div
        id='FitSizeModal'
        aria-hidden='true'
        className=' overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white'>
                <div className='text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white'>
                  {sizeChart?.name}
                </div>
                <div className='flex items-center gap-x-2'>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    onClick={() => modalHandler(null)}
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
              </div>
              <div className='p-6'>
                <div className='table-responsive'>
                  <table className='table border border-gray-300 w-full'>
                    <tbody className='divide-y divide-gray-300'>
                      <tr className='divide-x divide-gray-300 bg-gray-100'>
                        <td className='p-2'>SIZE</td>
                        {sizeChart?.measurements.map((length, index) => (
                          <td key={index} className='p-2'>
                            {length}
                          </td>
                        ))}
                      </tr>
                      {sizeChart?.sizeChartRange.map((range, index) => (
                        <tr key={index} className='divide-x divide-gray-300'>
                          <td className='p-2'>{range}</td>
                          {sizeChart.measurements.map((length, index) => (
                            <td key={index} className='p-2'>
                              {sizeChart.sizeChartView[`${length}${range}`]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16 ||
    storeCode === _Store.type23 ||
    storeCode === _Store.type24 ||
    storeCode === _Store.type26 ||
    storeCode === _Store.type12
  ) {
    return (
      <div
        onClick={() => modalHandler(null)}
        id='sizechartModal'
        className='overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
            <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
                <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                  {sizeChart?.name}
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  onClick={() => modalHandler(null)}
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
              <div className=''>
                <div className='overflow-x-auto max-h-screen'>
                  <table
                    cellPadding='0'
                    cellSpacing='0'
                    className='table-auto w-full text-sm text-center text-[#191919]'
                  >
                    <thead className='text-sm bg-gray-100 font-semibold uppercase border-b border-neutral-200'>
                      <tr className='divide-x divide-slate-200'>
                        <th className='px-2 py-4'>&nbsp;</th>
                        {sizeChart?.sizeChartRange.map((size) => (
                          <th className='px-2 py-4' key={size}>
                            <div className=''>{size}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      {sizeChart?.measurements.map((piece) => (
                        <tr className='divide-x divide-slate-200' key={piece}>
                          <td className='px-2 py-3 text-left'>{piece}</td>
                          {sizeChart.sizeChartRange.map((length, index) => (
                            <td className='px-2 py-3' key={length}>
                              <div className=''>
                                {sizeChart.sizeChartView[`${piece}${length}`]}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    storeCode === _Store.type22 ||
    storeCode === _Store.type5 ||
    storeCode === _Store.type8 ||
    storeCode === _Store.type10
  ) {
    return (
      <div
        id='sizechartModal'
        className='overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
            <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
                <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                  {sizeChart?.name}
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  onClick={() => modalHandler(null)}
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
              <div className=''>
                <div className='overflow-x-auto max-h-screen'>
                  <table
                    cellPadding='0'
                    cellSpacing='0'
                    className='table-auto w-full text-sm text-center text-[#191919]'
                  >
                    <thead className='text-sm bg-gray-100 font-semibold uppercase border-b border-neutral-200'>
                      <tr className='divide-x divide-slate-200'>
                        <th className='px-2 py-4'>&nbsp;</th>
                        {sizeChart?.measurements.map((length, index) => (
                          <th key={index} className='px-2 py-4'>
                            <div className=''>{length}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      {sizeChart?.sizeChartRange.map((range, index) => (
                        <tr key={index} className='divide-x divide-slate-200'>
                          <td className='px-2 py-3 text-left'>{range}</td>
                          {sizeChart?.measurements.map((length, index) => (
                            <td key={index} className='px-2 py-3'>
                              <div className=''>
                                {sizeChart.sizeChartView[`${length}${range}`]}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button data-modal-toggle="sizechartModal" type="button" className="p-2 px-3 bg-white border border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                    <button data-modal-toggle="sizechartModal" type="button" className="p-2 px-3 bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
                </div> --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default SizeChart;
