import { ErrorMessage, Form, Formik } from 'formik';
import { useActions } from 'hooks';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

interface _props {
  sizeAttributeOptionId: number;
  qty: number;
  size: string;
  price: { msrp: number; ourCost: number; salePrice: number };
  defaultQty: number;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Please, enter a valid email address'),
});

const SelectOrInput: React.FC<_props> = ({
  sizeAttributeOptionId,
  qty,
  size,
  price,
  defaultQty,
}) => {
  const { updateQuantities, updatePrice } = useActions();
  const [email, setEmail] = useState<null | 'SENT'>(null);
  const [inputOrSelect, setInputOrSelect] = useState<{
    type: 'input' | 'select' | 'saved';
    choosedValue: number;
    focus: boolean;
  }>({
    type: defaultQty > 10 ? 'input' : 'select',
    choosedValue: defaultQty,
    focus: false,
  });

  const selectQtyHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '10+') {
      setInputOrSelect((input) => ({
        ...input,
        type: 'input',
        focus: true,
      }));
      return;
    }

    updateQuantities({
      attributeOptionId: sizeAttributeOptionId,
      size: size,
      qty: +event.target.value,
      price: price.msrp,
    });
    setInputOrSelect((input) => ({
      ...input,
      choosedValue: +event.target.value,
    }));
  };

  const enterQtyHandler = (value: { itemCount: number }) => {
    if (value.itemCount < 10) {
      updateQuantities({
        attributeOptionId: sizeAttributeOptionId,
        size: size,
        qty: value.itemCount,
        price: price.msrp,
      });
      setInputOrSelect({
        type: 'select',
        choosedValue: value.itemCount,
        focus: false,
      });
      return;
    }

    updateQuantities({
      attributeOptionId: sizeAttributeOptionId,
      size: size,
      qty: value.itemCount,
      price: price.msrp,
    });
    setInputOrSelect({
      type: 'input',
      choosedValue: value.itemCount,
      focus: false,
    });
  };

  const sendEmailHandler = (inputs: { email: string }) => {
    setEmail('SENT');
  };

  useEffect(() => {
    updatePrice({ price: price.msrp });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (defaultQty > 0) {
      updateQuantities({
        attributeOptionId: sizeAttributeOptionId,
        size: size,
        qty: +defaultQty || 0,
        price: price.msrp,
      });
    }
  }, [defaultQty]);

  if (qty <= 0) {
    return (
      <>
        {email === 'SENT' ? (
          <div>Thanks for signing up!</div>
        ) : (
          <div>
            Out of Stock. Get Inventory Alert.email{' '}
            <Formik
              initialValues={{ email: '' }}
              onSubmit={sendEmailHandler}
              validationSchema={validationSchema}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <input
                      type='text'
                      name='email'
                      autoComplete='off'
                      value={values.email}
                      onChange={handleChange}
                      className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                    />
                    <button
                      type='submit'
                      className='bg-indigo-600 border-0 py-1 px-2 text-white'
                    >
                      Send
                    </button>
                    <ErrorMessage
                      name={'email'}
                      className='text-rose-500'
                      component={'p'}
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </>
    );
  }

  return (
    <td className='px-2 py-4'>
      {inputOrSelect.type === 'select' && (
        <div className='flex justify-center'>
          <select
            className='block w-20  border border-gray-600 shadow-sm text-sm py-1 px-2 pr-1'
            value={inputOrSelect.choosedValue}
            name={size}
            onChange={selectQtyHandler}
          >
            <option value='0'>0</option>
            {qty > 0 ? <option value='1'>1</option> : ''}
            {qty > 1 ? <option value='2'>2</option> : ''}
            {qty > 2 ? <option value='3'>3</option> : ''}
            {qty > 3 ? <option value='4'>4</option> : ''}
            {qty > 4 ? <option value='5'>5</option> : ''}
            {qty > 5 ? <option value='6'>6</option> : ''}
            {qty > 6 ? <option value='7'>7</option> : ''}
            {qty > 7 ? <option value='8'>8</option> : ''}
            {qty > 8 ? <option value='9'>9</option> : ''}
            {qty > 9 ? <option value='10+'>10+</option> : ''}
          </select>
        </div>
      )}
      {inputOrSelect.type === 'input' && (
        <Formik
          initialValues={{ itemCount: inputOrSelect.choosedValue }}
          onSubmit={enterQtyHandler}
        >
          {({ values, handleChange }) => {
            return (
              <Form>
                <div className='flex justify-center items-center gap-2'>
                  <input
                    type='number'
                    name='itemCount'
                    max={qty}
                    value={values.itemCount}
                    onFocus={() =>
                      setInputOrSelect((state) => ({
                        ...state,
                        focus: true,
                      }))
                    }
                    onChange={handleChange}
                    className='block w-20 border border-gray-600 shadow-sm text-sm py-1 px-2'
                  />
                  {inputOrSelect.focus && (
                    <>
                      <button
                        type='submit'
                        className='bg-indigo-600 border-0 py-1 px-2 text-white'
                      >
                        Save
                      </button>
                      <button
                        onClick={() =>
                          setInputOrSelect({
                            type: 'select',
                            choosedValue: 0,
                            focus: false,
                          })
                        }
                        className='bg-white border border-neutral-200 text-gray-500 py-1 px-2'
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </td>
  );
};

export default SelectOrInput;
