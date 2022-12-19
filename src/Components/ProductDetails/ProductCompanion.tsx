import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';
interface _props {
  name: string | null;
  id: number | null;
  imageUrl: string | null;
  link: string | null;
}

const ProductCompanion: React.FC<_props> = ({ name, imageUrl, id }) => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  if (name === null) return <></>;

  const goToProduct = (id: number | null) => {
    if (id === null) return;
    router.push(`/product/${id}`);
  };

  if (storeLayout === _Store.type3) {
    return (
      <div className="pt-10 mx-auto max-w-xs text-center">
        <div className="mb-2 text-2xl">COMPANION</div>

        <div className="" key={name}>
          <div className="" onClick={() => goToProduct(id)}>
            <img
              src={imageUrl || '/dummyShirtImage.jpg'}
              alt={name}
              className="max-h-full mx-auto "
            />
          </div>
          <div className="mt-2">{name}</div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="text-black mb-5 text-sm">
        <span className="font-bold mr-1">Companion Product</span> :
        <div className="" key={name} onClick={() => goToProduct(id)}>
          <button className="text-anchor hover:text-anchor-hover">
            {name}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-lg m-3">
      <div className="font-semibold">Companion Product:</div>
      <div key={name}>
        <button
          onClick={() => goToProduct(id)}
          className="text-indigo-500 text-sm font-semibold underline"
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default ProductCompanion;
