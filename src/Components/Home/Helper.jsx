import ElementAccordionDisplay from 'Components/Home/ElementAccordionDisplay';

import * as ReactDOMServer from 'react-dom/server';
import * as dynamicFunctions from './DynamicFunction';

export const updateSetProperties = (element) => {
  let x = document.getElementById('div' + element.no);
  if (element.selectedVal != undefined && element.selectedVal != '') {
    //      let elProperties;
    Object.entries(element.selectedVal).map(([key, value]) => {
      if (typeof element.properties === 'string') {
        element.properties = JSON.parse(element.properties);
      }

      if (value.type == 'text') {
        if (x.querySelectorAll('#' + key).length > 0) {
          x.querySelectorAll('#' + key)[0].innerHTML = value.value;
        }
      }

      if (value.type == 'transform') {
        let propName = key.replace('_text_transform', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].classList.add(value.value);
        }
      }

      if (value.type == 'image') {
        if (x.querySelectorAll('#' + key).length > 0) {
          if (x.querySelectorAll('#' + key + '_img').length > 0) {
            x.querySelectorAll('#' + key + '_img')[0].src = value.value;
          } else {
            x.querySelectorAll('#' + key)[0].innerHTML =
              '<a href="javascript:void(0)" id="' +
              key +
              '_img_link"><img id="' +
              key +
              '_img" className="" src="' +
              value.value +
              '" alt="" title="" /> </a>';
          }
        }
      }

      if (value.type == 'alt') {
        //let propname = key.replace("_alt", "");
        if (x.querySelectorAll('#' + key).length > 0) {
          if (x.querySelectorAll('#' + key + '_img').length > 0) {
            x.querySelectorAll('#' + key + '_img')[0].alt = value.value;
            x.querySelectorAll('#' + key + '_img')[0].title = value.value;
          } else {
            x.querySelectorAll('#' + key)[0].innerHTML =
              '<a href="javascript:void(0)" id="' +
              key +
              '_img_link"><img id="' +
              key +
              '_img" className="" src="" alt="' +
              value.value +
              '" title="' +
              value.value +
              '" /> </a>';
          }
        }
      }

      if (value.type == 'fontsize') {
        let propname = key.replace('_font_size', '');
        x.querySelectorAll('#' + propname)[0].classList.add(value.value);

        if (element.properties.TextAppearance != null) {
          if (element.properties.TextAppearance.fields != undefined) {
            let fields = element.properties.TextAppearance.fields.split(',');
            let textBgColor = propname.text_bg_color ?? '';
            let bgOpacity = propname.bg_opacity ?? '1';
            let fontSize = propname.font_size ?? '';
            let textPos = propname.text_pos ?? 'center';

            fields.forEach((el) => {
              if (x.querySelectorAll('#' + el + '_pos').length > 0) {
                x.querySelectorAll('#' + el + '_pos')[0].className =
                  'flex items-center absolute ' +
                  fontSize +
                  ' inset-0 p-1 lg:p-4 text-white justify-' +
                  textPos;
                x.querySelectorAll('#' + el + '_bg')[0].style =
                  'background: rgb(' +
                  textBgColor +
                  ', ' +
                  bgOpacity +
                  '); padding: 20px';
                //x.querySelectorAll('#'+el)[0].className = "pb-2";
              }
            });
          }
        }
      }

      if (value.type == 'appearance') {
        let propname = value.value;
        if (element.properties.TextAppearance?.fields != undefined) {
          let fields = element.properties.TextAppearance.fields.split(',');
          let textBgColor = propname.text_bg_color ?? '';
          let bgOpacity = propname.bg_opacity ?? '1';
          let fontSize = propname.font_size ?? '';
          let textPos = propname.text_pos ?? 'center';

          fields.forEach((el) => {
            if (x.querySelectorAll('#' + el + '_pos').length > 0) {
              x.querySelectorAll('#' + el + '_pos')[0].className =
                'flex items-center absolute ' +
                fontSize +
                ' inset-0 p-1 lg:p-4 text-white justify-' +
                textPos;
              x.querySelectorAll('#' + el + '_bg')[0].style =
                'background: rgb(' +
                textBgColor +
                ', ' +
                bgOpacity +
                '); padding: 20px';
              x.querySelectorAll('#' + el)[0].className = 'pb-2';
            }
          });
        }
      }

      if (value.type == 'link') {
        if (x.querySelectorAll('#' + key).length > 0) {
          if (x.querySelectorAll('#' + key + '_img_link').length > 0) {
            x.querySelectorAll('#' + key + '_img_link')[0].href = value.value;
          } else {
            x.querySelectorAll('#' + key)[0].innerHTML =
              '<a href="' +
              value.value +
              '" id="' +
              key +
              '_img_link"><img id="' +
              key +
              '_img" className="" src=""/> </a>';
          }
        }
      }

      if (value.type == 'Youtube') {
        if (x.querySelectorAll('#' + key).length > 0) {
          x.querySelectorAll('#' + key)[0].innerHTML =
            '<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/' +
            value.value +
            '?rel=0" allow="autoplay; encrypted-media" frameBorder="0"></iframe>';
        }
      }

      if (value.type == 'Vimeo') {
        if (x.querySelectorAll('#' + key).length > 0) {
          x.querySelectorAll('#' + key)[0].innerHTML =
            '<iframe src="https://player.vimeo.com/video/' +
            value.value +
            '?background=1" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen="" style="" className="w-full aspect-video"></iframe>';
        }
      }

      if (value.type == 'text') {
        if (x.querySelectorAll('#' + key).length > 0) {
          x.querySelectorAll('#' + key)[0].innerHTML = value.value;
        }
      }

      if (value.type == 'btn_size') {
        let propName = key.replace('_size', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].classList.add(value.value);
        }
      }

      if (value.type == 'btn_transform') {
        let propName = key.replace('_text_transform', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].classList.add(value.value);
        }
      }

      if (value.type == 'btn_link') {
        let propName = key.replace('_link', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].href = value.value;
        }
      }

      if (value.type == 'btn_style') {
        let propName = key.replace('_style', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].classList.add(value.value);
        }
      }

      if (value.type == 'btn_size') {
        let propName = key.replace('_size', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].classList.add(value.value);
        }
      }

      if (value.type == 'btn_link_target') {
        let propName = key.replace('_window', '');
        if (x.querySelectorAll('#' + propName).length > 0) {
          x.querySelectorAll('#' + propName)[0].target = value.value;
        }
      }

      if (value.type == 'btn_display') {
        if (value.value == 'No') {
          let propName = key.replace('_display', '');
          if (x.querySelectorAll('#' + propName).length > 0) {
            x.querySelectorAll('#' + propName)[0].remove();
          }
        }
      }

      if (value.type == 'accordion' && key != 'FullAccordion') {
        // loop for accordion ittem
        let ourComponetiNString = ReactDOMServer.renderToStaticMarkup(
          <ElementAccordionDisplay acValues={value.value} />,
        );
        if (x.querySelectorAll('#' + value.type).length > 0) {
          x.querySelectorAll('#' + value.type)[0].innerHTML =
            ourComponetiNString;
        }
      }

      if (value.type == 'side_change' && key == 'Sidechange') {
        x.querySelectorAll('#left-section')[0].classList.remove('lg:order-2');
        x.querySelectorAll('#left-section')[0].classList.remove('lg:order-1');

        x.querySelectorAll('#right-section')[0].classList.remove('lg:order-2');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:order-1');

        x.querySelectorAll('#left-section')[0].classList.add(
          value.value.left ?? 'lg:order-1',
        );
        x.querySelectorAll('#right-section')[0].classList.add(
          value.value.right ?? 'lg:order-2',
        );

        //console.log(key, value);
      }

      if (value.type == 'carousel') {
        if (
          window.location.href.includes('Page/edit') &&
          !window.location.href.includes('Page/edit/optimize')
        ) {
          let showIndicators = value.value.showIndicators ?? 'On';
          let showArrow = value.value.showArrow ?? 'On';
          let showStatus = value.value.showStatus ?? 'On';
          let showThumb = value.value.showThumb ?? 'On';

          let strHTML = displayCarousel(
            showIndicators,
            showArrow,
            showStatus,
            showThumb,
            value.value,
          );

          x.querySelectorAll('#banner_display')[0].innerHTML = strHTML;
        }
      }
      if (value.type == 'dynamic') {
        if (element.properties[value.type] !== undefined) {
          let functionName = element.properties[value.type].html;

          let strHTML = dynamicFunctions[functionName](value.value, element);
          x.querySelectorAll(
            '#' + element.properties[value.type].html,
          )[0].innerHTML = strHTML;

          // if(element.properties[value.type].html == "boximage")
          // {
          //   let strHTML = boxHTMLDisplay(value.value);
          //   x.querySelectorAll("#"+element.properties[value.type].html)[0].innerHTML = strHTML;
          // }
          // else if(element.properties[value.type].html == "multipleImages")
          // {
          //   let strHTML = multipleImages(value.value);
          //   x.querySelectorAll("#"+element.properties[value.type].html)[0].innerHTML = strHTML;
          // }
        }
      }

      if (key == 'SectionImageText') {
        if (element.properties[key] !== undefined) {
          let finalArr = value.value;
          let classArr = [];
          let column = 0;
          if (!Object.keys(finalArr).includes('Right')) {
            //column = column + 1;
          } else if (finalArr.Right.display == 'Yes') {
            column = column + 1;
          }

          if (!Object.keys(finalArr).includes('Center')) {
            //column = column + 1;
          } else if (finalArr.Center.display == 'Yes') {
            column = column + 1;
          }

          if (!Object.keys(finalArr).includes('Left')) {
            //column = column + 1;
          } else if (finalArr.Left.display == 'Yes') {
            column = column + 1;
          }
          if (column == 3) {
            classArr = ['lg:w-1/3', 'px-3', 'md:w-1/2'];
          } else if (column == 2) {
            classArr = ['lg:w-1/2', 'px-3', 'md:w-1/2'];
          } else if (column == 1) {
            classArr = [];
          }
          // classArr = [];

          if (Object.keys(finalArr).includes('Left')) {
            if (finalArr.Left.display === 'Yes') {
              displayClass('sectionLeft', classArr, x);
              displaySection(finalArr.Left, 'Left', x);
              x.querySelectorAll('#sectionLeft')[0].classList.remove('hidden');
            } else {
              x.querySelectorAll('#sectionLeft')[0].classList.add('hidden');
            }
          } else {
            x.querySelectorAll('#sectionLeft')[0].classList.add('hidden');
            x.querySelectorAll('#sectionLeft')[0].innerHTML =
              '<div className="p-4 lg:p-8 flex w-full items-center"></div>';
          }

          if (Object.keys(finalArr).includes('Center')) {
            if (finalArr.Center.display == 'Yes') {
              displayClass('sectionCenter', classArr, x);
              displaySection(finalArr.Center, 'Center', x);
              x.querySelectorAll('#sectionCenter')[0].classList.remove(
                'hidden',
              );
            } else {
              x.querySelectorAll('#sectionCenter')[0].classList.add('hidden');
            }
          } else {
            x.querySelectorAll('#sectionCenter')[0].classList.add('hidden');
            x.querySelectorAll('#sectionCenter')[0].innerHTML =
              '<div className="p-4 lg:p-8 flex w-full items-center"></div>';
          }
          if (Object.keys(finalArr).includes('Right')) {
            if (finalArr.Right.display == 'Yes') {
              displayClass('sectionRight', classArr, x);
              displaySection(finalArr.Right, 'Right', x);
              x.querySelectorAll('#sectionRight')[0].classList.remove('hidden');
            } else {
              x.querySelectorAll('#sectionRight')[0].classList.add('hidden');
            }
          } else {
            x.querySelectorAll('#sectionRight')[0].classList.add('hidden');
            x.querySelectorAll('#sectionRight')[0].innerHTML =
              '<div className="p-4 lg:p-8 flex w-full items-center"></div>';
          }
        }
      }
      // layout
      // sidechange
      // Here we will copy all properties and write condition to display image/text
      // sequence and layout options
    });

    let imgDisplay = true;
    let textDisplay = true;
    let layoutAdjust = false;

    if (
      Object.keys(element.selectedVal).includes(
        'ElementConfiguration_Image_display',
      )
    ) {
      if (
        element.selectedVal.ElementConfiguration_Image_display.value == 'No'
      ) {
        imgDisplay = false;
        x.querySelectorAll('#left-section')[0].classList.add('hidden');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-1/2');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-3/5');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-2/3');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-3/4');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-4/5');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:w-5/6');
      }
    }

    if (
      Object.keys(element.selectedVal).includes(
        'ElementConfiguration_Text_display',
      )
    ) {
      if (element.selectedVal.ElementConfiguration_Text_display.value == 'No') {
        textDisplay = false;
        x.querySelectorAll('#right-section')[0].classList.add('hidden');
        removeWidthClass(x, 'Left');
      }
    }

    if (textDisplay && imgDisplay) {
      //from here code is pending
      if (
        Object.keys(element.selectedVal).includes(
          'ElementConfiguration_Image_position',
        )
      ) {
        // check if image position is Left Right
        x.querySelectorAll('#left-section')[0].classList.remove('lg:order-2');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:order-1');
        x.querySelectorAll('#left-section')[0].classList.remove('lg:order-1');
        x.querySelectorAll('#right-section')[0].classList.remove('lg:order-2');

        if (
          element.selectedVal.ElementConfiguration_Image_position.value ==
          'Left'
        ) {
          layoutAdjust = true;
          x.querySelectorAll('#left-section')[0].classList.add('lg:order-1');
          x.querySelectorAll('#right-section')[0].classList.add('lg:order-2');
        } else if (
          element.selectedVal.ElementConfiguration_Image_position.value ==
          'Right'
        ) {
          layoutAdjust = true;
          x.querySelectorAll('#left-section')[0].classList.add('lg:order-2');
          x.querySelectorAll('#right-section')[0].classList.add('lg:order-1');
        } else if (
          element.selectedVal.ElementConfiguration_Image_position.value == 'Top'
        ) {
          x.querySelectorAll('#left-section')[0].classList.add('lg:order-2');
          x.querySelectorAll('#right-section')[0].classList.add('lg:order-1');
        } else if (
          element.selectedVal.ElementConfiguration_Image_position.value ==
          'Bottom'
        ) {
          x.querySelectorAll('#left-section')[0].classList.add('lg:order-1');
          x.querySelectorAll('#right-section')[0].classList.add('lg:order-2');
        }
      }

      if (layoutAdjust && Object.keys(element.selectedVal).includes('Layout')) {
        let layout = element.selectedVal.Layout;
        removeWidthClass(x);
        if (layout == '50-50') {
          x.querySelectorAll('#left-section')[0].classList.add('lg:w-1/2');
          x.querySelectorAll('#right-section')[0].classList.add('lg:w-1/2');
        } else if (layout == '33-66') {
          x.querySelectorAll('#left-section')[0].classList.add('lg:w-1/3');
          x.querySelectorAll('#right-section')[0].classList.add('lg:w-2/3');
        } else if (layout == '25-75') {
          x.querySelectorAll('#left-section')[0].classList.add('lg:w-1/4');
          x.querySelectorAll('#right-section')[0].classList.add('lg:w-3/4');
        }
      }
    }
  }
};

