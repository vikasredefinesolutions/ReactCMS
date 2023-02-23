import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const FeaturedSkeleton = () => {
  return (
    <>
      <SkeletonTheme>
        <p className='p-1 pb-2'>
          <Skeleton className='w-100' style={{ height: '300px' }} />
          <Skeleton className='w-100' style={{ height: '60px' }} />
          <Skeleton className='w-100' style={{ height: '35px' }} />
          <Skeleton className='w-100' style={{ height: '25px' }} />
        </p>
      </SkeletonTheme>
    </>
  );
};

export default FeaturedSkeleton;
