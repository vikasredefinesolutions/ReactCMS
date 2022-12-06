import { paths } from '@constants/paths.constant';
import Link from 'next/link';

const CompareIcon = () => {
  return (
    <div className="flex">
      <Link
        href={`${paths.PRODUCT_COMPARE}`}
        className="text-primary hover:text-anchor-hover relative"
      >
        <>
          <span className="sr-only">Compare</span>
          <i className="fa-solid fa-shuffle text-xl"></i>
          <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">
            0
          </span>
        </>
      </Link>
    </div>
  );
};

export default CompareIcon;
