import { ClearBrandCache, ClearCategoryCache } from '@services/cache.service';
import { useTypedSelector } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ClearCache: NextPage = () => {
  const storeId = useTypedSelector((state) => state.store.id);
  const { query, push: routerPush } = useRouter();
  const { brand_id, category_id } = query;
  const [status, setStatus] = useState(0);
  const [count, setCount] = useState<null | number>(null);

  useEffect(() => {
    if (storeId) {
      (async () => {
        setStatus(1);
        if (brand_id) {
          await ClearBrandCache({ storeid: storeId, brandid: +brand_id });
        }
        if (category_id) {
          await ClearCategoryCache({
            storeid: storeId,
            categoryid: +category_id,
          });
        }
        setCount(5);
        setStatus(2);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeId]);

  useEffect(() => {
    if (count === 0) {
      setCount(null);
      routerPush('/');
    }
    if (!count) return;

    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className='text-center p-16'>
      {status !== 0 ? (
        <>
          <p>
            {status === 1 ? 'Please Wait! Clearing Cache...' : 'Cache Cleared'}
          </p>
          {status === 2 && <p>You will redirected in ({count})s.</p>}
        </>
      ) : (
        <p>No Category or Brand Id Provided in Params</p>
      )}
    </div>
  );
};

export default ClearCache;