export const displayCarousel = (
  showIndicators,
  showArrow,
  showStatus,
  showThumb,
  dataArr,
) => {
  let strHTML = `<div className="carousel-root">
  <div className="carousel carousel-slider" style="width: 100%;">`;
  if (showIndicators == 'On') {
    strHTML += '<ul className="control-dots">';
    if (dataArr.images != undefined && dataArr.images.length > 0) {
      dataArr.images.map((data, index) => {
        if (index == 0)
          strHTML += `<li className="dot selected" role="button" tabindex="0" aria-label="slide item 1" value="0"></li>`;
        else
          strHTML +=
            `<li className="dot" role="button" tabindex="0" aria-label="slide item 2" value="` +
            index +
            `"></li>`;
        strHTML += `</ul>`;
      });
    }
  }

  if (showArrow == 'On') {
    strHTML += `<button type="button" aria-label="previous slide / item"
      className="control-arrow control-prev control-disabled"></button>`;
  }

  strHTML += `<div className="slider-wrapper axis-horizontal">`;

  strHTML += `<ul className="slider animated" style="transform: translate3d(0px, 0px, 0px); transition-duration: 350ms;">`;

  if (dataArr.images != undefined && dataArr.images.length > 0) {
    dataArr.images.map((data) => {
      strHTML += `
          <li className="slide selected previous">
              <div>`;
      if (data.image_or_video == undefined || data.image_or_video == 'Image') {
        strHTML += `<img src="` + data.image_url + `">`;
      } else {
        if (data.video_type == 'Youtube') {
          strHTML +=
            `<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/` +
            data.video_url +
            `?rel=0" allow="autoplay; encrypted-media" frameBorder="0"></iframe>`;
        } else if (data.video_type == 'Vimeo') {
          strHTML +=
            `<iframe className="w-full aspect-video" src="https://player.vimeo.com/video/` +
            data.video_url +
            `?background=1"></iframe>`;
        }
      }
      strHTML +=
        `<p className="legend">` +
        data.headline +
        `</p>
              </div>
          </li>`;
    });
  }

  strHTML += `</ul>
      </div>`;
  if (showArrow == 'On') {
    strHTML += `<button type="button" aria-label="next slide / item" className="control-arrow control-next"></button>`;
  }

  if (showStatus == 'On') {
    strHTML += `<p className="carousel-status">1 of 3</p>`;
  }
  strHTML += `</div>`;

  if (showThumb == 'On') {
    strHTML += `
              <div className="carousel">
                  <div className="thmbs-wrapper axis-vertical"><button type="button"
                          className="control-arrow control-prev control-disabled" aria-label="previous slide / item"></button>
                      <ul className="thumbs animated" style="transform: translate3d(0px, 0px, 0px); transition-duration: 350ms;">`;
    if (dataArr.images != undefined && dataArr.images.length > 0) {
      dataArr.images.map((data) => {
        strHTML +=
          `
                                  <li className="thumb selected" aria-label="slide item 1" style="width: 80px;" role="button" tabindex="0">
                                      <img
                                          src="` +
          data.image_url +
          `">
                                  </li>`;
      });
    }

    strHTML += `</ul><button type="button" className="control-arrow control-next control-disabled"
                          aria-label="next slide / item"></button>
                  </div>
              </div>`;
  }
  strHTML += `</div>`;
  return strHTML;
};

