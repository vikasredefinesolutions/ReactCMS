import { FilterType, ProductList } from '@type/productList.type';
import { useEffect, useState } from 'react';

import { perPageCount } from '@constants/product.constant';
import { AddRemoveToCompare, getSkuList } from 'helpers/compare.helper';
import { useActions } from 'hooks';
import { useRouter } from 'next/router';

export type productListPageData = { product: ProductList; filters: FilterType };

const ProductListController = (
  data: productListPageData,
  slug: string,
  checkedFilters: any,
  brandId: number,
) => {
  const { setShowLoader } = useActions();
  // const location = useLocation();
  const Router = useRouter();
  const [allProduct, setAllProduct] = useState<ProductList | []>([]);

  const [currentCount, setCurrentCount] = useState(0);
  const [filterOption, setFilterOption] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);
  const [filters, setFilters] = useState<FilterType>([]);
  const [skuList, setSkuList] = useState<string[]>([]);
  const getListingWithPagination = (
    data: ProductList,
    pageCount: number = perPageCount,
  ) => {
    if (data) {
      return data.slice(0, pageCount);
    }
    return [];
  };
  const [product, setProduct] = useState<ProductList>([]);

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [productView, setProductView] = useState('grid');
  const [showFilter, setShowFilter] = useState(false);

  function removeDuplicates(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  useEffect(() => {
    if (data && data.product) {
      setAllProduct(data.product);
      setCurrentCount(perPageCount);
      setProduct(getListingWithPagination(data.product, perPageCount));
      setFilters(data.filters);
      setFilterOption(checkedFilters);
    }
  }, [data.product, slug]);

  useEffect(() => {
    if (!allProduct) {
      setShowLoader(true);
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProduct]);

  useEffect(() => {
    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, checkedFilters]);

  useEffect(() => {
    if (localStorage) {
      setSkuList(getSkuList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const compareCheckBoxHandler = (sku: string) => {
    if (localStorage) {
      AddRemoveToCompare(sku);
      setSkuList(getSkuList());
    }
  };

  const updateFilter = (
    filterOption: Array<{
      name: string;
      value: string;
    }>,
  ) => {
    setShowSortMenu(false);
    const nameArray = removeDuplicates(filterOption.map((res) => res.name));
    const valueArray: string[] = [];
    nameArray.forEach((name) => {
      const filteredValue = filterOption.filter(
        (filter) => filter.name === name,
      );
      const filter = filteredValue.map((res) => res.value).join('~');
      valueArray.push(filter);
    });

    if (nameArray.length > 0 && valueArray.length > 0) {
      const url = `/${nameArray.join(',')}/${valueArray.join(
        ',',
      )}/${brandId}/${slug}.html`;
      Router.replace(url);

      // Router.repla(url);
      setShowLoader(true);
    } else {
      Router.replace(`/${slug}.html`);
    }
  };

  const handleChange = (name: string, value: string, checked: boolean) => {
    const index = filterOption.findIndex(
      (filter: { name: string; value: string }) =>
        filter.name === name && filter.value === value,
    );
    const newArray = [...filterOption];
    if (index < 0) {
      if (checked) {
        newArray.push({
          name,
          value,
        });
      }
    } else if (!checked) {
      newArray.splice(index, 1);
    }
    setShowSortMenu(false);
    setFilterOption(newArray);
    updateFilter(newArray);
  };

  const colorChangeHandler = (
    productId: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => {
    const storageString = localStorage.getItem('selectedProducts');
    const selectedProducts: Array<{
      productId: number | undefined;
      seName: string | undefined;
      color: string | undefined | null;
    }> = storageString ? JSON.parse(storageString) : [];
    const index = selectedProducts.findIndex(
      (product) => product.productId === productId,
    );

    const productObject = {
      productId,
      seName,
      color,
    };

    if (index > -1) {
      selectedProducts[index] = productObject;
    } else {
      selectedProducts.push(productObject);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  };

  const loadMore = () => {
    setShowLoader(true);
    const count = currentCount + perPageCount;
    const products = allProduct.slice(currentCount, count);
    setCurrentCount(count);
    setProduct((prev) => [...prev, ...products]);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  const clearFilters = () => {
    setFilterOption([]);
    updateFilter([]);
  };

  const sortProductJson = (type: number) => {
    setShowLoader(true);

    setCurrentCount(perPageCount);
    let newList = [...allProduct];
    if (type === 1) {
      newList = newList.sort((pro1, pro2) =>
        pro1?.id && pro2?.id && pro1?.id > pro2?.id ? 1 : -1,
      );
    } else if (type === 2) {
      newList = newList.sort((pro1, pro2) =>
        pro1.salePrice > pro2.salePrice ? 1 : -1,
      );
    } else if (type === 3) {
      newList = newList.sort((pro1, pro2) =>
        pro1.salePrice < pro2.salePrice ? 1 : -1,
      );
    }
    setShowSortMenu(false);
    setAllProduct(newList);
    setProduct(getListingWithPagination(newList));
  };

  return {
    filters,
    product,
    totalCount: allProduct ? allProduct.length : 0,
    showSortMenu,
    productView,
    showFilter,
    skuList,
    compareCheckBoxHandler,
    handleChange,
    colorChangeHandler,
    setFilters,
    setProduct,
    loadMore,
    sortProductJson,
    setShowSortMenu,
    setProductView,
    setShowFilter,
    clearFilters,
  };
};

export default ProductListController;
