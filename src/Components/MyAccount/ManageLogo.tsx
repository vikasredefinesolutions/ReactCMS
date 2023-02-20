import { getLogoDetailsList } from '@services/logo.service';
import { LogoList } from '@type/APIs/logo.res';
import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import _ from 'lodash';
// import { logoList } from 'mock/logo.mock';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ManageLogo = () => {
  const storeId = useTypedSelector((state) => state.store.id);
  const customerId = useTypedSelector((state) => state.user.id);
  const [logoList, setLogoList] = useState<LogoList | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 25;

  const fetchLogoDetails = async () => {
    try {
      if (storeId && customerId) {
        const filter = {
          args: {
            pageIndex: currentPage,
            pageSize,
            pagingStrategy: 0,
            sortingOptions: [],
            filteringOptions: [],
          },
          customerId: customerId,
          storeId: storeId,
        };

        const logoList = await getLogoDetailsList(filter).then((res) => {
          if (res) {
            setLogoList(res);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (storeId && customerId) {
      fetchLogoDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeId, customerId, currentPage]);

  return (
    <section className='container mx-auto mt-5 mb-5'>
      <div className='bg-white mt-4 mb-4'>
        <div className='overflow-auto max-h-screen border border-neutral-200'>
          <table className='table-auto w-full text-sm text-[#191919] font-semibold'>
            <thead className='text-sm font-bold uppercase text-[#b3b3b3] border-b border-neutral-200'>
              <tr>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-32 max-w-sm flex items-center'>
                    <span>Logo</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-48 flex items-center'>
                    <span>Logo Name</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-32 max-w-sm flex items-center'>
                    <span>Logo Number</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-32 max-w-sm flex items-center'>
                    <span>Logo Size</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-36 max-w-sm flex items-center'>
                    <span>Product Type</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-36 max-w-sm flex items-center'>
                    <span>Logo Location</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-32 max-w-sm flex items-center'>
                    <span>Upload Date</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-36 max-w-sm flex items-center'>
                    <span>Approved Date</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-32 max-w-sm flex items-center'>
                    <span>Status</span>
                  </div>
                </th>
                <th className='px-2 first:pl-5 py-4'>
                  <div className='font-semibold text-left w-10 flex items-center'></div>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              {logoList &&
                logoList.items.map((logo) => (
                  <tr key={logo.logo} className=''>
                    <td className='px-2 first:pl-5 py-3 relative'>
                      <div className='w-24 h-24'>
                        <Image src={logo.logo} alt='' className='' />
                      </div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className=''>{logo.logoName}</div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className=''>{logo.logoNumber}</div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className=''>{logo.logoSize}</div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className='w-32 h-32'>{logo.productType}</div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className='w-32 h-32'>
                        <Image
                          src={logo.logoLocationImage}
                          alt=''
                          className=''
                        />
                      </div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      <div className=''>
                        {moment(logo.uploadDate).format('MMMM D, YYYY')}
                      </div>
                      <div className='text-[#707070] text-xs font-normal'>
                        {moment(logo.uploadDate).format('h:s A')}
                      </div>
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      {_.isEmpty(logo.approvedDate) ? (
                        <div className='text-center'>-</div>
                      ) : (
                        <>
                          <div className=''>
                            {moment(logo.approvedDate).format('MMMM D, YYYY')}
                          </div>
                          <div className='text-[#707070] text-xs font-normal'>
                            {moment(logo.approvedDate).format('h:s A')}
                          </div>
                        </>
                      )}
                    </td>
                    <td className='px-2 first:pl-5 py-3'>
                      {_.isEmpty(logo.approvedDate) ? (
                        <Link
                          href={`/ManageLogo/CheckLogoApproved?logoId=${logo.logoId}`}
                          title=''
                          className='text-indigo-500'
                        >
                          Waiting for Approval
                        </Link>
                      ) : (
                        <div className='text-xs inline-block font-medium border border-green-300 bg-green-100 text-green-600 rounded-md text-center px-2.5 py-1 w-28'>
                          Approved
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default ManageLogo;
