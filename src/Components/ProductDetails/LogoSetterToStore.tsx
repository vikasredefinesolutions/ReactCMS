import { _CI_ShoppingCartLogoPersonViewModel } from '@type/APIs/cart.res';
import { _LogoLocationDetail } from '@type/APIs/productDetail.res';
import { generateImageUrl } from 'helpers/common.helper';
import { useActions } from 'hooks';
import { _SOM_LogoDetails } from 'redux/slices/product.slice.types';
import { FileToUpload, LogoStatus } from './SOM_CustomizeLogoOptions';

const LogoSetterToStore = () => {
  const { updateSomLogo } = useActions();

  const getDetailsLogo = (
    editDetails: _CI_ShoppingCartLogoPersonViewModel[],
    logoLocation: _LogoLocationDetail[],
    totalQty: number,
  ) => {
    let isLater = false;
    const som_logoDetails: _SOM_LogoDetails[] = [];
    const details = editDetails.map((res) => {
      let logoStatus: LogoStatus = '';
      let fileToUpload: FileToUpload = null;
      if (res.logoName === 'Customize Later') {
        isLater = true;
      } else if (res.logoName === 'Add Logo Later') {
        logoStatus = 'later';
        som_logoDetails.push({
          date: new Date().toString(),
          location: {
            imageUrl: res.logoPositionImage,
            name: res.logoLocation || '',
            value: res.logoLocation || '',
          },
          price: res.logoPrice,
          quantity: 5,
          status: 'WILL SUBMIT LATER',
        });
      } else {
        som_logoDetails.push({
          date: new Date().toString(),
          filePath: res.logoImagePath,
          location: {
            imageUrl: res.logoPositionImage,
            name: res.logoLocation || '',
            value: res.logoLocation || '',
          },
          price: res.logoPrice / totalQty,
          quantity: totalQty,
          status: 'LOGO SUBMITTED',
          title: res.name,
        });
        logoStatus = 'submitted';

        // eslint-disable-next-line no-useless-escape
        const filename = res.logoImagePath.replace(/^.*[\\\/]/, '');
        fileToUpload = {
          name: filename,
          type: filename.split('.').pop() as string,
          previewURL: generateImageUrl(res.logoImagePath, false) as string,
        };
      }

      const selectedLocation = {
        label: res.logoLocation || '',
        value: res.logoLocation || '',
        image: {
          url: res.logoPositionImage || '',
          alt: res.logoLocation || '',
        },
        show: true,
        price: res.logoPrice,
        cost: res.logoPrice,
      };

      return {
        logoStatus,
        fileToUpload,
        selectedLocation,
      };
    });
    if (!isLater) {
      updateSomLogo({
        details: som_logoDetails.length > 0 ? som_logoDetails : null,
        allowNextLogo: logoLocation.length > som_logoDetails.length,
        availableOptions: logoLocation
          .filter((logo) =>
            som_logoDetails.findIndex(
              (detail) => detail.location.name === logo.name,
            ) > -1
              ? 0
              : 1,
          )
          .map((logo) => ({
            image: {
              url: logo.image,
              alt: logo.image,
            },
            label: logo.name,
            value: logo.name,
            price: logo.price,
            cost: logo.cost,
          })),
      });
    }
    return {
      isLater,
      details,
      som_logoDetails,
    };
  };

  return {
    getDetailsLogo,
  };
};

export default LogoSetterToStore;
