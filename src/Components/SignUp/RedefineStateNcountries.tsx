import { GetCountriesList, GetStatesList } from '@services/user.service';
import { _Country, _State } from '@type/user.type';
import RedefineSelect from 'Components/SignUp/RedefineSelect';
import React, { useEffect, useState } from 'react';
import { _Signup_Payload } from './signup.payload';

interface _props {
  values: _Signup_Payload;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
}
const RedefineStateNcountries: React.FC<_props> = ({
  values,
  setFieldValue,
}) => {
  const [stateContries, setStateContries] = useState<{
    state: _State[] | null;
    country: _Country[] | null;
  }>({
    state: null,
    country: null,
  });

  const getStatesList = (id: number) => {
    GetStatesList(id).then((state) => {
      setStateContries((country) => ({
        ...country,
        state: state,
      }));
    });
  };

  useEffect(() => {
    GetCountriesList()
      .then((countries) => {
        setStateContries({ state: null, country: countries });
        return countries[0].id;
      })
      .then(getStatesList);
  }, []);

  return (
    <>
      {stateContries.country !== null && (
        <RedefineSelect
          label={'Country'}
          placeHolder={'Select Country'}
          name={'storeCustomerAddress[0].countryName'}
          value={values.storeCustomerAddress[0].countryName}
          options={stateContries.country}
          onChange={(event) => {
            setFieldValue(
              'storeCustomerAddress[0].countryName',
              event.target.value,
            );
            getStatesList(+event?.target.value);
          }}
          required={false}
        />
      )}
      {stateContries.state !== null && (
        <RedefineSelect
          label={'State'}
          placeHolder={'Select State'}
          name={'storeCustomerAddress[0].state'}
          value={values.storeCustomerAddress[0].state}
          options={stateContries.state}
          onChange={(event) => {
            setFieldValue('storeCustomerAddress[0].state', +event.target.value);
          }}
          required={false}
        />
      )}
    </>
  );
};

export default RedefineStateNcountries;
