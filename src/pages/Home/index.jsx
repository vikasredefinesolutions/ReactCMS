//import React, { useState, useEffect, useRef } from "react";
import ElementAccordionDisplay from 'Components/Home/ElementAccordionDisplay';
import ElementCarouselDisplay from 'Components/Home/ElementCarouselDisplay';
import FeaturedItems from 'Components/Home/FeaturedItems';
import { useTypedSelector } from 'hooks';
import { __constant } from 'page.config';
import { useEffect, useState } from 'react';
import * as helper from '../../Components/Home/Helper';

const Home = (props) => {
  const { featuredItems } = props;
  const pageData = props.props?.pageData;
  const [componentHtml, setComponentHtml] = useState([]);

  // const pathArray = document.location.pathname.split('/');
  // const slug = pathArray.at(-1);
  // const [pageData, setPageData] = useState([]);

  // const [componentHtml, setComponentHtml] = useState([]);

  useEffect(() => {
    // let pageId = pageData.id;
    document.title = pageData?.seTitle;
    if (pageData.components !== undefined) {
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
        const bgPropertyName = Object.keys(element.properties).find(
          (key) => element.properties[key] === 'background',
        );
        const attributes = Object.entries(element.selectedVal).map(
          ([key, value]) => {
            if (key == bgPropertyName) return value;
          },
        )[0];

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
    componentHtml?.map((element, index) => {
      //let x = ReactDOM.findDOMNode(refArray.current[element.uid]);
      //  x.querySelectorAll('#div'+element.no)[0].innerHTML = element.uid;
      helper.updateSetProperties(element, index);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentHtml]);

  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);

  return (
    <>
      <>{storeTypeId} - dummy text</>
      <div className="">
        {featuredItems?.products && (
          <FeaturedItems
            brands={__constant._Home.featuredItems.brands}
            products={featuredItems.products}
          />
        )}
        <main>
          {pageData?.components && pageData?.components.length > 0 ? (
            pageData.components.map((componentValue, index) => {
              const backgroundDefault = loadBackgroundDefault(componentValue);
              return (
                <div
                  key={index}
                  className={`commondiv ${
                    componentValue.visibility == 'off' ? 'hidden' : ''
                  }`}
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
              <section className="mainsection taillwind_content_block_22"></section>
            </>
          )}
        </main>
      </div>
      <div
        id="wrapperloading"
        style={{ position: 'fixed', zIndex: '10000000' }}
      >
        <div id="loading"></div>
      </div>
    </>
  );
};

export default Home;
