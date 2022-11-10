import React from 'react';
import { useNavigate } from 'react-router-dom';
import { _Store } from '../../../constants/store.constant';
import { useTypedSelector } from '../../../hooks';
interface _props {
  name: string | null;
  id: number | null;
  imageUrl: string | null;
  link: string | null;
}

const ProductCompanion: React.FC<_props> = ({ name, imageUrl, id }) => {
  if (name === null) return <></>;

  const navigate = useNavigate();
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const goToProduct = (id: number | null) => {
    if (id === null) return;
    navigate(`/product/${id}`);
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
