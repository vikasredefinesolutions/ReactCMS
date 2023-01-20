import { getLogoDetailsById } from '@services/logo.service';
import { useActions } from 'hooks';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CheckLogoApproved = () => {
  const { showModal } = useActions();
  const router = useRouter();
  const { logoId } = router.query;

  useEffect(() => {
    if (logoId && !_.isEmpty(logoId)) {
      getLogoDetailsById(~~logoId)
        .then((logoDetails) => { })
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

  return (
    <section className='container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5'>
      <div className='p-6'>
        <div className='manage-logo-detail text-gray-500 mb-10 last:mb-0'>
          <div className='text-2xl text-gray-800 font-bold mb-5'>Sew-out</div>
          <div className='border border-neutral-200 grid grid-cols-3 gap-x-6 rounded-md'>
            <div className='left-side-box col-span-1 p-6 pr-0'>
              <div className='relative'>
                <div className=''>
                  <img src='images/m-log-1.jpg' className='' alt='' />
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
                  <div className=''>Apr 28,2020</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>Logo size:</div>
                  <div className=''>2x2”</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>
                    Embroidery color:
                  </div>
                  <img src='images/color-img-14.jpg' className='' alt='' />
                  <img src='images/color-img-15.jpg' className='' alt='' />
                </div>
                <div className='font-semibold'>Comment:</div>
                <div className='overflow-auto max-h-screen border border-neutral-200 mb-4 rounded-md'>
                  <table className='table-auto w-full text-sm text-[#191919]'>
                    <tbody className='text-sm divide-y divide-slate-200'>
                      <tr>
                        <td className='px-2 first:pl-5 py-3 font-semibold'>
                          Admin:
                        </td>
                        <td className='px-2 first:pl-5 py-3'>
                          <div className='font-semibold'>Apr 28, 2020</div>
                          <div className='text-gray-500'>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-2 first:pl-5 py-3 font-semibold'>
                          Vipul:
                        </td>
                        <td className='px-2 first:pl-5 py-3'>
                          <div className='font-semibold'>Apr 29, 2020</div>
                          <div className='text-gray-500'>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even.
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className=''>
                  <textarea
                    rows={3}
                    className='form-input'
                    placeholder='Your feedback'
                  ></textarea>
                </div>
                <div className='flex items-center justify-center mt-4'>
                  <div className='grow'>
                    <a
                      href='javascript:void(0);'
                      className='btn btn-primary !w-full text-center'
                    >
                      Submit your feedback
                    </a>
                  </div>
                  <div className='mx-2'>OR</div>
                  <div className='grow'>
                    <a
                      href='javascript:void(0);'
                      className='btn btn-primary !w-full text-center'
                    >
                      Approve your logo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='manage-logo-detail text-gray-500 mb-10 last:mb-0'>
          <div className='text-2xl text-gray-800 font-bold mb-5'>
            Digital Logo
          </div>
          <div className='border border-neutral-200 grid grid-cols-3 gap-x-6 rounded-md'>
            <div className='left-side-box col-span-1 p-6 pr-0'>
              <div className='relative'>
                <div className=''>
                  <img src='images/m-log-2.jpg' className='' alt='' />
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
                  <div className=''>Apr 28,2020</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>Logo size:</div>
                  <div className=''>2x2”</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>
                    Embroidery color:
                  </div>
                  <img src='images/color-img-14.jpg' className='' alt='' />
                  <img src='images/color-img-15.jpg' className='' alt='' />
                </div>
                <div className='font-semibold'>Comment:</div>
                <div className='overflow-auto max-h-screen border border-neutral-200 mb-4 rounded-md'>
                  <table className='table-auto w-full text-sm text-[#191919]'>
                    <tbody className='text-sm divide-y divide-slate-200'>
                      <tr>
                        <td className='px-2 first:pl-5 py-3 font-semibold'>
                          Admin:
                        </td>
                        <td className='px-2 first:pl-5 py-3'>
                          <div className='font-semibold'>Apr 28, 2020</div>
                          <div className='text-gray-500'>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-2 first:pl-5 py-3 font-semibold'>
                          Vipul:
                        </td>
                        <td className='px-2 first:pl-5 py-3'>
                          <div className='font-semibold'>Apr 29, 2020</div>
                          <div className='text-gray-500'>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even.
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='manage-logo-detail text-gray-500 mb-10 last:mb-0'>
          <div className='text-2xl text-gray-800 font-bold mb-5'>JPEG Logo</div>
          <div className='border border-neutral-200 grid grid-cols-3 gap-x-6 rounded-md'>
            <div className='left-side-box col-span-1 p-6 pr-0'>
              <div className='relative'>
                <div className=''>
                  <img src='images/m-log-3.jpg' className='' alt='' />
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
                  <div className=''>Apr 16,2020</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>Logo size:</div>
                  <div className=''>2x2”</div>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='w-1/3 min-w-44 font-semibold'>
                    Embroidery color:
                  </div>
                  <img src='images/color-img-14.jpg' className='' alt='' />
                  <img src='images/color-img-15.jpg' className='' alt='' />
                </div>
                <div className='font-semibold'>Comment:</div>
                <div className='text-gray-500 text-sm'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckLogoApproved;