export const displayClass = (divid, classArr, x) => {
  x.querySelectorAll('#' + divid)[0].classList.remove('lg:w-1/3');
  x.querySelectorAll('#' + divid)[0].classList.remove('px-3');
  x.querySelectorAll('#' + divid)[0].classList.remove('md:w-1/2');
  x.querySelectorAll('#' + divid)[0].classList.remove('lg:w-1/2');
  classArr.forEach((value) => {
    x.querySelectorAll('#' + divid)[0].classList.add(value);
  });
};

export const displaySection = (obj, side, x) => {
  let strHTML = '';
  if (obj.contentType == 'Image') {
    strHTML += '<div className="flex">';
    strHTML +=
      '<a title="' +
      obj.image_alt +
      '" href="' +
      obj.image_link +
      '" className="hrefurl no-underline">';
    strHTML +=
      '<img className="w-full" src="' +
      obj.image +
      '" alt="' +
      obj.image_alt +
      '" title="' +
      obj.image_alt +
      '">';
    strHTML += '<div className="text-center w-full bg-gray-50">';
    if (obj.headline != '' && obj.headline != null)
      strHTML +=
        '<div className="text-base font-semibold p-4">' +
        obj.headline +
        '</div>';
    strHTML += '</div>';

    //strHTML += '</div>';
    strHTML += '</a>';
    strHTML += '</div>';
  } else {
    strHTML += '<div className="p-4 lg:p-8 flex w-full items-center">';
    strHTML += '<div className="w-full">';
    strHTML += '<div className="text-sub-title">' + obj.headline + '</div>';
    strHTML +=
      '<div className="text-default-text mt-2">' + obj.description + '</div>';
    strHTML += '</div>';
    strHTML += '</div>';
  }
  x.querySelectorAll('#section' + side)[0].innerHTML = strHTML;
};

export const removeWidthClass = (x, type = 'Both') => {
  if (type == 'Left' || type == 'Both') {
    x.querySelectorAll('#left-section')[0].classList.remove('lg:w-1/2');
    x.querySelectorAll('#left-section')[0].classList.remove('lg:w-1/3');
    x.querySelectorAll('#left-section')[0].classList.remove('lg:w-1/4');
  }
  if (type == 'Left' || type == 'Both') {
    x.querySelectorAll('#right-section')[0].classList.remove('lg:w-1/2');
    x.querySelectorAll('#right-section')[0].classList.remove('lg:w-2/3');
    x.querySelectorAll('#right-section')[0].classList.remove('lg:w-3/4');
  }
};

export const showMsg = () => {
  //  alert('s');
};
