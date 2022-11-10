const QuoteRequestPopup = () => {
  return (
    <div
      id="QuoteRequestModal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
              <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                Contact us
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="QuoteRequestModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-1 pt-4 first:pt-0 font-semibold">
                <div className="">Product Name : </div>
                <div className="">Patagonia Men's Better Sweater Jacket</div>
              </div>
              <div className="flex flex-wrap gap-1 pt-4 first:pt-0 font-semibold">
                <div className="">Color : </div>
                <div className="">Stonewash</div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  Name <span className="text-rose-500">*</span>{' '}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder="Name"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id=""
                    name=""
                    placeholder="Email Address"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  School / Organization <span className="text-rose-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder="School / Organization"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  Sport <span className="text-rose-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder="Sport"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder="Phone Number"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
              <div className="pt-4 first:pt-0">
                <label
                  htmlFor=""
                  className="block text-base font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <div className="mt-1">
                  <textarea
                    className="form-input"
                    rows={3}
                    placeholder="Additional Information"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="QuoteRequestModal"
                type="button"
                className="btn btn-primary"
              >
                Cancel
              </button>
              <button
                data-modal-toggle="QuoteRequestModal"
                type="button"
                className="btn btn-secondary"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestPopup;
