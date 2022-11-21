import React, { useEffect, useState } from 'react';
import {
  FilterApiRequest,
  FilterType,
  ProductList,
  BrandFilter,
} from '@type/productList.type';

import { useRouter } from 'next/router';
import { useActions } from 'hooks';
const ProductListController = (
  data: { product: ProductList; filters: FilterType },
  slug: string,
  checkedFilters: any,
) => {
  const { setShowLoader } = useActions();
  // const location = useLocation();
  const Router = useRouter();
  const [allProduct, setAllProduct] = useState(data.product);
  const perPageCount = 3;
  const [currentCount, setCurrentCount] = useState(perPageCount);
  const [filterOption, setFilterOption] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >(checkedFilters || null);
  const [filters, setFilters] = useState<FilterType>(data.filters || null);
  const getListingWithPagination = (data: ProductList) => {
    if (data) {
      return data.slice(0, perPageCount);
    }
    return [];
  };
  const [product, setProduct] = useState<ProductList>(
    getListingWithPagination(data.product) || null,
  );

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [productView, setProductView] = useState('grid');
  const [showFilter, setShowFilter] = useState(false);

  const storeId = 4;
  const brandId = 169;
  const customerId = 1;

  function removeDuplicates(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  useEffect(() => {
    if (!allProduct) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [allProduct]);

  useEffect(() => {
    setShowLoader(false);
  }, [slug, checkedFilters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
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

    const nameArray = removeDuplicates(newArray.map((res) => res.name));
    const valueArray: string[] = [];
    nameArray.forEach((name) => {
      const filteredValue = newArray.filter((filter) => filter.name === name);
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

    setFilterOption(newArray);
  };

  const colorChangeHandler = (
    productId: number,
    seName: string,
    color: string,
  ) => {
    const storageString = localStorage.getItem('selectedProducts');
    const selectedProducts: Array<{
      productId: number;
      seName: string;
      color: string;
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
    const count = currentCount + perPageCount;
    const products = allProduct.slice(currentCount, count);
    setCurrentCount(count);
    setProduct((prev) => [...prev, ...products]);
  };

  const sortProductJson = (type: number) => {
    // setProduct([]);
    setCurrentCount(perPageCount);
    let newList = [...allProduct];
    if (type === 1) {
      newList = newList.sort((pro1, pro2) => (pro1.id > pro2.id ? 1 : -1));
    } else if (type === 2) {
      newList = newList.sort((pro1, pro2) =>
        pro1.salePrice > pro2.salePrice ? 1 : -1,
      );
    } else if (type === 3) {
      newList = newList.sort((pro1, pro2) =>
        pro1.salePrice < pro2.salePrice ? 1 : -1,
      );
    }
    setAllProduct(newList);
    setProduct(getListingWithPagination(newList));
  };

  return {
    filters,
    product,
    totalCount: allProduct.length,
    showSortMenu,
    productView,
    showFilter,
    handleChange,
    colorChangeHandler,
    setFilters,
    setProduct,
    loadMore,
    sortProductJson,
    setShowSortMenu,
    setProductView,
    setShowFilter,
  };
};

export default ProductListController;
