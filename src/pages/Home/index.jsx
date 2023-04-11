//import React, { useState, useEffect, useRef } from "react";
import ElementAccordionDisplay from 'Components/Home/ElementAccordionDisplay';
import ElementCarouselDisplay from 'Components/Home/ElementCarouselDisplay';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import FeaturedProducts from '../../Components/Home/FeaturedProducts';
import SocialShare from '../../Components/Home/SocialShare';

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
  }, [pageData]);

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
            return 'url(\'' + attributes.value + '\')';
          } else if (attributes.type == 'none') {
            return 'none';
          }
        }
      }

      return 'none';
    }
    return 'none';
  };

  const loadBackgroundType = (element) => {
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
          return attributes.type;
        }
        else {
          return '';
        }
      }

      return '';
    }
    return '';
  };

    const loadBackgroundDefaultStyle = (element) => {
      
      if (element.selectedVal != undefined) {
        if (Object.keys(element.selectedVal).length > 0) {
          const bgPropertyName = 'bg';

          let attributes;
          Object.entries(element.selectedVal).map(
            ([key, value]) => {
              
              if (key == bgPropertyName+'_bg_style')
              {
                attributes = value;
              } 
            }
          );


          if (attributes != undefined && Object.keys(attributes).length > 0) {
              if(attributes.value === 'fullbg')
              {
                  return 'outer';
              }
              else
              {
                  return 'inner';
              }
          }
        }

        return 'outer';
      }
      return 'outer';
  }

  const loadBackgroundImageClass = (element) => {
      
      if (element.selectedVal != undefined) {
        if (Object.keys(element.selectedVal).length > 0) {
          const bgPropertyName = 'bg';

          let attributes;
          Object.entries(element.selectedVal).map(
            ([key, value]) => {
              
              if (key == bgPropertyName)
              {
                attributes = value;
              } 
            }
          );

          let bgType = '';
          
          if (attributes != undefined && Object.keys(attributes).length > 0) {
            if (attributes.type == 'image') {
              bgType = 'image';
            }
          }
          if(bgType === 'image')
          {
            let imageClass = '';
            
            if('bg_bg_image_style' in element.selectedVal)
            {
              imageClass += ' ' + element.selectedVal.bg_bg_image_style.value;                                                          
            }
            if('bg_bg_image_position' in element.selectedVal)
            {
              imageClass += ' ' + element.selectedVal.bg_bg_image_position.value;                                                          
            }
            return imageClass;
          }
        }

        return '';
      }
      return '';
  }

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
                  if (typeof componentValue.properties == 'string') {
                    componentValue.properties = JSON.parse(
                      componentValue.properties,
                    );
                  }
                  
                  const backgroundDefault = loadBackgroundDefault(componentValue);
                  const backgroundStyle = loadBackgroundDefaultStyle(componentValue);
                  const backgroundImageClass = loadBackgroundImageClass(componentValue);
                  let additionalclass = '';
                  let innerDivClass = '';
                  if(componentValue.selectedVal && 'additionalclass' in componentValue.selectedVal)
                  {
                      additionalclass = componentValue.selectedVal.additionalclass.value;                                                          
                  }
                  if(componentValue.selectedVal && 'container' in componentValue.selectedVal)
                  {
                    if(componentValue.selectedVal.container.value == 'w-full')
                      additionalclass += ' container-fluid'; 
                    else
                      additionalclass += ' ' + componentValue.selectedVal.container.value + ' mx-auto ';                                                          
                  }
                  else
                  {
                    additionalclass += ' container mx-auto ';
                  }
                  if(componentValue.selectedVal && 'container_left_padding' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'pl-['+componentValue.selectedVal.container_left_padding.value+'px]';                                                          
                  }
                  if(componentValue.selectedVal && 'container_top_padding' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'pt-['+componentValue.selectedVal.container_top_padding.value+'px]';                                                          
                  }
                  if(componentValue.selectedVal && 'container_right_padding' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'pr-['+componentValue.selectedVal.container_right_padding.value+'px]';                                                            
                  }
                  if(componentValue.selectedVal && 'container_bottom_padding' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'pb-['+componentValue.selectedVal.container_bottom_padding.value+'px]';                                                            
                  }
                  if(componentValue.selectedVal && 'container_left_margin' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'ml-['+componentValue.selectedVal.container_left_margin.value+'px]';                                                            
                  }
                  if(componentValue.selectedVal && 'container_top_margin' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'mt-['+componentValue.selectedVal.container_top_margin.value+'px]';                                                            
                  }
                  if(componentValue.selectedVal && 'container_right_margin' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'mr-['+componentValue.selectedVal.container_right_margin.value+'px]';                                                            
                  }
                  if(componentValue.selectedVal && 'container_bottom_margin' in componentValue.selectedVal)
                  {
                      innerDivClass += ' ' + 'mb-['+componentValue.selectedVal.container_bottom_margin.value+'px]';                                                          
                  }

                  
                  return (
                    <div
                      key={index}
                      className={`w-full mx-auto ${componentValue.visibility == 'off' ? 'hidden' : ''} ${backgroundStyle === 'outer' ? backgroundImageClass : ''}`} 
                      
                      style={ loadBackgroundType(componentValue) == 'image' ? { backgroundImage: backgroundStyle === 'outer' ? backgroundDefault : 'none' } : { background: backgroundStyle === 'outer' ? backgroundDefault : 'none' }}
                      id={`div${componentValue.no}`}
                      // ref={ref => {
                      //     refArray.current[componentValue.uid] = ref; // took this from your guide's example.
                      // }}
                    >
                    <section className={`${additionalclass}`} >
                     <div className={`${innerDivClass} ${backgroundStyle === 'inner' ? backgroundImageClass : ''}`} style={ loadBackgroundType(componentValue) == 'image' ? { backgroundImage: backgroundStyle === 'inner' ? backgroundDefault : 'none' } : { background: backgroundStyle === 'inner' ? backgroundDefault : 'none' }} >     
                     {Object.keys(componentValue.properties).includes('PlainText') ? (<>
                      <div dangerouslySetInnerHTML={{ __html: componentValue.selectedVal?.PlainText.value }} />
                     </>) : ( <>
                        {Object.keys(componentValue.properties).includes(
                            'socialshare',
                          ) ? (<><SocialShare /> </>) : ( <>
                          
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
                                      
                                        {componentValue?.selectedVal?.Title && (
                                          <div class='text-box-h2 mb-4' id='Title'>
                                            {componentValue.selectedVal.Title.value ?? ''}
                                          </div>
                                        )}
                                        <ul className='w-full'>
                                          <ElementAccordionDisplay
                                          selected_Values={componentValue.selectedVal} 
                                            acValues={
                                              componentValue.selectedVal
                                                .FullAccordion.value
                                            }
                                          
                                          />
                                        </ul>
                                    
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className={componentValue.uuid}
                                        dangerouslySetInnerHTML={{
                                          __html: componentValue.html,
                                        }}
                                      ></div>
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )} </>)
                        }
                        </>
                        )
                      }
                    </div>  
                    </section>
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
