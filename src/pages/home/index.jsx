//import React, { useState, useEffect, useRef } from "react";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import * as helper from "./Helper";
import ElementCarouselDisplay from "./ElementCarouselDisplay";
import ElementAccordionDisplay from "./ElementAccordionDisplay";
import { useTypedSelector } from '../../hooks';
import axios from "axios";

const Home = ({title}) => {
    const storeId = useTypedSelector((state) => state.store.id);

    const { asPath, pathname } = useRouter();
    const slug = asPath.replace("/", "");

    const [pageData, setPageData] = useState([]);
    const [componentHtml, setComponentHtml] = useState([]);

    // const pathArray = document.location.pathname.split('/');
    // const slug = pathArray.at(-1);
    // const [pageData, setPageData] = useState([]);

    // const [componentHtml, setComponentHtml] = useState([]);
    
    useEffect(() => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            store_id: storeId,
            slug: slug != undefined ? slug.replace('.html', '') : "",
          })
        };
        fetch(
            'https://www.redefinecommerce.net/API/api/front/get-page-type',
            requestOptions,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                 let pageId = data.data.id;
                 document.title = data.data?.meta_title;

                 (async () => {
                     axios.create({
                      baseURL: "https://www.redefinecommerce.net/API/api/",
                      headers: {
                        Accept: "application/json",
                      },
                    }).get(`front/topic/component/get/${pageId}/preview`).then((res)=>{
                        setComponentHtml(res.data);
                        getPageData(pageId);
                      }).catch((error)=>{
                          console.log(error, "Page Error");
                      });
                  })();

                
              } 
              });
              
    }, []);

    const getPageData = (pageId) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {}

      };

      fetch(
        `https://www.redefinecommerce.net/API/api/topics/${pageId}`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
             setPageData(data.data);
          } 
        });
    }

  
    const loadBackgroundDefault = (element) => {
      if(element.selectedVal != undefined)
      {
        if(Object.keys(element.selectedVal).length > 0)
        {
          const bgPropertyName = Object.keys(element.properties).find(key => element.properties[key] === "background");
          const attributes = Object.entries(element.selectedVal).map(([key, value]) => {
            if(key == bgPropertyName)
                return value;
            })[0];
  
            if (attributes != undefined && Object.keys(attributes).length > 0) {
                      
                      if(attributes.type == "color")
                      {
                          return attributes.value;
                      }
                      else if(attributes.type == "image")
                      {
                          return 'url("'+attributes.value+'")';
                      }
                      else if(attributes.type == "none")
                      {
                          return 'none';
                      }
                  }
        }
  
  
            
            return 'none';
      }
      return 'none';

    }

    useEffect(() => {
     
      componentHtml.map((element, index) => {
          //let x = ReactDOM.findDOMNode(refArray.current[element.uid]);
        //  x.querySelectorAll('#div'+element.no)[0].innerHTML = element.uid;
        helper.updateSetProperties(element, index);
           
      })

      }
    ,[componentHtml]);
   
  return (
   <>
     
    <div className="">
       <main>
            { componentHtml.length > 0 ? 
                componentHtml.map((componentValue)=>{
                const backgroundDefault = loadBackgroundDefault(componentValue);
                return(
                    <div className={`commondiv ${componentValue.visibility == "off" ? "hidden" : ""}`} style={{ background: backgroundDefault }} id={`div${componentValue.no}`} 
                    // ref={ref => {
                    //     refArray.current[componentValue.uid] = ref; // took this from your guide's example.
                    // }}        
                    >
                      {Object.keys(componentValue.selectedVal).includes("carousel") ? <>
                            <ElementCarouselDisplay bannerArr={componentValue.selectedVal.carousel.value} />
                      </> :
                      <>
                        <section class="mainsection container mx-auto mt-20">    
                        {Object.keys(componentValue.selectedVal).includes("FullAccordion") ? <>
                          <ul class="mt-4 w-full">
                            <ElementAccordionDisplay acValues={componentValue.selectedVal.FullAccordion.value} />
                          </ul>
                        </> :
                          <>
                            <div className="commondiv" dangerouslySetInnerHTML={{ __html: componentValue.html }}></div>
                          </>
                        }
                        </section>
                        </>
                      }
                    </div>
                    
                    )
                
                // return <div key={index} className="text-center p-5 border my-2" dangerouslySetInnerHTML={{ __html: comphtml }}></div>
                }) : <>
                <section classname="mainsection taillwind_content_block_22">
                
                </section></>
            }
        </main>
      

     </div>
     <div id="wrapperloading" style={{"position": "fixed","z-index": "10000000"}}>
      <div id="loading"></div>
      </div>
          </>

      
      
   
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      title: 'Vikas'
    }
  }
}

export default Home;
