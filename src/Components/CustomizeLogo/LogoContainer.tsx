import Price from 'appComponents/reUsable/Price';
import React from 'react';

interface _props {
  id: number;
  image: { url: string };
  label: string;
  status: string;
  price: number;
  selected: {
    url: string;
    name: string;
    id: number;
  } | null;
  setSelected: React.Dispatch<
    React.SetStateAction<{
      url: string;
      name: string;
      id: number;
    } | null>
  >;
}

const LogoContainer: React.FC<_props> = ({
  id,
  image,
  label,
  status,
  price,
  selected,
  setSelected,
}) => {
  return (
    <li
      key={id}
      className="w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex"
      onClick={() =>
        setSelected({
          url: image.url,
          name: label,
          id: id,
        })
      }
    >
      <div
        className={`border-2 hover:border-primary ${
          selected?.id === id ? 'border-primary' : 'border-gray-200'
        } p-3 w-full text-ceter`}
      >
        <div className="w-28 h-28 inline-flex items-center justify-center">
          <img className="inline-block max-h-full" src={image.url} alt="No Image" />
        </div>
        <div className="mt-2">{label}</div>
        <div className="mt-2">{status}</div>
        <div className="mt-2">
          Estimated Cost: <Price value={price} />
        </div>
      </div>
    </li>
  );
};

export default LogoContainer;
