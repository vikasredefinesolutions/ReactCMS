import { UploadImage } from '@services/file.service';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

const dummyLogoImage = 'images/logo-to-be-submitted.webp';

interface _props {
  index: number;
  title: string;
  id: string;
  name: string;
  price: 'FREE' | number;
  onRemove: () => void;
}

const LogoOption: React.FC<_props> = ({
  title,
  id,
  name,
  index,
  price,
  onRemove: removeHandler,
}) => {

  const selectedLogo = useTypedSelector(state => state.product.toCheckout.chosenLogo);
  const { updatePriceByLogo, updateOptions } = useActions();
  const [logoStatus, setLogoStatus] = useState<null | 'submitted' | 'later'>(
    null,
  );
  const [selected, setSelected] = useState<null | {
    label: string;
    value: string;
    logo: {
      url: string;
    };
    show: boolean;
  }>(null);

  const [fileToUpload, setFileToUpload] = useState<{
    name: string;
    type: string;
    previewURL: string;
  } | null>(null);

  const availableOptions = useTypedSelector(
    (state) => state.product.toCheckout.availableOptions,
  );

  const fileReader = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files === null) return;

    const file = {
      name: event.currentTarget.files[0].name,
      type: event.currentTarget.files[0].type,
      previewURL: URL.createObjectURL(event.currentTarget.files[0]),
    };
    let logos: any[] = [];
    if (selectedLogo) {
      logos = [...selectedLogo];
    }
    const image = await UploadImage({ folderPath: '/rdc/1/store/4/images/', files: event.currentTarget?.files[0] });
    let oldLogoIndex = logos?.findIndex(res => res.index === index && res.id === id);

    if (oldLogoIndex > -1) {
      logos[oldLogoIndex] = { ...logos[oldLogoIndex], path: image }
    } else {
      logos.push({
        index,
        id,
        path: image
      })
    }

    setFileToUpload(file);
    setLogoStatus('submitted');
  };

  const DisplayActions = () => {
    let text = <></>;

    const actionHandler = (action: null | 'later' | 'submitted' | '') => {
      if (!selected?.value) return;

      if (action === 'later') {
        setLogoStatus('later');
        return;
      }
      if (action === 'submitted') {
        setLogoStatus('submitted');
        return;
      }
      if (action === null) {
        setLogoStatus(null);
        setFileToUpload(null);
        return;
      }
    };

    switch (logoStatus) {
      case null:
        text = (
          <div className="" onClick={() => actionHandler('later')}>
            Add Logo Later
          </div>
        );
        break;
      case 'later':
        text = (
          <div className="">Logo to be submitted after order is placed</div>
        );
        break;
      case 'submitted':
        text = (
          <div className="" onClick={() => actionHandler(null)}>
            Remove
          </div>
        );
        break;
      default:
        text = (
          <div className="" onClick={() => actionHandler('later')}>
            Add Logo Later
          </div>
        );
        break;
    }

    return text;
  };

  useEffect(() => {
    if (logoStatus === 'later' || logoStatus === 'submitted') {
      updateOptions({
        value: selected!.value,
        label: selected!.label,
        addOrRemove: 'REMOVE',
        logo: selected!.logo,
      });

      setSelected((opt) => {
        if (opt === null) return null;
        return { ...opt, show: true };
      });
    }
    return () => {
      if (logoStatus === 'later' || logoStatus === 'submitted') {
        updateOptions({
          value: selected!.value,
          label: selected!.label,
          addOrRemove: 'ADD',
          logo: selected!.logo,
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoStatus]);

  useEffect(() => {
    updatePriceByLogo({ type: 'add', price, index });

    return () => {
      updatePriceByLogo({ type: 'subtract', price, index });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-2 mb-2 border bg-gray-50 border-slate-200">
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="font-semibold text-lg mb-4">{title}</div>
        {index !== 0 && (
          <div className="">
            <button
              className="text-rose-600"
              type="button"
              onClick={removeHandler}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <div className="mb-4 last:mb-0">
        <label htmlFor={name} className="block mb-2">
          Select a location to print your logo :
        </label>
        <select
          id={name}
          className="block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10"
          name={name}
          disabled={selected?.show}
          value={selected?.value || ''}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelected({
              label: availableOptions!.find(
                (opt) => opt.value === event.target.value,
              )!.label,
              value: event.target.value,
              show: false,
              logo: availableOptions!.find(
                (opt) => opt.value === event.target.value,
              )!.logo,
            });
          }}
        >
          <option value="">Select</option>
          {selected?.show && (
            <option value={selected?.value}>{selected?.label}</option>
          )}
          {availableOptions?.map((location) => {
            return (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-4 last:mb-0">
        <label htmlFor="" className="block mb-2">
          Select your logo :
        </label>
        <div className="flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2">
          {logoStatus === null && <div className="">Upload Your Logo</div>}
          {logoStatus === 'later' && (
            <div className="">
              <img src={dummyLogoImage} alt="" />
            </div>
          )}
          {logoStatus === 'submitted' && (
            <div className="w-full">
              <img
                className="w-14 max-h-14"
                src={fileToUpload?.previewURL}
                alt=""
              />
            </div>
          )}
          {DisplayActions()}
          <div className="">
            <label
              htmlFor={id}
              className="inline-block bg-indigo-600 border-0 py-2 px-3 text-white"
            >
              Upload
            </label>
            <input
              type="file"
              name={id}
              id={id}
              // value={undefined}
              className="sr-only"
              onChange={fileReader}
              accept={'image/*'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoOption;
