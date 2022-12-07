//import React, { useState, useEffect, useRef } from "react";
import ElementAccordionDisplay from 'Components/Home/ElementAccordionDisplay';
import ElementCarouselDisplay from 'Components/Home/ElementCarouselDisplay';
import { useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import * as helper from '../../Components/Home/Helper';
import ThankYou from '../thank-you';

const Home = (props) => {
  const storeId = useTypedSelector((state) => state.store.id);

  const slug = props.props?.slug;

  const pageData = props.props?.pageData;
  const [componentHtml, setComponentHtml] = useState([]);

  // const pathArray = document.location.pathname.split('/');
  // const slug = pathArray.at(-1);
  // const [pageData, setPageData] = useState([]);

  // const [componentHtml, setComponentHtml] = useState([]);

  useEffect(() => {
    // let pageId = pageData.id;
    document.title = pageData?.seTitle;
    if (pageData !== undefined) {
      setComponentHtml(pageData?.components);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getPageData = (pageId) => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },u
  //     body: {}

  //   };

  //   fetch(
  //     `https://www.redefinecommerce.net/API/api/topics/${pageId}`,
  //     requestOptions,
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //          setPageData(data.data);
  //       }
  //     });
  //}

  const loadBackgroundDefault = (element) => {
    if (element.selectedVal != undefined) {
      if (Object.keys(element.selectedVal).length > 0) {

          //console.log(element.selectedVal);

        const bgPropertyName = Object.keys(element.properties).find(
          (key) => key === 'bg',
        );
        let attributes;
        Object.entries(element.selectedVal).map(
          ([key, value]) => {
            if (key == bgPropertyName) 
              attributes = value;
          },
        );

        if (attributes != undefined && Object.keys(attributes).length > 0) {
          if (attributes.type == 'color') {
            return attributes.value;
          } else if (attributes.type == 'image') {
            return 'url("' + attributes.value + '")';
          } else if (attributes.type == 'none') {
            return 'none';
          }
        }
      }

      return 'none';
    }
    return 'none';
  };

  useEffect(() => {
    componentHtml.map((element, index) => {
      //let x = ReactDOM.findDOMNode(refArray.current[element.uid]);
      //  x.querySelectorAll('#div'+element.no)[0].innerHTML = element.uid;
      helper.updateSetProperties(element, index);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentHtml]);

  return (
    <>
      <div className="">
        <main>
          {pageData.components.length > 0 ? (
            pageData.components.map((componentValue, index) => {
              const backgroundDefault = loadBackgroundDefault(componentValue);
              return (
                <div
                  key={index}
                  className={`commondiv ${
                    componentValue.visibility == 'off' ? 'hidden' : ''
                  } mainsection container mx-auto`}
                  style={{ background: backgroundDefault }}
                  id={`div${componentValue.no}`}
                  // ref={ref => {
                  //     refArray.current[componentValue.uid] = ref; // took this from your guide's example.
                  // }}
                >
                  {Object.keys(componentValue.selectedVal).includes(
                    'carousel',
                  ) ? (
                    <>
                      <ElementCarouselDisplay
                        bannerArr={componentValue.selectedVal.carousel.value}
                      />
                    </>
                  ) : (
                    <>
                      <section class="mainsection container mx-auto mt-20">
                        {Object.keys(componentValue.selectedVal).includes(
                          'FullAccordion',
                        ) ? (
                          <>
                            <ul class="mt-4 w-full">
                              <ElementAccordionDisplay
                                acValues={
                                  componentValue.selectedVal.FullAccordion.value
                                }
                              />
                            </ul>
                          </>
                        ) : (
                          <>
                            <div
                              className="commondiv"
                              dangerouslySetInnerHTML={{
                                __html: componentValue.html,
                              }}
                            ></div>
                          </>
                        )}
                      </section>
                    </>
                  )}
                </div>
              );

              // return <div key={index} className="text-center p-5 border my-2" dangerouslySetInnerHTML={{ __html: comphtml }}></div>
            })
          ) : (
            <>
              <section classname="mainsection taillwind_content_block_22"></section>
            </>
          )}
        </main>
      </div>
      <div
        id="wrapperloading"
        style={{ position: 'fixed', 'z-index': '10000000' }}
      >
        <div id="loading"></div>
      </div>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      title: 'Vikas',
    },
  };
};

export default Home;
