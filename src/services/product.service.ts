import { BrandFilter, FilterApiRequest } from '@type/productList.type';
import { SendAsyncV2 } from '@utils/axios.util';

export const FetchFiltersJsonByBrand = async (
    filterRequest: FilterApiRequest,
  ) => {
    const url = `/StoreProductFilter/GetFilterByBrand.json`;
    const res = await SendAsyncV2<BrandFilter>({
      url: url,
      method: 'POST',
      data: filterRequest,
    });
  
    return res.data;
  };