import { UploadImage } from '@services/file.service';
import config from 'api.config';
import { useActions, useTypedSelector } from 'hooks';
import { IndexLabels } from 'mock/startModal.mock';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const dummyLogoImage = 'images/logo-to-be-submitted.webp';

interface _props {
  index: number;
  title: string;
  id: string;
  name: string;
  textIndex: number;
  price: 'FREE' | number;
  onRemove: () => void;
}

const SOM_LogoOption: React.FC<_props> = ({
  title,
  id,
  name,
  index,
  textIndex,
  price: logoPrice,
  onRemove: removeHandler,
}) => {
  const { setShowLoader, showModal, product_updateLogoDetails } = useActions();
  const [logoStatus, setLogoStatus] = useState<null | 'submitted' | 'later'>(
    null,
  );
  const [selectedLocation, setSelectedLocation] = useState<null | {
    label: string;
    value: string;
    image: {
      url: string;
      alt: string;
    };
    show: boolean;
    price: number;
    cost: number;
  }>(null);

  const [fileToUpload, setFileToUpload] = useState<{
    name: string;
    type: string;
    previewURL: string;
  } | null>(null);

  const availableOptions = useTypedSelector(
    (state) => state.product.som_logos.availableOptions,
  );

  let option: any = availableOptions?.map((item) => {
    return {
      image: {
        url: item.image.url,
        alt: item.image.url,
      },
      value: item.value,
      price: item.price,
      cost: item.cost,
      label: (
        <div className='flex items-center '>
          <img
            alt={item.image.alt}
            src={
              item.image.url.startsWith('images')
                ? item.image.url
                : `${config.mediaBaseUrl}${item.image.url}`
            }
            height='60px'
            width='60px'
            className='mr-2 border border-gray-200'
          />
          {item.value}
        </div>
      ),
    };
  });

  const fileReader = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files === null) return;
    setShowLoader(true);

    try {
      const file = {
        name: event.currentTarget.files[0].name,
        type: event.currentTarget.files[0].type,
        previewURL: URL.createObjectURL(event.currentTarget.files[0]),
      };

      const logoFileURL = await UploadImage({
        folderPath: config.imageFolderPath,
        files: event.currentTarget?.files[0],
      });

      product_updateLogoDetails({
        type: 'Upload_Logo',
        logo: {
          status: 'LOGO SUBMITTED',
          location: {
            imageUrl: selectedLocation!.image.url,
            name: selectedLocation!.label,
            value: selectedLocation!.value,
          },
          title: file.name,
          filePath: logoFileURL,
          date: JSON.stringify(new Date()),
          price: logoPrice === 'FREE' ? 0 : logoPrice,
          quantity: 1,
        },
      });

      setFileToUpload(file);
      setLogoStatus('submitted');
    } catch (error) {
      showModal({
        title: 'Error',
        message: 'Something Went Wrong. Try again, later!!!',
      });
    }
    setShowLoader(false);
  };

  const DisplayActions = () => {
    let text = <></>;

    const actionHandler = (action: null | 'later' | 'submitted' | '') => {
      if (!selectedLocation?.value) return;

      if (action === 'later') {
        setLogoStatus('later');
        product_updateLogoDetails({
          type: 'Upload_Logo',
          logo: {
            status: 'WILL SUBMIT LATER',
            location: {
              imageUrl: selectedLocation!.image.url,
              name: selectedLocation!.label,
              value: selectedLocation!.value,
            },
            quantity: 1,
            price: logoPrice === 'FREE' ? 0 : logoPrice,
            date: JSON.stringify(new Date()),
          },
        });
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
          <div className='' onClick={() => actionHandler('later')}>
            Add Logo Later
          </div>
        );
        break;
      case 'later':
        text = (
          <div className=''>Logo to be submitted after order is placed</div>
        );
        break;
      case 'submitted':
        text = (
          <div className='' onClick={() => actionHandler(null)}>
            Remove
          </div>
        );
        break;
      default:
        text = (
          <div className='' onClick={() => actionHandler('later')}>
            Add Logo Later
          </div>
        );
        break;
    }

    return text;
  };

  useEffect(() => {
    if (logoStatus === 'later' || logoStatus === 'submitted') {
      product_updateLogoDetails({
        type: 'Update_Location_Options',
        location: {
          addOrRemove: 'REMOVE',
          price: selectedLocation!.price,
          cost: selectedLocation!.cost,
          value: selectedLocation!.value,
          label: selectedLocation!.label,
          image: selectedLocation!.image,
        },
      });

      setSelectedLocation((opt) => {
        if (opt === null) return null;
        return { ...opt, show: true };
      });
    }
    return () => {
      if (logoStatus === 'later' || logoStatus === 'submitted') {
        product_updateLogoDetails({
          type: 'Location_Update_Pending',
          pending: null,
        });

        product_updateLogoDetails({
          type: 'Update_Location_Options',
          location: {
            addOrRemove: 'ADD',
            price: selectedLocation!.price,
            cost: selectedLocation!.cost,
            value: selectedLocation!.value,
            label: selectedLocation!.label,
            image: selectedLocation!.image,
          },
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoStatus]);

  useEffect(() => {
    product_updateLogoDetails({
      type: 'Update_TotalPrice_ByLogo',
      logo: {
        addOrSubtract: 'add',
        price: logoPrice,
        index,
      },
    });

    return () => {
      product_updateLogoDetails({
        type: 'Update_TotalPrice_ByLogo',
        logo: {
          addOrSubtract: 'subtract',
          price: logoPrice,
          index,
        },
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='p-2 mb-2 border bg-gray-50 border-slate-200'>
      <div className='flex items-center justify-between mb-4 gap-2'>
        <div className='font-semibold text-lg mb-4'>{title}</div>
        {index !== 0 && (
          <div className=''>
            <button
              className='text-rose-600'
              type='button'
              onClick={removeHandler}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <div className='mb-4 last:mb-0'>
        <label htmlFor={name} className='block mb-2'>
          Select a location to print your logo :
        </label>
        <Select
          isDisabled={selectedLocation?.show}
          value={selectedLocation}
          onChange={(e: any) => {
            product_updateLogoDetails({
              type: 'Location_Update_Pending',
              pending: IndexLabels[textIndex - 1].label,
            });
            setSelectedLocation({
              price: e.price,
              cost: e.cost,
              label: e.label.props.children[1],
              value: e.value,
              show: false,
              image: availableOptions!.find((opt) => opt.value === e.value)!
                .image,
            });
          }}
          options={Array.isArray(option) && option.length ? option : []}
        />
        {/* <select
          id={name}
          className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10'
          name={name}
          disabled={selectedLocation?.show}
          value={selectedLocation?.value || ''}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            product_updateLogoDetails({
              type: 'Location_Update_Pending',
              pending: IndexLabels[textIndex - 1].label,
            });
            setSelectedLocation({
              label: availableOptions!.find(
                (opt) => opt.value === event.target.value,
              )!.label,
              value: event.target.value,
              show: false,
              image: availableOptions!.find(
                (opt) => opt.value === event.target.value,
              )!.image,
            });
          }}
        >
          <option value=''>Select</option>
          {selectedLocation?.show && (
            <option value={selectedLocation?.value}>
              {selectedLocation?.label}
            </option>
          )}
          {availableOptions?.map((location) => {
            return (
              <option key={location.value} value={location.value}>
                  {location.label}
              </option>
            );
          })}
        </select> */}
      </div>
      <div className='mb-4 last:mb-0'>
        <label htmlFor='' className='block mb-2'>
          Select your logo :
        </label>
        <div className='flex flex-wrap items-center justify-between border border-gray-600 shadow-sm text-sm p-2'>
          {logoStatus === null && <div className=''>Upload Your Logo</div>}
          {logoStatus === 'later' && (
            <div className=''>
              <img src={dummyLogoImage} alt='' />
            </div>
          )}
          {logoStatus === 'submitted' && (
            <div className='w-full'>
              <img
                className='w-14 max-h-14'
                src={fileToUpload?.previewURL}
                alt=''
              />
            </div>
          )}
          {DisplayActions()}
          <div className=''>
            <label
              htmlFor={id}
              className='inline-block bg-indigo-600 border-0 py-2 px-3 text-white'
            >
              Upload
            </label>
            <input
              type='file'
              name={id}
              id={id}
              value={''}
              className='sr-only'
              onChange={fileReader}
              accept={'image/*'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOM_LogoOption;
