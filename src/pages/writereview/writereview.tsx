import { addReviewMessages } from 'constants/validationMessages';
import { Formik } from 'formik';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import uuid from 'react-uuid';
import { UploadImage } from 'services/file.service';
import { AddProductReview } from 'services/review.service';
import * as Yup from 'yup';

const ProductReview: NextPage = () => {
  const { setShowLoader, showModal } = useActions();
  const storeId = useTypedSelector((state) => state.store.id);
  const customerId = useTypedSelector((state) => state.user.id);
  const customerName = useTypedSelector(
    (state) => state.user.customer?.firstname,
  );
  const productName = useTypedSelector((state) => state.product.product.name);
  const productNamedeatils = useTypedSelector((state) => state.product.product);
  const selectedImage = useTypedSelector(
    (state) => state.product.selected.image,
  );

  const [files, setFilesFn] = useState<Array<{ file: File; preview: string }>>(
    [],
  );
  const [star, setStar] = useState(5);
  // const [searchParam] = useSearchParams();
  const { query, back } = useRouter();
  // const productId = searchParam.get('ProductId');
  const productId = query.ProductId;

  const validationSchema = Yup.object().shape({
    comment: Yup.string()
      .min(3, addReviewMessages.comment.min)
      .max(200, addReviewMessages.comment.max)
      .required(addReviewMessages.comment.required),
    commentHeading: Yup.string()
      .min(3, addReviewMessages.commentHeading.min)
      .max(60, addReviewMessages.commentHeading.max)
      .required(addReviewMessages.commentHeading.required),
  });

  const fileChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputFiles: FileList | null = event.target.files;
    const files = [];
    if (inputFiles) {
      for (let i = 0; i < inputFiles.length; i++) {
        const file = inputFiles[i];
        const src = URL.createObjectURL(file);
        files.push({ file, preview: src });
      }
      setFilesFn(files);
    }
  };

  const submitHandler = async (values: any) => {
    setShowLoader(true);
    const images = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i].file;
        const ext = file.name.split('.').at(-1);
        const folderPath = `temp/1/Store/${storeId}/writereview/${uuid()}.${ext}`;
        const image = await UploadImage({ folderPath, files: file });
        images.push(image);
      }
    }

    const data = await getLocation();
    const imagesA = images.map((url) => ({
      id: 0,
      rowVersion: '',
      location: `${data.city}, ${data.region}, ${data.country}, ${data.postal_code}`,
      ipAddress: data.ip_address,
      macAddress: '00-00-00-00-00-00',
      reviewId: 0,
      imageName: url,
      displayOrder: 0,
      recStatus: 'A',
    }));

    const submitObject = {
      reviewModel: {
        id: 0,
        rowVersion: '',
        location: `${data.city}, ${data.country}, ${data.postal_code}`,
        ipAddress: data.ip_address,
        macAddress: '00-00-00-00-00-00',
        productId: (productId && +productId) || 0,
        customerId: customerId || 0,
        storeId: storeId || 0,
        commentHeading: values.commentHeading,
        comment: values.comment,
        rating: star,
        helpFullCount: 0,
        notHelpFullCount: 0,
        recStatus: 'A',
        images: imagesA,
      },
    };

    AddProductReview(submitObject)
      .then(() => {
        setShowLoader(false);
        showModal({
          message: 'Review added successfully',
          title: 'Thank You',
        });
        setTimeout(() => {
          back();
        }, 1000);
      })
      .catch(() => {
        setShowLoader(false);
        showModal({
          message: 'Something went wrong. Try again, Later!!!',
          title: 'Error',
        });
      });
  };

  const getRatingText = () => {
    if (star === 1) {
      return 'I HATE IT';
    } else if (star === 2) {
      return "I DON'T LIKE IT";
    } else if (star === 3) {
      return "IT'S OK";
    } else if (star === 4) {
      return 'I LIKE IT';
    } else {
      return 'I LOVE IT';
    }
  };

  // console.log('review data for single page ', productNamedeatils);
  // console.log('we are getting image ', selectedImage);

  return (
    <section className='container mx-auto my-6 border border-gray-300'>
      <div className='p-4'>
        <div className='flex flex-wrap -mx-3 gap-y-6'>
          <div className='w-full md:w-4/12 lg:w-4/12 px-3'>
            <div className=''>
              <img src={selectedImage.imageUrl} title='' alt='' />
            </div>
          </div>
          <div className='w-full md:w-8/12 lg:w-5/12 px-3'>
            <div className=''>
              <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title'>
                <a className=''>{productName}</a>
              </div>
              <div className='flex items-center gap-2 mt-4'>
                <div className=''>POST PUBLICLY AS:</div>
                <div className=''>{customerName}</div>
                <div className=''>|</div>
                <div className=''>
                  <a className=''>CLEAR</a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-full lg:w-3/12 px-3'>
            <div className='flex items-center justify-end'>
              {Array(5)
                .fill('')
                .map((_, index) => {
                  return (
                    <svg
                      key={index}
                      className={`h-5 w-5 flex-shrink-0 text-${
                        index < star ? 'primary-500' : 'gray-300'
                      }`}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                      onClick={() => setStar(index + 1)}
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                  );
                })}
              <p>{getRatingText()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='gird grid-cols-1 lg:flex lg:items-center gap-6 lg:py-8 lg:px-12 px-4 py-4 lg:my-5'>
        <div className='w-full mx-auto max-w-7xl'>
          <Formik
            onSubmit={submitHandler}
            validationSchema={validationSchema}
            initialValues={{ comment: '', commentHeading: '' }}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleBlur,
              handleChange,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap -mx-3 gap-y-6'>
                  <div className='w-full px-3'>
                    <label
                      htmlFor='First Name'
                      className='block text-base font-medium text-gray-700 hidden'
                    >
                      Description For your review
                    </label>
                    <div className='mt-2'>
                      <textarea
                        placeholder='Description For your review'
                        className='form-input'
                        name='comment'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comment}
                      />

                      <div className='text-red-500 text-s mt-1'>
                        {touched.comment && errors.comment}
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-3'>
                    <label
                      htmlFor='First Name'
                      className='block text-base font-medium text-gray-700 hidden'
                    >
                      Headline For your review
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='Headline For your review'
                        className='form-input'
                        name='commentHeading'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.commentHeading}
                      />
                      <div className='text-red-500 text-s mt-1'>
                        {touched.commentHeading && errors.commentHeading}
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-3'>
                    <label
                      htmlFor='file_upload'
                      className='block text-base font-medium text-gray-700 form-input'
                    >
                      <span className='block text-base font-medium text-gray-700 mb-2 hidden'>
                        Select files to upload
                      </span>
                      <div className='w-full flex flex-wrap h-full items-center bg-center bg-no-repeat bg-contain border  border-dashed my-3 mx-2'>
                        <div className='w-full text-center justify-center inset-0'>
                          <div className='text-sm lg:text-2xl text-gray-400 '>
                            <p className='pt-10 lg:pt-20'>
                              <span>Drag and Drop files here</span>
                            </p>
                            <p className='pb-10 lg:pb-20'>
                              <span>(or click to select files)</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='file'
                        placeholder='Select files to upload'
                        value=''
                        className='hidden'
                        multiple
                        onChange={fileChangeHandler}
                        id='file_upload'
                      />
                    </div>
                    <div className='flex flex-wrap'>
                      {files.map((file, index) => (
                        <div key={index} className='h-24 w-24 m-2'>
                          <img src={file.preview} alt='preview' />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='w-full lg:w-full px-3'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
