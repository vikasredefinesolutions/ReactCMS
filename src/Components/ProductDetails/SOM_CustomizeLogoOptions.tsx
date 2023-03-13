import { FetchLogoLocationByProductId } from '@services/product.service';
import { _CI_ShoppingCartLogoPersonViewModel } from '@type/APIs/cart.res';
import { _LogoLocationDetail } from '@type/APIs/productDetail.res';
import { FieldArray, Form, Formik } from 'formik';
import { numberToOrdinalString } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import { logoPositions } from 'mock/startModal.mock';
import React, { useEffect, useState } from 'react';
import LogoSetterToStore from './LogoSetterToStore';
import NextLogoButton from './NextLogoButton';
import SOM_LogoOption from './SOM_LogoOption';

export type LogoStatus = string;
export type SelectedLocation = {
  label: string;
  value: string;
  image: {
    url: string;
    alt: string;
  };
  show: boolean;
  price: number;
  cost: number;
} | null;
export type FileToUpload = {
  name: string;
  type: string;
  previewURL: string;
} | null;

export type LogoDetails = {
  logoStatus: LogoStatus;
  selectedLocation: SelectedLocation;
  fileToUpload: FileToUpload;
};

export type logoDetailsAr = Array<LogoDetails>;

const SOM_CustomizeLogoOptions: React.FC<{
  editDetails: _CI_ShoppingCartLogoPersonViewModel[] | undefined;
  totalQty: number;
}> = ({ editDetails, totalQty }) => {
  const { product_updateLogoDetails, updateSomLogo } = useActions();
  const { getDetailsLogo } = LogoSetterToStore();

  const [nowOrLater, setNowOrLater] = useState<'later' | 'now'>('later');
  const [firstLogoFree, setFirstLogoFree] = useState<Boolean>(true);
  const { currency } = useTypedSelector((state) => state.store);
  const [logoLocation, setLogoLocation] = useState<_LogoLocationDetail[] | []>(
    [],
  );

  const logos = useTypedSelector((state) => state.product.som_logos);
  const id = useTypedSelector((state) => state.product.product.id);
  const [logoEditDetails, setLogoEditDetails] =
    useState<logoDetailsAr | null>();
  const [initialValues, setInitialValues] = useState(['']);
  useEffect(() => {
    if (id) {
      FetchLogoLocationByProductId({ productId: id }).then((res) => {
        if (res) {
          setFirstLogoFree(res?.isFirstLogoFree);
          res?.subRow && res?.subRow?.length > 0
            ? setLogoLocation(res?.subRow)
            : setLogoLocation(logoPositions);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (editDetails && logoLocation) {
      const { isLater, details } = getDetailsLogo(
        editDetails,
        logoLocation,
        totalQty,
      );
      if (isLater) {
        setNowOrLater('later');
      } else {
        setNowOrLater('now');
        setInitialValues(new Array(details.length).fill(''));
        setLogoEditDetails(details);
      }
    }
  }, [editDetails, logoLocation]);

  const showPrice = (price: 'FREE' | number) => {
    if (price === 'FREE') return `FREE`;
    return `${currency}${price}`;
  };

  const logoNowOrLaterHandler = (action: 'now' | 'later') => {
    if (action === 'later') {
      product_updateLogoDetails({
        type: 'Upload_Logo',
        logo: 'Customize Later',
      });
      setNowOrLater('later');

      return;
    }

    if (action === 'now') {
      setNowOrLater('now');
      product_updateLogoDetails({
        type: 'Reset_Locations',
        data: logoLocation?.map((logo) => ({
          image: {
            url: logo.image,
            alt: logo.image,
          },
          label: logo.name,
          value: logo.name,
          price: logo.price,
          cost: logo.cost,
        })),
      });

      return;
    }
  };

  return (
    <div className='mb-6'>
      <div className='text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5 mb-2'>
        <span className='text-lg font-semibold text-white'>
          Customize Your Order:
        </span>
      </div>
      <div className=''>
        <label
          htmlFor='logo_later'
          className={`block p-2 border mb-1 ${
            nowOrLater === 'later' ? 'border-secondary' : 'border-slate-200'
          }`}
        >
          <input
            type='radio'
            value='later'
            name='customize_logo'
            id='logo_later'
            checked={nowOrLater === 'later'}
            onChange={() => logoNowOrLaterHandler('later')}
            className='mr-3'
          />
          Customize Logo Later with Dedicated Account Specialist
        </label>
        <label
          htmlFor='logo_now'
          className={`block p-2 border mb-1 ${
            nowOrLater === 'now' ? 'border-secondary' : 'border-slate-200'
          }`}
        >
          <input
            type='radio'
            value='now'
            name='customize_logo'
            id='logo_now'
            checked={nowOrLater === 'now'}
            onChange={() => logoNowOrLaterHandler('now')}
            className='mr-3'
          />
          Customize Logo Now
        </label>
        {nowOrLater === 'now' && (
          <div className=''>
            <Formik
              initialValues={{
                logos: initialValues,
              }}
              onSubmit={() => {}}
            >
              {({ values }) => {
                return (
                  <Form>
                    <FieldArray
                      name={'logos'}
                      render={(arrayHelpers) => {
                        return (
                          <>
                            {values.logos?.map((_, index) => (
                              <SOM_LogoOption
                                key={index}
                                index={index}
                                textIndex={values.logos.length}
                                price={
                                  firstLogoFree && index === 0
                                    ? 'FREE'
                                    : logoLocation[index]
                                    ? logoLocation[index].price
                                    : 0
                                }
                                onRemove={() => {
                                  arrayHelpers.remove(index);
                                  product_updateLogoDetails({
                                    type: 'Remove_SOM_logo',
                                    logoIndex: index,
                                  });
                                  product_updateLogoDetails({
                                    type: 'Allow_Next_Logo',
                                    allow: true,
                                  });
                                }}
                                title={`${numberToOrdinalString(
                                  index + 1,
                                )} Logo (${
                                  firstLogoFree && index === 0
                                    ? 'FREE'
                                    : showPrice(
                                        logoLocation[index]
                                          ? logoLocation[index].price
                                          : 0,
                                      )
                                })`}
                                id={`${index}-id`}
                                name={`${index}-name`}
                                editDetails={
                                  logoEditDetails
                                    ? logoEditDetails[index]
                                    : null
                                }
                              />
                            ))}
                            {logoLocation.length > values.logos.length && (
                              <NextLogoButton
                                cIndex={{
                                  label: numberToOrdinalString(
                                    values.logos.length + 1,
                                  ),
                                  value: values.logos.length + 1,
                                  price: values.logos.length === 0 ? 'FREE' : 0,
                                }}
                                arrayHelpers={arrayHelpers}
                              />
                            )}
                          </>
                        );
                      }}
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};
export default SOM_CustomizeLogoOptions;
