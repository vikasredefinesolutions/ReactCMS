import Link from 'next/link';
import React from 'react';
import { _CategorySiteMap } from 'show.type';
import Sub_MenuItemsSiteMap from './Sub_MenuItemsSiteMap';

interface _props {
  subRow: _CategorySiteMap[];
}

interface _props_brands {
  brandsList: {
    brandName: string;
    seName: string;
  }[];
}

const MenuItemsSiteMap: React.FC<_props> = ({ subRow }) => {
  return (
    <ul className='pl-[1px] relative before:bg-[#dfdfdf] before:w-px before:absolute before:-left-5 before:top-2.5 before:bottom-2.5 px-3'>
      {subRow.map((el, index) => {
        return (
          <li
            key={index}
            className='relative ml-[35px] before:bg-[#dfdfdf] before:h-px before:w-[42px] before:absolute before:-left-[55px] before:top-2.5 my-[15px]'
          >
            <Link href={el.sename}>
              <a className='text-[#415364] hover:text-[#7bc24e] before:absolute before:bg-[#415364] before:rounded-full before:w-[6px] before:h-[6px] before:mr-3 before:mt-2 before:ml-[-14px] before:inline-block'>
                {el.name}
              </a>
            </Link>
            {el.subRows.length > 0 ? (
              <Sub_MenuItemsSiteMap subRow={el.subRows} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
  //   return <>{JSON.stringify(subRow)}</>;
};

export const MenuItemsSiteMap_Brands: React.FC<_props_brands> = ({
  brandsList,
}) => {
  return (
    <ul className='pl-[1px] relative before:bg-[#dfdfdf] before:w-px before:absolute before:-left-5 before:top-2.5 before:bottom-2.5 px-3'>
      {brandsList.map((el, index) => {
        return (
          <li
            key={index}
            className='relative ml-[35px] before:bg-[#dfdfdf] before:h-px before:w-[42px] before:absolute before:-left-[55px] before:top-2.5 my-[15px]'
          >
            <Link
              href={el.seName}
              className='text-[#415364] hover:text-[#7bc24e] before:absolute before:bg-[#415364] before:rounded-full before:w-[6px] before:h-[6px] before:mr-3 before:mt-2 before:ml-[-14px] before:inline-block'
            >
              <a className='text-[#415364] hover:text-[#7bc24e] before:absolute before:bg-[#415364] before:rounded-full before:w-[6px] before:h-[6px] before:mr-3 before:mt-2 before:ml-[-14px] before:inline-block'>
                {el.brandName}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItemsSiteMap;
