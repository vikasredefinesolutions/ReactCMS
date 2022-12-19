import Link from 'next/link';
import React from 'react';
const ProductSocialIcons: React.FC = () => {
  return (
    <div className="text-center mt-4 space-x-2">
      <Link className="inline-block h-6" href="javascript:void(0);">
        <a>
          <img
            src="images/tweet.png"
            title=""
            alt=""
            className="inline-block max-h-full"
          />
        </a>
      </Link>
      <Link className="inline-block h-6" href="javascript:void(0);">
        <a>
          <img
            src="images/pinterest.png"
            title=""
            alt=""
            className="inline-block max-h-full"
          />
        </a>
      </Link>
    </div>
  );
};

export default ProductSocialIcons;
