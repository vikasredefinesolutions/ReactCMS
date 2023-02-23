/*Component Name: ElementAccordionDisplay
Component Functional Details: User can create or update ElementAccordionDisplay master details from here.
Created By: Vikas Patel
Created Date: 16th September 2022
Modified By: <Modified By Name>
Modified Date: <Modified Date> */
//import { useEffect, useState } from 'react';

const ElementAccordionDisplay = ({ acValues, acClass, acBgColor }) => {
  const iconArr = {
    keyboard_arrow_up: 'keyboard_arrow_down',
    keyboard_arrow_down: 'keyboard_arrow_up',
    remove_circle_outline: 'add_circle_outline',
    add_circle_outline: 'remove_circle_outline',
  };

  const showHideAccordion = (event) => {
    if (event.target.querySelector('.pointer-class')) {
      let symbolobj = event.target.querySelector('.pointer-class');
      symbolobj.innerHTML = iconArr[symbolobj.innerHTML];

      if (
        event.currentTarget
          .querySelector('.ac-description')
          .classList.contains('hidden')
      )
        event.currentTarget
          .querySelector('.ac-description')
          .classList.remove('hidden');
      else
        event.currentTarget
          .querySelector('.ac-description')
          .classList.add('hidden');
    }
  };

  return (
    <>
      {acValues.length > 0 && (
        <>
          {acValues.map((acValue, index) => {
            return (
              <li
                key={index}
                className={`mb-4 last:mb-0 hasarr clonnable border-b border-black ${acClass}`}
                onClick={showHideAccordion}
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading px-2 py-4 border-0 hover:border-0'
                  style={{
                    backgroundColor: acBgColor,
                  }}
                >
                  <div className='text-defaule-text'>{acValue.title}</div>
                  <span className='material-icons-outlined ml-3 pointer-class'>
                    {acValue.openstatus == 'Yes' ? (
                      <>
                        {acValue.icon == 'caret'
                          ? 'keyboard_arrow_down'
                          : 'remove_circle_outline'}
                      </>
                    ) : (
                      <>
                        {acValue.icon == 'caret'
                          ? 'keyboard_arrow_up'
                          : 'add_circle_outline'}
                      </>
                    )}
                  </span>
                </button>
                <div
                  className={`text-defaule-text px-2 mt-2 pb-4 ac-description ${
                    acValue.openstatus != 'Yes' ? 'hidden' : ''
                  }`}
                >
                  <div
                    className='text-defaule-text mt-2'
                    dangerouslySetInnerHTML={{ __html: acValue.desc }}
                  ></div>
                </div>
              </li>
            );
          })}
        </>
      )}
    </>
  );
};

export default ElementAccordionDisplay;
