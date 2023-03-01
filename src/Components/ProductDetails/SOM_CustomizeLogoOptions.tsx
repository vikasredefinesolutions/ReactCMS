import { FetchLogoLocationByProductId } from '@services/product.service';
import { _CI_ShoppingCartLogoPersonViewModel } from '@type/APIs/cart.res';
import { _LogoLocationDetail } from '@type/APIs/productDetail.res';
import { FieldArray, Form, Formik } from 'formik';
import { generateImageUrl, numberToOrdinalString } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import { logoPositions } from 'mock/startModal.mock';
import React, { useEffect, useState } from 'react';
import { _SOM_LogoDetails } from 'redux/slices/product.slice.types';
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
      let isLater = false;
      const som_logoDetails: _SOM_LogoDetails[] = [];
      const details = editDetails.map((res) => {
        let logoStatus: LogoStatus = '';
        let fileToUpload: FileToUpload = null;
        if (res.logoName === 'Customize Later') {
          setNowOrLater('later');
          isLater = true;
        } else if (res.logoName === 'Add Logo Later') {
          logoStatus = 'later';
          som_logoDetails.push({
            date: new Date().toString(),
            location: {
              imageUrl: res.logoPositionImage,
              name: res.logoLocation || '',
              value: res.logoLocation || '',
            },
            price: res.logoPrice,
            quantity: 5,
            status: 'WILL SUBMIT LATER',
          });
          setNowOrLater('now');
        } else {
          som_logoDetails.push({
            date: new Date().toString(),
            filePath: res.logoImagePath,
            location: {
              imageUrl: res.logoPositionImage,
              name: res.logoLocation || '',
              value: res.logoLocation || '',
            },
            price: res.logoPrice / totalQty,
            quantity: totalQty,
            status: 'LOGO SUBMITTED',
            title: res.name,
          });
          logoStatus = 'submitted';
          setNowOrLater('now');
          // eslint-disable-next-line no-useless-escape
          const filename = res.logoImagePath.replace(/^.*[\\\/]/, '');
          fileToUpload = {
            name: filename,
            type: filename.split('.').pop() as string,
            previewURL: generateImageUrl(res.logoImagePath, false) as string,
          };
        }

        const selectedLocation = {
          label: res.logoLocation || '',
          value: res.logoLocation || '',
          image: {
            url: res.logoPositionImage || '',
            alt: res.logoLocation || '',
          },
          show: true,
          price: res.logoPrice,
          cost: res.logoPrice,
        };

        return {
          logoStatus,
          fileToUpload,
          selectedLocation,
        };
      });
      if (!isLater) {
        setInitialValues(new Array(details.length).fill(''));
        setLogoEditDetails(details);
        logoNowOrLaterHandler('now');
        updateSomLogo({
          details: som_logoDetails.length > 0 ? som_logoDetails : null,
          allowNextLogo: logoLocation.length > som_logoDetails.length,
          availableOptions: logoLocation
            .filter((logo) =>
              som_logoDetails.findIndex(
                (detail) => detail.location.name === logo.name,
              ) > -1
                ? 0
                : 1,
            )
            .map((logo) => ({
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
