import { FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useActions, useTypedSelector } from 'hooks';
import { IndexLabels, logoPositions } from 'mock/startModal.mock';
import LogoOption from './LogoOption';
import NextLogoButton from './NextLogoButton';

const CustomizeLogoOptions: React.FC = () => {
  const { clearLogoUploadHistory, toggleNextLogoButton } = useActions();
  const [nowOrLater, setNowOrLater] = useState<'later' | 'now'>('later');
  const { currency } = useTypedSelector((state) => state.product.toCheckout);

  const showPrice = (price: 'FREE' | number) => {
    if (price === 'FREE') return `FREE`;
    return `${currency}${price}`;
  };

  return (
    <div className="mb-6">
      <div className="">
        <label
          htmlFor="logo_later"
          className={`block p-2 border mb-1 ${
            nowOrLater === 'later' ? 'border-secondary' : 'border-slate-200'
          }`}
        >
          <input
            type="radio"
            value="later"
            name="customize_logo"
            id="logo_later"
            checked={nowOrLater === 'later'}
            onChange={() => setNowOrLater('later')}
          />
          Customize Logo Later with Dedicated Account Specialist
        </label>
        <label
          htmlFor="logo_now"
          className={`block p-2 border mb-1 ${
            nowOrLater === 'now' ? 'border-secondary' : 'border-slate-200'
          }`}
        >
          <input
            type="radio"
            value="now"
            name="customize_logo"
            id="logo_now"
            checked={nowOrLater === 'now'}
            onChange={() => {
              setNowOrLater('now');
              clearLogoUploadHistory(
                logoPositions.map((logo) => ({
                  logo: {
                    url: logo.image.url,
                  },
                  label: logo.label,
                  value: logo.value,
                })),
              );
            }}
          />
          Customize Logo Now
        </label>
        {nowOrLater === 'now' && (
          <div className="">
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
                              <LogoOption
                                key={index}
                                index={index}
                                price={IndexLabels[index].price}
                                onRemove={() => {
                                  arrayHelpers.remove(index);
                                  toggleNextLogoButton(true);
                                }}
                                title={`${
                                  IndexLabels[index].label
                                } Logo (${showPrice(
                                  IndexLabels[index].price,
                                )})`}
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

export default CustomizeLogoOptions;
