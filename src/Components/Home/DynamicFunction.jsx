export const numberdescriptionblock = (dataArr, selectedObj) => {
  let strHTML = '';
  if (dataArr.length > 0) {
    let count = 1;
    dataArr.forEach(function (item) {
      strHTML += '<div class="w-full lg:w-1/3 px-4 mb-8">';
      strHTML +=
        '<div class="g-gray-50 text-center p-6 rounded" style="' +
        (item.BlockBg ? 'background: ' + item.BlockBg + ';' : '') +
        '">';
      strHTML +=
        '<div class="inset-x-0 -mt-6 flex justify-center items-center w-12 h-12 mx-auto rounded-full bg-gray-500 text-gray-50 font-bold font-heading">';
      if (item.ImageNumber === 'Number') strHTML += count;
      else strHTML += '<img src="' + item.ImageNumber_image + '" />';
      count++;
      strHTML += '</div>';
      strHTML += '<div class="text-box-h4 mt-4">' + item.Headline + '</div>';
      strHTML += '<div class="text-box-h4 mt-4">';
      strHTML += item.Description;
      strHTML += '</div>';
      strHTML += '</div>';
      strHTML += '</div>';
    });
  }

  return strHTML;
};
export const numberingdiv = (dataArr, selectedObj) => {
  let strHTML = '';
  if (dataArr?.length) {
    let count = 1;
    dataArr.forEach(function (item) {
      strHTML += '<div className="flex items-start mb-6">';
      strHTML +=
        '<div className="mr-10 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-gray-500 text-gray-50 font-bold font-heading">' +
        count +
        '</div>';
      strHTML += '<div className="max-w-xs">';
      strHTML += '<div className="text-box-p leading-loose">';
      strHTML += item.Description;
      strHTML += '</div>';
      strHTML += '</div>';
      strHTML += '</div>';
    });
  }
  return strHTML;
};

