import { GetlAllProductList } from '@type/productList.type';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface _props {
  item: GetlAllProductList;
}

const StoreBuilder_ItemList_Item: React.FC<_props> = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  }>({
    src:
      (item!.getProductImageOptionList &&
        item.getProductImageOptionList[0].imageName) ||
      '',
    alt:
      (item!.getProductImageOptionList &&
        item!.getProductImageOptionList[0].alttag) ||
      '',
  });
  const router = useRouter();

  return (
    <li className='text-center relative p-1 border border-gray-300 hover:shadow rounded'>
      <div className='w-full bg-gray-200 overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200'>
        <Link href={`/${item.sename}`}>
          <a>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-h-full w-full'
            />
          </a>
        </Link>
      </div>
      <div className='mt-6'>
        <div className='mt-1 h-10 overflow-hidden text-sm text-[#484848] tracking-wider hover:text-primary-hover'>
          <Link href={`/${item.sename}`} className='relative'>
            {item.name}
          </Link>
        </div>
        <div className='mt-4 text-default text-xl'>
          <span className=''>
            <Price
              value={undefined}
              prices={{
                msrp: item.msrp,
                salePrice: item.salePrice,
              }}
            />
          </span>
        </div>
        <ul
          role='list'
          className='flex items-center my-2 justify-center space-x-1'
        >
          {item.getProductImageOptionList?.map((image, index) => (
            <li
              key={index}
              onClick={() =>
                setSelectedImage({ alt: image.alttag!, src: image.imageName! })
              }
              className='w-8 h-8 border border-black p-px rounded-full overflow-hidden'
            >
              <Image src={image.imageName!} alt={image.alttag!} className='' />
            </li>
          ))}
        </ul>
        <div className='gird-item-hover mt-3 mb-3'>
          <div className='flex justify-center mx-auto'>
            <button
              className='btn btn-primary !rounded-full overflow-hidden'
              onClick={() => router.push(`/${item.sename}`)}
              title="The North Face Men's ThermoBall Trekker Vest"
            >
              <>
                <span className='material-icons text-sm'>local_mall</span>
                <span className='ml-1'>BUY NOW</span>
              </>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StoreBuilder_ItemList_Item;
