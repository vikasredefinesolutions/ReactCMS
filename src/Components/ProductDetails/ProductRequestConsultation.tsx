import React from 'react';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths.constant';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';

const ProductRequestConsultation: React.FC = () => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type1) {
    return (
      <div className="w-full md:w-1/3 mt-2 md:text-right text-sm font-semibold text-indigo-500">
        <button
          onClick={() => router.push(paths.REQUEST_CONSULTATION)}
          className="text-indigo-500 underline"
        >
          Request Consultation and Proof
        </button>
        &gt;
      </div>
    );
  }

  return <></>;
};

export default ProductRequestConsultation;