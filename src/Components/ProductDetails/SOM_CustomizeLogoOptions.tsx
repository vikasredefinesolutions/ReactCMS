import { FetchLogoLocationByProductId } from '@services/product.service';
import { _LogoLocationDetail } from '@type/APIs/productDetail.res';
import { FieldArray, Form, Formik } from 'formik';
import { useActions, useTypedSelector } from 'hooks';
import { IndexLabels, logoPositions } from 'mock/startModal.mock';
import React, { useEffect, useState } from 'react';
import NextLogoButton from './NextLogoButton';
import SOM_LogoOption from './SOM_LogoOption';

const SOM_CustomizeLogoOptions: React.FC = () => {
  const { product_updateLogoDetails } = useActions();
  const [nowOrLater, setNowOrLater] = useState<'later' | 'now'>('later');
  const [firstLogoFree, setFirstLogoFree] = useState<Boolean>(true);
  const { currency } = useTypedSelector((state) => state.store);
  const [logoLocation, setLogoLocation] = useState<_LogoLocationDetail[] | []>(
    [],
  );
  const id = useTypedSelector((state) => state.product.product.id);

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
                logos: [''],
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
                            {values.logos?.map((val, index) => (
                              <SOM_LogoOption
                                key={index}
                                index={index}
                                textIndex={values.logos.length}
                                price={
                                  firstLogoFree
                                    ? IndexLabels[index].price
                                    : index === 0
                                    ? IndexLabels[index + 1].price
                                    : IndexLabels[index].price
                                }
                                onRemove={() => {
                                  arrayHelpers.remove(index);
                                  product_updateLogoDetails({
                                    type: 'Allow_Next_Logo',
                                    allow: true,
                                  });
                                }}
                                title={`${IndexLabels[index].label} Logo (${
                                  firstLogoFree
                                    ? showPrice(IndexLabels[index].price)
                                    : index === 0
                                    ? showPrice(IndexLabels[index + 1].price)
                                    : showPrice(IndexLabels[index].price)
                                })`}
                                id={`${index}-id`}
                                name={`${index}-name`}
                              />
                            ))}
                            <NextLogoButton
                              cIndex={IndexLabels[values.logos.length]}
                              arrayHelpers={arrayHelpers}
                            />
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
