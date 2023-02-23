import { FetchBrands } from '@services/brand.service';
import { removeDuplicates } from 'helpers/common.helper';
import { _globalStore } from 'store.global';

export default async function getServerSideProps() {
  const { storeId } = _globalStore;

  const brands = await FetchBrands(storeId!);
  const alphabets: string[] = [];
  const sorted = brands.data.sort(
    (a: { brandName: string }, b: { brandName: string }) => {
      alphabets.push(a.brandName[0].toLowerCase());
      if (a.brandName > b.brandName) {
        return 1;
      } else if (a.brandName < b.brandName) {
        return -1;
      }
      return 0;
    },
  );
  const nonDuplicates = removeDuplicates(sorted);
  const filtered_alphabets = alphabets.filter(
    (item, index) => alphabets.indexOf(item) === index,
  );

  return {
    props: {
      brands: nonDuplicates,
      alphabets: filtered_alphabets,
    },
  };
}
