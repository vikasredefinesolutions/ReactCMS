import { ErrorMessage, Form, Formik } from 'formik';
import { useActions } from 'hooks';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

interface _props {
  qty: number;
  size: string;
  price: { msrp: number; ourCost: number; salePrice: number };
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Please, enter a valid email address'),
});

const SelectOrInput: React.FC<_props> = ({ qty, size, price }) => {
  const { updateQuantities, updatePrice } = useActions();
  const [email, setEmail] = useState<null | 'SENT'>(null);
  const [inputOrSelect, setInputOrSelect] = useState<{
    type: 'input' | 'select' | 'saved';
    choosedValue: number;
    focus: boolean;
  }>({ type: qty > 10 ? 'input' : 'select', choosedValue: qty, focus: false });

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

  if (qty < 0) {
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
                      type="text"
                      name="email"
                      autoComplete="off"
                      value={values.email}
                      onChange={handleChange}
                      className="block w-full border border-gray-600 shadow-sm text-sm py-1 px-2"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 border-0 py-1 px-2 text-white"
                    >
                      Send
                    </button>
                    <ErrorMessage
                      name={'email'}
                      className="text-rose-500"
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
    <td className="px-2 py-4">
      {inputOrSelect.type === 'select' && (
        <div className="">
          <select
            className="block w-full border border-gray-600 shadow-sm text-sm py-1 px-2 pr-10"
            value={inputOrSelect.choosedValue}
            name={size}
            onChange={selectQtyHandler}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10+">10+</option>
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
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="itemCount"
                    value={values.itemCount}
                    onFocus={() =>
                      setInputOrSelect((state) => ({
                        ...state,
                        focus: true,
                      }))
                    }
                    onChange={handleChange}
                    className="block w-full border border-gray-600 shadow-sm text-sm py-1 px-2"
                  />
                  {inputOrSelect.focus && (
                    <>
                      <button
                        type="submit"
                        className="bg-indigo-600 border-0 py-1 px-2 text-white"
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
                        className="bg-white border border-neutral-200 text-gray-500 py-1 px-2"
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
