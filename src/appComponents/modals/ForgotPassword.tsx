const ForgotPassword = () => {
  return (
    <div
      id="forgetpasswordModal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative w-full max-w-xl">
          <div className="relative bg-white rounded-lg shadow max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Change Shipping Address
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="forgetpasswordModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap justify-start -mx-4">
                <div className="w-full p-4">
                  <div className="text-lg text-center mb-5">
                    Please check your email.
                  </div>
                  <div className="text-base text-center">
                    An email has been sent to
                    <a href="mailto:abc@abc.com" className="text-anchor">
                      abc@abc.com
                    </a>
                    with a link to reset your password. It may take a few
                    minutes to arrive. If you don't see it in your inbox, please
                    check your spam folder.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="forgetpasswordModal"
                type="button"
                className="btn btn-outline-primary"
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

export default ForgotPassword;
