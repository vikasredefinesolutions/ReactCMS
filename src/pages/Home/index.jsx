//import React, { useState, useEffect, useRef } from "react";
import ElementAccordionDisplay from 'Components/Home/ElementAccordionDisplay';
import ElementCarouselDisplay from 'Components/Home/ElementCarouselDisplay';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import FeaturedProducts from '../../Components/Home/FeaturedProducts';

import DIHomePage from '../../Components/Home/DIHomePage';
import * as helper from '../../Components/Home/Helper';
const Home = (props) => {
  const pageData = props.props?.pageData;
  const [componentHtml, setComponentHtml] = useState([]);
  const storeId = useTypedSelector((state) => state.store.id);
  const { topic_set_isCMS } = useActions();

  // const pathArray = document.location.pathname.split('/');
  // const slug = pathArray.at(-1);
  // const [pageData, setPageData] = useState([]);

  // const [componentHtml, setComponentHtml] = useState([]);

  useEffect(() => {
    topic_set_isCMS(true);
    return () => {
      topic_set_isCMS(false);
    };
  }, []);

  useEffect(() => {
    // let pageId = pageData.id;
    // document.title = pageData?.seTitle;
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
        const bgPropertyName = 'bg';
        // Object.keys(JSON.parse(element.properties)).find(
        //   (key) => JSON.parse(element.properties)[key] === 'background',
        // );

        let attributes;
        Object.entries(element.selectedVal).map(([key, value]) => {
          if (key == bgPropertyName) {
            attributes = value;
          }
        });

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
      {storeId === 22 &&
      (props.props.slug === '/' || props.props.slug === '') ? (
        <>
          <DIHomePage storeId={storeId}></DIHomePage>
        </>
      ) : (
        <>
          <div className=''>
            {/* {featuredItems?.products && (
          <FeaturedItems
            brands={__constant._Home.featuredItems.brands}
            products={featuredItems.products}
          />          
        )}*/}
            <main>
              {pageData?.components && pageData?.components.length > 0 ? (
                pageData.components.map((componentValue, index) => {
                  if (typeof componentValue.selectedVal == 'string') {
                    componentValue.selectedVal = JSON.parse(
                      componentValue.selectedVal,
                    );
                  }
                  const backgroundDefault =
                    loadBackgroundDefault(componentValue);

                  let additionalclass = '';
                  if (
                    componentValue.selectedVal &&
                    Object.keys(componentValue.selectedVal).includes(
                      'additionalclass',
                    )
                  ) {
                    additionalclass =
                      componentValue.selectedVal.additionalclass.value;
                  }
                  return (
                    <div
                      key={index}
                      className={`commondiv ${additionalclass} ${
                        componentValue.visibility == 'off' ? 'hidden' : ''
                      }`}
                      style={{ background: backgroundDefault }}
                      id={`div${componentValue.no}`}
                      // ref={ref => {
                      //     refArray.current[componentValue.uid] = ref; // took this from your guide's example.
                      // }}
                    >
                      {Object.keys(componentValue.selectedVal).includes(
                        'featuredproducts_section_title',
                      ) ||
                      Object.keys(componentValue.selectedVal).includes(
                        'featuredproducts_product_count',
                      ) ? (
                        <>
                          <FeaturedProducts
                            dataArr={componentValue.selectedVal}
                          />
                        </>
                      ) : (
                        <>
                          {Object.keys(componentValue.selectedVal).includes(
                            'carousel',
                          ) ? (
                            <>
                              <ElementCarouselDisplay
                                bannerArr={
                                  componentValue.selectedVal.carousel.value
                                }
                              />
                            </>
                          ) : (
                            <>
                              {Object.keys(componentValue.selectedVal).includes(
                                'FullAccordion',
                              ) ? (
                                <>
                                  <section className='mainsection container mx-auto mt-6  overflow-hidden'>
                                    {componentValue?.selectedVal?.Title && (
                                      <div class='text-box-h2 mb-4' id='Title'>
                                        {componentValue.selectedVal.Title.value}
                                      </div>
                                    )}
                                    <ul className='mt-4 w-full'>
                                      <ElementAccordionDisplay
                                        acValues={
                                          componentValue.selectedVal
                                            .FullAccordion.value
                                        }
                                        acClass={
                                          componentValue.selectedVal
                                            ?.FullAccordion_accordion_class
                                            ?.value
                                        }
                                        acBgColor={
                                          componentValue.selectedVal
                                            ?.FullAccordion_ac_background?.value
                                        }
                                      />
                                    </ul>
                                  </section>
                                </>
                              ) : (
                                <>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: componentValue.html,
                                    }}
                                  ></div>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  );

                  // return <div key={index} className="text-center p-5 border my-2" dangerouslySetInnerHTML={{ __html: comphtml }}></div>
                })
              ) : (
                <>
                  <section className='mainsection taillwind_content_block_22'></section>
                </>
              )}
            </main>
          </div>
          <div
            id='wrapperloading'
            style={{ position: 'fixed', zIndex: '10000000' }}
          >
            <div id='loading'></div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
