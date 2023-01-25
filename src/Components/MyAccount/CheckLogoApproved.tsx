import { getLogoDetailsById } from '@services/logo.service';
import { LogoDetails } from '@type/APIs/logo.res';
import Image from 'appComponents/reUsable/Image';
import { Form, Formik } from 'formik';
import { useActions } from 'hooks';
import _ from 'lodash';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const CheckLogoApproved = () => {
  const { showModal } = useActions();
  const router = useRouter();
  const { logoId } = router.query;
  const [logoDetails, setLogoDetails] = useState<null | LogoDetails>(null)

  useEffect(() => {
    if (logoId && !_.isEmpty(logoId)) {
      getLogoDetailsById(~~logoId)
        .then((logoDetails) => { setLogoDetails(logoDetails); })
        .catch((error) => {
          showModal({
            message: 'Something went Wrong. Please try again!',
            title: 'Try Again',
          });
          router.push('/ManageLogo/ManageLogo');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoId]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('')
  });

  return (
    <section className='container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5'>
      <div className='p-6'>
        {
          logoDetails && logoDetails.map((res, index) => (
            <div key={index} className='manage-logo-detail text-gray-500 mb-10 last:mb-0'>
              <div className='text-2xl text-gray-800 font-bold mb-5'>{res.name}</div>
              <div className='border border-neutral-200 grid grid-cols-3 gap-x-6 rounded-md'>
                <div className='left-side-box col-span-1 p-6 pr-0'>
                  <div className='relative'>
                    <div className=''>
                      <Image src={res.imageUrl} className='' alt='' />
                    </div>
                  </div>
                </div>
                <div className='col-span-2 bg-gray-50 p-6 rounded-r-md text-sm'>
                  <div className=''>
                    <div className='flex items-center justify-between gap-2 mb-3'>
                      <div className='w-1/3 min-w-44 font-bold'>
                        Boston University
                      </div>
                      <div className=''></div>
                    </div>
                    <div className='flex items-center gap-2 mb-1'>
                      <div className='w-1/3 min-w-44 font-semibold'>
                        Logo uploaded on:
                      </div>
                      <div className=''>{moment(res.logoDate).format('MMM DD, YYYY')}</div>
                    </div>
                    <div className='flex items-center gap-2 mb-1'>
                      <div className='w-1/3 min-w-44 font-semibold'>Logo size:</div>
                      <div className=''>{res.logoSize}</div>
                    </div>
                    <div className='flex items-center gap-2 mb-1'>
                      <div className='w-1/3 min-w-44 font-semibold'>
                        Embroidery color:
                      </div>
                      {
                        res.embroideryColor && res.embroideryColor.split(',').map(color => (
                          <div key={'color'} className={`w-8 h-8 border-2 hover:border-secondary p-0.5`}
                            style={{
                              background: color,
                            }}></div>
                        ))
                      }
                    </div>
                    <div className='font-semibold'>Comment:</div>
                    {
                      res.isjpeglogo ? <>
                        <div className="text-gray-500 text-sm">{res.comments.length > 0 ? res.comments[0].message : null}</div>
                      </> : <>
                        <div className='overflow-auto max-h-screen border border-neutral-200 mb-4 rounded-md'>
                          <table className='table-auto w-full text-sm text-[#191919]'>
                            <tbody className='text-sm divide-y divide-slate-200'>
                              {
                                res.comments.map(comment => (
                                  <tr key={comment.id}>
                                    <td className='px-2 first:pl-5 py-3 font-semibold'>
                                      {comment.senderName}:
                                    </td>
                                    <td className='px-2 first:pl-5 py-3'>
                                      <div className='font-semibold'>{moment(comment.date).format('MMM DD, YYYY')}</div>
                                      <div className='text-gray-500'>{comment.message}
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        </div>
                        {
                          !res.isApproved && <>
                            <Formik initialValues={{ comment: '' }} onSubmit={() => { }} validationSchema={validationSchema}>
                              {({ handleChange, handleBlur, errors }) => (
                                <Form>
                                  <div className=''>
                                    <textarea
                                      rows={3}
                                      className='form-input'
                                      placeholder='Your feedback'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    ></textarea>
                                    <p className='error'>{errors.comment}</p>
                                  </div>
                                  <div className='flex items-center justify-center mt-4'>
                                    <div className='grow'>
                                      <button
                                        className='btn btn-primary !w-full text-center'
                                        type='submit'
                                      >
                                        Submit your feedback
                                      </button>
                                    </div>
                                    <div className='mx-2'>OR</div>
                                    <div className='grow'>
                                      <button className='btn btn-primary !w-full text-center' onClick={() => { }}>
                                        Approve your logo
                                      </button>
                                    </div>
                                  </div>
                                </Form>
                              )}
                            </Formik>
                          </>
                        }
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section >
  );
};

export default CheckLogoApproved;
