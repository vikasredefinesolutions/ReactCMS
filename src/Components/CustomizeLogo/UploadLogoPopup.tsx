import React, { useState } from 'react';

interface _props {
  id: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  logoToShow: (val: { name: string; type: string; previewURL: string }) => void;
}

const UploadLogoPopup: React.FC<_props> = ({
  id,
  setOpenModal,
  logoToShow,
}) => {
  const [fileToUpload, setFileToUpload] = useState<{
    name: string;
    type: string;
    previewURL: string;
  } | null>(null);

  const fileReader = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files === null) return;

    const file = {
      name: event.currentTarget.files[0].name,
      type: event.currentTarget.files[0].type,
      previewURL: URL.createObjectURL(event.currentTarget.files[0]),
    };

    setFileToUpload(file);
  };

  const continueHandler = () => {
    if (fileToUpload === null) {
      return;
    }
    logoToShow(fileToUpload);
    setOpenModal(false);
  };

  return (
    <div
      id="addnewlogoModal"
      className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-3xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white">
              <div className="text-xl font-semibold text-gray-900 lg:text-2xl">
                Add a new logo
              </div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setOpenModal(false)}
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
            <div className="p-6">
              <div className="">
                <p className="mb-2.5">
                  Accepted formats: .JPG, .GIF, .TIF, .PNG, .BMP,.TIF,.AI and
                  .EPS. Must be 10MB or less.
                </p>
                <p className="mb-2.5">
                  Please note: The new logo file is a representation of your
                  logo and can be utilized while shopping. Our design team will
                  process the file and email you a sample when it is complete.
                  You will not be charged for the logo setup until you approve
                  the sample.
                </p>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/3">
                  <label className="" htmlFor={id}>
                    <input
                      type="file"
                      name={id}
                      id={id}
                      // value={undefined}
                      className="sr-only"
                      onChange={fileReader}
                      accept={'image/*'}
                    />
                    {!fileToUpload?.previewURL && (
                      <div className="border border-gray-200 bg-gray-50 w-full h-60">
                        Choose a logo file
                      </div>
                    )}
                    {fileToUpload?.previewURL && (
                      <img
                        src={fileToUpload?.previewURL}
                        alt=""
                        className="img-responsive"
                      />
                    )}
                  </label>
                  <div className="mt-3">
                    <button
                      onClick={continueHandler}
                      className="btn btn-primary w-full text-center"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
                <div className="w-full sm:w-2/3">
                  <div className="bg-gray-100 sm:ml-4 p-3">
                    <div className="arrow"></div>
                    <strong>Add Images</strong>
                    <p>
                      The logo setup process. JPG, GIF, PNG, BMP, TIF, AI and
                      EPS. Must be 10 MB or less.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button data-modal-toggle="addnewlogoModal" type="button" className="p-2 px-3 bg-white border border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                    <button data-modal-toggle="addnewlogoModal" type="button" className="p-2 px-3 bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
                </div> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadLogoPopup;
