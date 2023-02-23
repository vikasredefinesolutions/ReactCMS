import React from 'react';

export const SC_NamePersonalize_withLogo: React.FC = () => {
  return (
    <div
      id='NamePersonalizeModal'
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen hidden'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative w-full max-w-2xl'>
          <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
            <div className='flex justify-between items-start p-4 rounded-t border-b'>
              <div className='text-xl font-semibold text-gray-900'>
                Easy Script
              </div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                data-modal-toggle='NamePersonalizeModal'
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
              <div className=''>
                <img src='images/script-l.jpg' alt='' />
              </div>
            </div>
            {/* <!-- <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200">
                      <button data-modal-toggle="NamePersonalizeModal" type="button" className="btn btn-outline-primary">Cancel</button>
                      <button data-modal-toggle="NamePersonalizeModal" type="button" className="btn btn-primary">Save</button>
                  </div> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Have no NamePersonalize in BbcProd - BCorp
