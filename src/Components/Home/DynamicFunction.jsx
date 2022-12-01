export const numberingdiv = (dataArr) => {
    let strHTML = '';
    if(dataArr.length > 0)
    {
      let count = 1;
        dataArr.forEach(function (item) {
            strHTML += '<div class="flex items-start mb-6">';
            strHTML += '<div class="mr-10 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-gray-500 text-gray-50 font-bold font-heading">'+count+'</div>'; 
            strHTML += '<div class="max-w-xs">';
            strHTML += '<div class="text-box-p leading-loose">';
            strHTML += item.Description;
            strHTML += '</div>';
            strHTML += '</div>';
            strHTML += '</div>';
        })
    }
    return strHTML;
};



export const boximage = (dataArr) => {
   
    let strHTML = '';
    if(dataArr.length > 0)
    {
        dataArr.forEach(function (item) {
            let className;
            if(item.colcount == 2)
                className = 'lg:w-1/2';
            else if(item.colcount == 3)
                className = 'lg:w-1/3';
            else   
                className = 'lg:w-1/4';
            strHTML += '<div class="w-full '+className+' px-3 md:w-1/3 mt-6">';
            strHTML += '<div class="flex justify-center pb-5">';
            strHTML += '<div class="btn-primary rounded-full w-10 h-10 flex justify-center items-center text-base text-white font-semibold">'+item.index+'</div>';
            strHTML += '</div>';
    
            strHTML += '<div class="border border-gray-50 px-2 py-2">';
            if(item.Image !== undefined)
            {
                strHTML += '<div class="flex justify-center">';
                strHTML += '<a title="'+item.Image_link+'">';
                strHTML += '<img class="w-full isinput img-editable alttitle" src="'+item.Image+'"/>';
                strHTML += '</a>';
                strHTML += '</div>';
            }
            if(item.Headline !== undefined && item.Headline !== '')
            {
                strHTML += '<div class="text-center bg-white w-full">';
                strHTML += '<div class="text-base p-4">'+item.Headline+'</div>';
                strHTML += '</div>';
            }
            if(item.Button_display != undefined && item.Button_display == 'Yes')
            {
              
                strHTML += '<div class="mt-5 mb-5">';
                strHTML += '<a target="" href="'+item.Button_link+'" class="'+item.Button_size+' '+item.Button_style+'">';
                strHTML += item.Button_text;
                strHTML += '</a>'
                strHTML += '</div>';
            }
    
            // <div class="mb-5">
            //         <a title="" target="" href="javascript:void(0);" inpname="first_btn" inplnname="first_btn_link" inpclname="first_btn_cls" class="px-6 py-3 text-green-700 font-semibold uppercase bg-neutral-900 hover:bg-gray-600 hrefurl isinput changebtn" data-nofollow="N" contenteditable="true">
            //           lorem impluse
            //         </a>
            //       </div>
            strHTML += '</div>';
            strHTML += '</div>';
            
        }
        );
    }

    return strHTML;
    // <div class="w-full lg:w-1/4 px-3 md:w-1/3 mt-6 isinput">
    //   <div class="border border-gray-50 px-2 py-2">
    //     <div class="flex justify-center">
    //       Image
    //     </div>
    //     <div class="text-center bg-white w-full">
    //       <div class="text-base p-4">Headline</div>
    //       <div class="mb-5">
    //         Button
    //       </div>
    //     </div>
    //   </div>
    // </div>
};


export const multipleImages = (dataArr) => {
   
  let strHTML = '';
  if(dataArr.length > 0)
  {
      dataArr.forEach(function (item) {
          strHTML += '<div class="w-full lg:w-1/3 p-4">';
          strHTML += '<div class="flex justify-center pb-5">';
          strHTML += '<div class="btn-primary rounded-full w-10 h-10 flex justify-center items-center text-base text-white font-semibold">'+item.index+'</div>';
          strHTML += '</div>';
  
          strHTML += '<div class="border border-gray-50 px-2 py-2">';
          if(item.Image !== undefined)
          {
              strHTML += '<div class="flex justify-center">';
              strHTML += '<a title="'+item.Image_link+'">';
              strHTML += '<img class="w-full" src="'+item.Image+'"/>';
              strHTML += '</a>';
              strHTML += '</div>';
          }
          if(item.Headline != undefined && item.Headline != '')
          {
              strHTML += '<div class="text-center bg-white w-full">';
              strHTML += '<div class="text-base p-4">'+item.Headline+'</div>';
              strHTML += '</div>';
          }
          // if(item.Button_display != undefined && item.Button_display == "Yes")
          // {
            
          //     strHTML += '<div class="mt-5 mb-5">';
          //     strHTML += '<a target="" href="'+item.Button_link+'" class="'+item.Button_size+' '+item.Button_style+'">';
          //     strHTML += item.Button_text;
          //     strHTML += '</a>'
          //     strHTML += '</div>';
          // }
  
          // <div class="mb-5">
          //         <a title="" target="" href="javascript:void(0);" inpname="first_btn" inplnname="first_btn_link" inpclname="first_btn_cls" class="px-6 py-3 text-green-700 font-semibold uppercase bg-neutral-900 hover:bg-gray-600 hrefurl isinput changebtn" data-nofollow="N" contenteditable="true">
          //           lorem impluse
          //         </a>
          //       </div>
          strHTML += '</div>';
          strHTML += '</div>';
          
      }
      );
  }

  return strHTML;
  // <div class="w-full lg:w-1/4 px-3 md:w-1/3 mt-6 isinput">
  //   <div class="border border-gray-50 px-2 py-2">
  //     <div class="flex justify-center">
  //       Image
  //     </div>
  //     <div class="text-center bg-white w-full">
  //       <div class="text-base p-4">Headline</div>
  //       <div class="mb-5">
  //         Button
  //       </div>
  //     </div>
  //   </div>
  // </div>
};
