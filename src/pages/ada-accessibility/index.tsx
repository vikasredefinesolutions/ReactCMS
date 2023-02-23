import RequestConsultationForm from 'Components/RequestConsultation/RequestConsultationForm';
import { useTypedSelector } from 'hooks';
import { adaCorporateGear } from 'mock/store.mock';
import Link from 'next/link';

const AdaAccessibility = () => {
  const store = useTypedSelector((state) => {
    return state;
  });

  return (
    <>
      <section className=''>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-3 py-3'>
            <div className='w-full lg:w-2/3 px-3'>
              <div className='h-full bg-gray-100 p-16'>
                <div className=''>
                  <div className='top-img'>
                    <img
                      src='	https://www.corporategear.com/images/ada.png'
                      alt='Our Commitment to Accessibility'
                      className='mb-5'
                    />
                  </div>
                  <div>
                    <h1 className='text-5xl font-bold mb-3'>
                      {adaCorporateGear.header}
                    </h1>
                  </div>

                  <div className='description mb-3'>
                    <div className='text-base text-left pb-2'>
                      {adaCorporateGear.para1}
                    </div>

                    <div className='text-base text-left'>
                      {adaCorporateGear.para2}
                    </div>
                  </div>
                </div>

                <div className='mt-20'>
                  <div className='text-xl test-left font-bold pb-2'>
                    {adaCorporateGear.contact_info}
                  </div>

                  <div className='pb-2'>
                    <Link href=''>
                      <strong>{adaCorporateGear.phone_contact}</strong>
                    </Link>
                  </div>

                  <div className='pb-2'>
                    <Link href=''>
                      <strong>{adaCorporateGear.email_contact}</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/3 px-3'>
              <div className='h-full bg-gray-100 p-3'>
                <RequestConsultationForm productId={0} innerHeading={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdaAccessibility;
