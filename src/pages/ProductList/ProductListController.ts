import React, { useEffect, useState } from 'react';
import {
  FilterApiRequest,
  FilterType,
  ProductList,
  BrandFilter,
} from '@type/productList.type';
// import { useTypedSelector } from '../../hooks';
import { FetchFiltersJsonByBrand } from '@services/product.service';
import useSWR from 'swr';
import Router from 'next/router';
const ProductListController = (data: BrandFilter, slug: string) => {
  // const location = useLocation();
  
  const [filters, setFilters] = useState<FilterType>([]);
  const [product, setProduct] = useState<ProductList>([]);
  const [filterOption, setFilterOption] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);
  console.log(Router);
  // const navigate = useNavigate();
  // const storeId = useTypedSelector((state) => state.store.id);
  // const brandId = useTypedSelector((state) => state.store.pageType.id);
  // const customerId = useTypedSelector((state) => state.user.id);

  const storeId = 4;
  const brandId = 169;
  const customerId = 1;

  function removeDuplicates(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  // const filter = {
  //   storeID: storeId,
  //   brandId: brandId,
  //   customerId: customerId,
  //   filterOptionforfaceteds: filterOption,
  // };
  // const { data, error } = useSWR(filter, FetchFiltersJsonByBrand);
  // console.log(data);

  useEffect(() => {
    const _filters = [];
    for (const key in data) {
      const element = data[key];
      if (element.length > 0 && key !== 'getlAllProductList') {
        _filters.push({
          label: element[0].label,
          options: element,
        });
      } else if (key === 'getlAllProductList') {
        setProduct(element as ProductList);
      }
    }
    setFilters(_filters as FilterType);
  }, [data]);

  useEffect(() => {
        const filters = [...filterOption];
        const nameArray = removeDuplicates(filters.map((res) => res.name));
        const valueArray: string[] = [];
        nameArray.forEach((name) => {
          const filteredValue = filters.filter(
            (filter) => filter.name === name,
          );
          const filter = filteredValue.map((res) => res.value).join('~');
          valueArray.push(filter);
        });
      

      if (nameArray.length > 0 && valueArray.length > 0) {
        const url = `/${nameArray.join(',')}/${valueArray.join(',')}/${brandId}/${slug}`;
        Router.push(url)
      } else {
        // navigate(`/${slug}`);
      }
    
  }, [filterOption, storeId, brandId, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log();
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

  return { filters, product, handleChange, colorChangeHandler };
};

export default ProductListController;
