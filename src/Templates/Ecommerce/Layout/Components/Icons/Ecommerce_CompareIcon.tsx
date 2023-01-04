import { __LocalStorage } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';

const CompareIcon: React.FC = () => {
  const [skus, setSkus] = useState([]);
  const router = useRouter();

  const comparePageURL = () => {
    if (skus.length > 0) {
      return `${paths.PRODUCT_COMPARE}?SKU=${skus.toString()}`;
    }
    return '';
  };

  const goToComparePage = () => {
    if (skus.length > 0) {
      const URL = comparePageURL();
      router.push(URL);
      return;
    }
  };

  const updateSkuCount = () => {
    if (localStorage) {
      setTimeout(() => {
        const skuString = localStorage.getItem(__LocalStorage.compareProducts);
        const _skus = skuString ? JSON.parse(skuString) : [];
        setSkus(() => _skus);
      }, 200);
    }
  };

  useEffect(() => {
    updateSkuCount();
    setTimeout(() => {
      document.addEventListener('itemInserted', updateSkuCount, false);
      document.addEventListener('itemRemoved', updateSkuCount, false);
    }, 1000);
    return document.removeEventListener('itemInserted', updateSkuCount, false);
  }, []);

  return (
    <div className="flex">
      <button
        onClick={() => goToComparePage()}
        className="text-primary hover:text-anchor-hover relative"
      >
        <span className="sr-only">Compare</span>
        <i className="fa-solid fa-shuffle text-xl"></i>
        <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">
          {skus.length}
        </span>
      </button>
    </div>
  );
};

export default CompareIcon;
