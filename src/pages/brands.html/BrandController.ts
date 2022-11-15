import { useEffect, useState } from 'react';
import { removeDuplicates } from '../../helpers/common.helper';
import { useTypedSelector } from '../../hooks';
import { fetchBrands } from '../../services/brand.service';

const BrandController = () => {
  const [filteredAlphabets, setAlphabets] = useState<string[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabets = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const [currentTab, setCurrentTab] = useState(0);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const storeId = useTypedSelector((state) => state.store.id);

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
      default:
        break;
    }
  };

  useEffect(() => {
    fetchBrands((storeId || 0).toString()).then((res) => {
      const alphabets: string[] = [];
      const sorted = res.data.sort(function (
        a: { brandName: string },
        b: { brandName: string },
      ) {
        alphabets.push(a.brandName[0].toLowerCase());
        if (a.brandName > b.brandName) {
          return 1;
        } else if (a.brandName < b.brandName) {
          return -1;
        }
        return 0;
      });
      const nonDuplicates = removeDuplicates(sorted);
      const filtered_alphabets = alphabets.filter(
        (item, index) => alphabets.indexOf(item) === index,
      );

      setAlphabets(filtered_alphabets);
      setBrands(nonDuplicates);
    });
  }, []);

  return {
    filteredAlphabets,
    brands,
    alphabets,
    currentTab,
    storeLayout,
    setCurrentTab,
    getTabColor,
  };
};

export default BrandController;
