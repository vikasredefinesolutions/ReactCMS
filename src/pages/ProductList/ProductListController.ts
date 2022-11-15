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
  const allProduct = data.product;
  const perPageCount = 3;
  const [currentCount, setCurrentCount] = useState(perPageCount);
  const [filterOption, setFilterOption] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >(checkedFilters || null);
  const [filters, setFilters] = useState<FilterType>(data.filters || null);
  const getListingWithPagination = () => {
    if (allProduct) {
      return allProduct.slice(0, currentCount);
    }
    return [];
  };
  const [product, setProduct] = useState<ProductList>(
    getListingWithPagination() || null,
  );

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
      Router.push(url);
    } else {
      Router.push(`/${slug}.html`);
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
    const products = allProduct.slice(currentCount, count)
    setCurrentCount(count);
    setProduct((prev) => [...prev, ...products] )
  }

  return {
    filters,
    product,
    totalCount: allProduct.length,
    handleChange,
    colorChangeHandler,
    setFilters,
    setProduct,
    loadMore,
  };
};

export default ProductListController;
