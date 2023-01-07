import { paths } from '@constants/paths.constant';
import Link from 'next/link';
import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <div className="text-center">
      <div className="mb-2 mt-16">
        <img src="images/404.png" className="m-auto" alt="" title="" />
      </div>
      <div className="text-xl lg:text-2xl mb-2">PAGE NOT FOUND</div>
      <div className="">
        <Link href={paths.HOME} className="btn btn-lg btn-primary">
          BACK TO HOME PAGE
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
