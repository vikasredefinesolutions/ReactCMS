/*Component Name: ElementCarousel
Component Functional Details: Element for Component ElementCarousel  
Created By: Vikas Patel
Created Date: 17th September 2022
Modified By: <Modified By Name>
Modified Date: <Modified Date> */

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const ElementCarouselDisplay = ({ bannerArr }) => {
  const showArrow =
    bannerArr.showArrow != undefined
      ? bannerArr.showArrow == 'On'
        ? true
        : false
      : true;
  const showIndicators =
    bannerArr.showIndicators != undefined
      ? bannerArr.showIndicators == 'On'
        ? true
        : false
      : true;
  const showThumb =
    bannerArr.showThumb != undefined
      ? bannerArr.showThumb == 'On'
        ? true
        : false
      : true;
  const autoPlay =
    bannerArr.autoPlay != undefined
      ? bannerArr.autoPlay == 'On'
        ? true
        : false
      : true;
  const infiniteLoop =
    bannerArr.infiniteLoop != undefined
      ? bannerArr.infiniteLoop == 'On'
        ? true
        : false
      : true;
  const stopOnHover =
    bannerArr.stopOnHover != undefined
      ? bannerArr.stopOnHover == 'On'
        ? true
        : false
      : true;
  const showStatus =
    bannerArr.showStatus != undefined
      ? bannerArr.showStatus == 'On'
        ? true
        : false
      : true;

  return (
    <>
      <section class="mainsection container mx-auto mt-20">
        {Object.keys(bannerArr).length > 0 && bannerArr.images != null && (
          <Carousel
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center">
                  <button
                    onClick={clickHandler}
                    className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="chevron-left w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center">
                  <button
                    onClick={clickHandler}
                    className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="chevron-right w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )
            }
            showStatus={showStatus}
            stopOnHover={stopOnHover}
            infiniteLoop={infiniteLoop}
            autoPlay={false}
            showArrows={showArrow}
            showIndicators={showIndicators}
            showThumbs={showThumb}
          >
            {bannerArr.images.map((image) => {
              return (
                <div key={image} className="relative">
                  <div className="overflow-hidden">
                    {image.image_or_video == 'Image' ? (
                      <img src={image.image_url} alt="corousel" />
                    ) : (
                      <>
                        {image.video_type == 'Youtube' ? (
                          <iframe
                            class="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${image.video_url}?rel=0`}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                          ></iframe>
                        ) : (
                          <iframe
                            class="p-0 w-full aspect-[7/3]"
                            src={`https://player.vimeo.com/video/${image.video_url}?autoplay=1&amp;loop=1&amp;background=1&amp;muted=1`}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                          ></iframe>
                        )}
                      </>
                    )}
                    {
                      // justify-start justify-end justify-center
                    }
                    <div
                      className={`flex items-center absolute ${
                        image.headline_font_size
                      } inset-0 p-1 lg:p-4 justify-${
                        image.text_pos ? image.text_pos : 'center'
                      } text-white`}
                    >
                      <div
                        class=""
                        style={{
                          background: `rgb(${image.text_bg_color}, ${image.bg_opacity})`,
                          padding: '20px',
                        }}
                      >
                        <div class="">{image.headline}</div>
                        {image.button_display == 'Yes' && (
                          <>
                            <div>
                              <a
                                href={image.button_link}
                                target={
                                  image.button_link_window ? '_blank' : ''
                                }
                                className={`btn ${image.button_text_transform} ${image.button_size} ${image.button_style}`}
                                rel="noreferrer"
                              >
                                {image.button_text}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </section>
    </>
  );
};

export default ElementCarouselDisplay;
