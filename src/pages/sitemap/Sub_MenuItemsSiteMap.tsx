import Link from 'next/link';
import React from 'react';
import { _CategorySiteMap } from 'show.type';

interface _props {
  subRow: _CategorySiteMap[];
}

const Sub_MenuItemsSiteMap: React.FC<_props> = ({ subRow }) => {
  return (
    <ul className='pl-[1px] relative before:bg-[#dfdfdf] before:w-px before:absolute before:-left-5 before:top-2.5 before:bottom-2.5 px-5'>
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
          </li>
        );
      })}
    </ul>
  );
  //   return <>{JSON.stringify(subRow)}</>;
};

export default Sub_MenuItemsSiteMap;