export const boximage = (dataArr, selectedObj) => {
  let strHTML = '';
  if (dataArr.length > 0) {
    dataArr.forEach(function (item) {
      let className;
      if (item.colcount == 2) className = 'lg:w-1/2';
      else if (item.colcount == 3) className = 'lg:w-1/3';
      else className = 'lg:w-1/4';
      strHTML +=
        '<div className="w-full ' + className + ' px-3 md:w-1/3 mt-6">';
      // strHTML += '<div className="flex justify-center pb-5">';
      // strHTML += '<div className="btn-primary rounded-full w-10 h-10 flex justify-center items-center text-base text-white font-semibold">'+item.index+'</div>';
      // strHTML += '</div>';

      strHTML += '<div className="border border-gray-50 px-2 py-2">';
      let clName = 'flex justify-center';
      let aprData = {};
      let textPos = 'bottom';
      let headLine = '';
      let textBg = 'text-center bg-white w-full';

      let fontSize = 'text-base';
      let bgOpacity = 1;
      let bgColor = '';

      var buttonHTML = '';
      if (
        item.Button_display != undefined &&
        item.Button_display == 'Yes' &&
        item.Button_text != '' &&
        item.Button_text != null
      ) {
        buttonHTML += '<div className="mt-5 mb-5">';
        buttonHTML += '<a target="" href="' + item.Button_link + '" className="' + item.Button_size + ' ' + item.Button_style + '">';
        buttonHTML += item.Button_text;
        buttonHTML += '</a>';
        buttonHTML += '</div>';
      }

      //flex items-center absolute text-3xl inset-0 p-1 lg:p-4 text-white justify-center
      //console.log("ARD", selectedObj.selectedVal);
      if (selectedObj.selectedVal.TextAppearance != undefined) {
        aprData = selectedObj.selectedVal.TextAppearance.value;

        if (aprData.text_pos != undefined) {
          textPos = aprData.text_pos;
          fontSize = aprData.font_size;
          bgOpacity = aprData.bg_opacity;
          bgColor = aprData.text_bg_color;
        }
      }

      if (
        item.Headline !== undefined &&
        item.Headline !== '' &&
        item.Headline !== null
      ) {
        if (textPos != 'top' && textPos != 'bottom') {
          clName = 'flex relative w-full text-white';
          headLine +=
            '<div className="flex items-center absolute ' +
            fontSize +
            ' inset-0 p-1 lg:p-4 text-white justify-center">';
          headLine += '<div className="" style="background: rgba(' + bgColor + ',' + bgOpacity + '); padding: 20px;">';
          headLine += '<div className="pb-2">' + item.Headline + '</div>';
          headLine += '<div>';
          headLine += buttonHTML;
          headLine += '</div>';
          headLine += '</div>';
          headLine += '</div>';
        } else {
          headLine += '<div className="text-center bg-white w-full">';
          headLine +=
            '<div className="text-base p-4">' + item.Headline + '</div>';
          headLine += '</div>';
        }
      }

      if (textPos == 'top') {
        strHTML += headLine;
      }

      if (item.Image !== undefined) {
        strHTML += '<div className="' + clName + '">';
        strHTML += '<a title="' + item.Image_link + '">';
        strHTML +=
          '<img className="w-full isinput img-editable alttitle" src="' +
          item.Image +
          '"/>';
        strHTML += '</a>';
        if (textPos != 'top' && textPos != 'bottom') {
          strHTML += headLine;
        }
        strHTML += '</div>';
      }

      if (textPos == 'bottom') {
        strHTML += headLine;
      }
      if (textPos == 'top' || textPos == 'bottom') {
        strHTML += buttonHTML;
      }
      strHTML += '</div>';
      strHTML += '</div>';
    });
  }

  return strHTML;
  // <div className="w-full lg:w-1/4 px-3 md:w-1/3 mt-6 isinput">
  //   <div className="border border-gray-50 px-2 py-2">
  //     <div className="flex justify-center">
  //       Image
  //     </div>
  //     <div className="text-center bg-white w-full">
  //       <div className="text-base p-4">Headline</div>
  //       <div className="mb-5">
  //         Button
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export const multipleImages = (dataArr, selectedObj) => {
    let strHTML = '';
  if(dataArr.length > 0)
  {
        let cnt = 1;
      dataArr.forEach(function (item) {
        let textPos  = '';
        let fontSize = '';
        let bgOpacity = '';
        let bgColor = '';
        let headLine = '';
        let clName = '';
        let aprData = {};
        let buttonHTML = '';


        if(item.Button_display != undefined && item.Button_display == 'Yes' && item.Button_text !== '' && item.Button_text !== null)
        {
          
            buttonHTML = '<div class="mt-5 mb-5 text-center">';
            buttonHTML += '<a target="" href="'+item.Button_link+'" class="'+item.Button_size+' '+item.Button_style+'">';
            buttonHTML += item.Button_text;
            buttonHTML += '</a>'
            buttonHTML += '</div>';
        }

        
        if(selectedObj.selectedVal.TextAppearance != undefined)
            {
                aprData = selectedObj.selectedVal.TextAppearance.value;
                if(aprData.text_pos != undefined)
                {
                    textPos  = aprData.text_pos;
                    fontSize = aprData?.font_size ?? 'text-base';
                    bgOpacity = aprData.bg_opacity;
                    bgColor = aprData.text_bg_color;
                    
                }

            }
            //fontSize = item.Headline_font_size ?? '';

          if(item.Headline != undefined && item.Headline != '' && item.Headline != null)
          {

                if(textPos != 'top' && textPos != 'bottom' && textPos != '')
                {
                    clName = 'flex relative w-full text-white';
                    headLine += '<div class="flex items-center absolute '+fontSize+' inset-0 p-1 lg:p-4 text-white justify-center">';
                    headLine += '<div class="" style="background: rgba('+bgColor+','+bgOpacity+'); padding: 20px;">';
                    headLine += '<div class="pb-2 text-center">'+item.Headline+'</div>';
                    headLine += '<div>';
                    headLine += buttonHTML;
                    headLine += '</div>';
                    headLine += '</div>';
                    headLine += '</div>';
                }
                else
                {
                    headLine += '<div class="text-center bg-white w-full">';
                    headLine += '<div class="p-4 '+fontSize+'">'+item.Headline+'</div>';
                    headLine += '</div>';
                }
        }
                

          strHTML += '<div class="w-full lg:w-1/3">';
          cnt = cnt + 1;
          strHTML += '<div class="border border-gray-50 px-2 py-2">';

          if(textPos === 'top')
          {
            strHTML += headLine;
          }

          if(item.Image !== undefined)
          {
            strHTML += '<div class="'+clName+'">';
            strHTML += '<div class="flex justify-center">';
            strHTML += '<a title="'+item.Image_link+'">';
            strHTML += '<img class="w-full" src="'+item.Image+'"/>';
            strHTML += '</a>';
            strHTML += '</div>';
            if(textPos === 'center')
            {
                strHTML += headLine;
            }
            strHTML += '</div>';
          }

          if(textPos === 'bottom')
          {
            strHTML += headLine;
          }

          if(textPos === 'top' || textPos === 'bottom')
          {
            strHTML += buttonHTML;
          }
          


      
          strHTML += '</div>';
          strHTML += '</div>';
          
      }
      );
    }
    return strHTML;
};
