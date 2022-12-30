import { useActions, useTypedSelector } from 'hooks';
import { useState } from 'react';

const BrandController = () => {
  const { setShowLoader } = useActions();
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabets = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const [currentTab, setCurrentTab] = useState(0);
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const getTabColor = () => {
    switch (currentTab) {
      case 0:
        return '#FFA400';
      case 1:
        return '#00ce7c';
      case 2:
        return '#00b2e3';
      case 3:
        return '#003a70';
      case 4:
        return '#0a2240';
    }
    return '';
  };

  return {
    alphabets,
    currentTab,
    storeLayout,
    setCurrentTab,
    getTabColor,
    setShowLoader,
  };
};

export default BrandController;
