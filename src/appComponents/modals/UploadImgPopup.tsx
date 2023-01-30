import { UploadImage } from '@services/file.service';
import { UploadLogoWithDetails } from '@services/logo.service';
import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import { Form, Formik } from 'formik';
import { useActions, useTypedSelector } from 'hooks';
import React, { useState } from 'react';

interface _props {
  onClose(): void;
  orderedCartLogoDetailId: number;
}

const UploadImgPopup: React.FC<_props> = ({
  onClose: closeHandler,
  orderedCartLogoDetailId,
}) => {
  const [choosedFile, setFileDetails] = useState<{
    name: string;
    type: string;
    previewURL: string;
    logoPathName: string | null;
  } | null>(null);
  const { showModal, setShowLoader } = useActions();
  const loggedIn_userId = useTypedSelector((state) => state.user.id);

  const fileReader = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files === null) return;
    setShowLoader(true);

    try {
      const file = {
        name: event.currentTarget.files[0].name,
        type: event.currentTarget.files[0].type,
        previewURL: URL.createObjectURL(event.currentTarget.files[0]),
        logoPathName: null,
      };

      file.logoPathName = await UploadImage({
        folderPath: config.imageFolderPath,
        files: event.currentTarget?.files[0],
      });

      setFileDetails(file);
    } catch (error) {
      showModal({
        title: 'Error',
        message: 'Something Went Wrong. Try again, later!!!',
      });
    }
    setShowLoader(false);
  };

  const uploadHandler = async (values: {
    name: string;
    description: string;
  }) => {
    if (!choosedFile || !choosedFile.logoPathName) {
      let title = 'Upload Image';
      let message = 'First, choose the image. Then, try again';
      if (!choosedFile?.logoPathName) {
        title = 'Add Logo Details';
        message = 'First, Add logo details. Then, try again';
      }

      showModal({
        title: title,
        message: message,
      });
      return;
    }

    try {
      await UploadLogoWithDetails({
        id: 0,
        customerId: loggedIn_userId!,
        logo: choosedFile.logoPathName,
        logoName: values.name,
        description: values.description,
        orderedCartLogoDetailId: orderedCartLogoDetailId,
      });

      showModal({
        title: 'Success',
        message: 'Logo Uploaded.',
      });
    } catch (error) {
      showModal({
        title: 'Error',
        message: 'Something went wrong!!!',
      });
    }

    closeHandler();
  };

  return (
    <div
      id='MsgContainer'
      className='overflow-y-auto overflow-x-hidden fixed z-20 justify-center items-center h-modal h-full inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto'>
            <div className='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white'>
              <div className='text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white'>
                Upload Logo
              </div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => closeHandler()}
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
              <Formik
                initialValues={{ name: '', description: '' }}
                onSubmit={uploadHandler}
              >
                {({ values, handleChange }) => {
                  return (
                    <Form>
                      <div className='p-6'>
                        <div className='w-full px-3 mt-4 first:mt-0'>
                          <label
                            htmlFor=''
                            className='block text-base font-medium text-gray-700'
                          >
                            Logo Name
                          </label>
                          <div className='mt-2'>
                            <input
                              type='text'
                              name='name'
                              id='name'
                              placeholder='Logo Name'
                              value={values.name}
                              autoComplete='off'
                              onChange={handleChange}
                              className='form-input'
                            />
                          </div>
                        </div>
                        <div className='w-full px-3 mt-4 first:mt-0'>
                          <label
                            htmlFor=''
                            className='block text-base font-medium text-gray-700'
                          >
                            Description
                          </label>
                          <div className='mt-2'>
                            <textarea
                              onChange={handleChange}
                              name='description'
                              autoComplete='off'
                              value={values.description}
                              id='description'
                              className='form-input'
                            />
                          </div>
                        </div>
                        <div className='w-full px-3 mt-4 first:mt-0'>
                          <label
                            htmlFor=''
                            className='block text-base font-medium text-gray-700'
                          >
                            Image
                          </label>
                          <div className='mt-2 flex flex-wrap items-center gap-2'>
                            <div className='grow'>
                              <input
                                type='file'
                                placeholder=''
                                value=''
                                className='form-input'
                                onChange={fileReader}
                                accept={'image/*'}
                              />
                            </div>
                            <div className=''>
                              <button type='submit' className='btn btn-primary'>
                                Upload
                              </button>
                            </div>
                          </div>
                          {choosedFile?.previewURL && (
                            <div className='mt-2 border border-gray-300 p-1 w-28 h-28 flex items-center justify-center'>
                              <Image
                                className='inline-block max-h-full'
                                src={choosedFile.previewURL}
                                alt={choosedFile.name}
                                width={100}
                                height={100}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>

            <button
              onClick={() => closeHandler()}
              className='btn btn-primary !w-full !py-1 text-center'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImgPopup;
