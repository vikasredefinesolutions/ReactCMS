import Image from 'next/image';

const CateBand = () => {
  return (
    <>
      <section className='mainsection pb-8'>
        <div className='container mx-auto text-center'>
          <div className='bg-[#061b2c] text-white uppercase md:py-5 mb-5'>
            <div className='max-w-2xl mx-auto tracking-wider text-xs'>
              <div className='flex flex-wrap -mx-3'>
                <div className='w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0'>
                  <div className='flex flex-wrap justify-center items-center gap-4'>
                    <Image
                      src='/images/free-shipping-new.png'
                      width='30px'
                      height='30px'
                      alt=''
                    />
                    <span className='inline-block text-left'>
                      <span className='block font-extrabold'>
                        Free Shipping
                      </span>{' '}
                      <span>To One Location</span>
                    </span>
                  </div>
                </div>
                <div className='w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0'>
                  <div className='flex flex-wrap justify-center items-center gap-4'>
                    <Image
                      src='/images/logo-free.png'
                      width='30px'
                      height='30px'
                      alt=''
                    />
                    <span className='inline-block text-left'>
                      <span className='block font-extrabold'>
                        1st Logo Free
                      </span>{' '}
                      <span>With Order</span>
                    </span>
                  </div>
                </div>
                <div className='w-full md:w-1/3 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0'>
                  <div className='flex flex-wrap justify-center items-center gap-4'>
                    <Image
                      src='/images/guarantee.png'
                      width='30px'
                      height='30px'
                      alt=''
                    />
                    <span className='inline-block text-left'>
                      <span className='block font-extrabold'>Satisfaction</span>{' '}
                      <span>Guarantee</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CateBand;
