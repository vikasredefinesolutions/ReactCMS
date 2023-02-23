import { FetchBrands, FetchSiteMapCategories } from '@services/brand.service';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import Link from 'next/link';
import React from 'react';
import { _BrandsSiteMap, _CategorySiteMap } from 'show.type';
import { _globalStore } from 'store.global';
import MenuItemsSiteMap, { MenuItemsSiteMap_Brands } from './MenuItemsSiteMap';

interface _Sitemap_ExpectedProps {
  brandItems: _BrandsSiteMap[] | null;
  categories: _CategorySiteMap[] | null;
  store: null | {
    storeId: null | number;
    storeCode: null | string;
    storeTypeId: null | number;
  };
}

const Sitemap: React.FC<_Sitemap_ExpectedProps> = ({
  brandItems,
  categories,
}) => {
  if (!brandItems) {
    return <>No data found</>;
  }

  // console.log('categories sitemap', categories);
  // console.log('brands sitemap new ', brandItems);

  return (
    <>
      <div className='container mx-auto mt-6'>
        <div className=''>
          <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title mb-4'>
            Category
          </div>
          <div className='pl-5 text-sm tracking-[1.4px]'>
            <ul className='relative before:bg-[#415364] before:w-px before:absolute before:-left-5 before:top-2.5 before:bottom-2.5'>
              {brandItems && (
                <li
                  key={`brand`}
                  className='relative ml-[35px] before:bg-[#415364] before:h-px before:w-[42px] before:absolute before:-left-[55px] before:top-2.5 my-[15px]'
                >
                  <Link href={'/brands'}>
                    <a className='text-[#415364] hover:text-[#7bc24e] before:absolute before:bg-[#415364] before:rounded-full before:w-[6px] before:h-[6px] before:ml-[-14px] before:inline-block before:mt-2'>
                      {'Brands'}
                    </a>
                  </Link>
                  <MenuItemsSiteMap_Brands brandsList={brandItems} />
                </li>
              )}

              {categories?.map((cat, index) => {
                return (
                  <li
                    className='relative ml-[35px] before:bg-[#415364] before:h-px before:w-[42px] before:absolute before:-left-[55px] before:top-2.5 my-[15px]'
                    key={index}
                  >
                    <Link href={cat.sename}>
                      <a className='text-[#415364] hover:text-[#7bc24e] before:absolute before:bg-[#415364] before:rounded-full before:w-[6px] before:h-[6px] before:ml-[-14px] before:inline-block before:mt-2'>
                        {cat.name}
                      </a>
                    </Link>
                    {cat.subRows.length > 0 ? (
                      <MenuItemsSiteMap subRow={cat.subRows} />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

////-------------------------------- SERVER SIDE METHOD --------------------------------////

const expectedProps: _Sitemap_ExpectedProps = {
  brandItems: null,
  store: null,
  categories: null,
};

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<_Sitemap_ExpectedProps>> => {
  let { brandItems, store, categories } = expectedProps;

  if (_globalStore.storeId) {
    store = {
      storeCode: _globalStore.code,
      storeTypeId: _globalStore.storeTypeId,
      storeId: _globalStore.storeId,
    };
  }

  try {
    if (store?.storeId) {
      const res = await FetchBrands(store.storeId);
      brandItems = await res.data;
      const responseCategories = await FetchSiteMapCategories(store.storeId);
      categories = await responseCategories.data;
    }
  } catch (error) {
    console.log('error while fetching data from api', error);
  }

  return {
    props: {
      store: store,
      brandItems: brandItems,
      categories: categories,
    },
  };
};

export default Sitemap;
