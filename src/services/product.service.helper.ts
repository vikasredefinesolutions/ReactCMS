import {
  _AddToCart_LogoCartItems,
  _AddToCart_Payload,
  _AddToCart_PayloadGenerator_Attributes,
  _CartLinePersonModel,
  _CartLogoPersonDetailModel,
  _CartLogoPersonModel,
  _LogoCartItems_LogoDetails,
  _ShoppingCartItemModel,
  _ShoppingCartItemsDetailModel,
} from '@services/product.service.type';
import {
  _Product_SizeQtys,
  _SOM_LogoDetails,
  _state_SelectedProduct,
} from 'redux/slices/product.slice.types';

const _default_shoppingCartItemModel: _ShoppingCartItemModel = {
  id: 0,
  price: 0,
  quantity: 0,
  weight: 0,
  productType: 0,
  discountPrice: 0,
  logoTitle: '',
  logogImagePath: '',
  perQuantity: 0,
  appQuantity: 0,
  status: 0,
  discountPercentage: 0,
  productCustomizationId: 0,
  itemNotes: '',
  isEmployeeLoginPrice: 0,
};

const personalization: {
  defaultLogo: _CartLogoPersonModel;
  defaultLine: _CartLinePersonModel;
} = {
  defaultLogo: {
    attributeOptionId: 0,
    attributeOptionValue: '',
    code: '',
    price: 0,
    quantity: 0,
    estimateDate: new Date(),
    isEmployeeLoginPrice: 0,
    cartLogoPersonDetailModels: [
      {
        logoPrice: 0,
        logoQty: 0,
        logoFile: '',
        logoLocation: '',
        logoTotal: 0,
        colorImagePath: '',
        logoUniqueId: '',
        price: 0,
        logoColors: '',
        logoNotes: '',
        logoDate: new Date(),
        logoNames: '',
        digitalPrice: 0,
        logoPositionImage: '',
        oldFilePath: '',
        originalLogoFilePath: '',
      },
    ],
  },
  defaultLine: {
    attributeOptionId: 0,
    attributeOptionValue: '',
    code: '',
    cartLinePersonDetailModel: [
      {
        linePrice: 0,
        lineQty: 0,
        lineAboveLogo: 0,
        lineIndividually: 0,
        lineNumber: 0,
        lineText: '',
        lineTotal: 0,
        lineFont: '',
        lineColor: '',
        linePriceDouble: 0,
        logoCartId: 0,
        personalizeLocation: '',
      },
    ],
  },
};

export const singleColor_addToCart_PayloadGenerator = async (
  cart: _AddToCart_PayloadGenerator_Attributes,
): Promise<_AddToCart_Payload> => {
  let shoppingCartItemsDetailModel: _ShoppingCartItemsDetailModel[] = [];
  let cartLogoPersonModel: _CartLogoPersonModel[] = [];
  let cartLinePersonModel: _CartLinePersonModel[] = [];

  if (cart.cartItems) {
    shoppingCartItemsDetailModel = cart.cartItems.map((item) => item);
  }

  if (cart.personalization.logoCartItems.length > 0) {
    cartLogoPersonModel = cart.personalization.logoCartItems.map((item) => {
      let LogoDetailsExist: _CartLogoPersonDetailModel[] | null = null;

      if (item.logo === 'Customize Later') {
        LogoDetailsExist = [
          {
            ...personalization.defaultLogo.cartLogoPersonDetailModels[0],
            colorImagePath: item.product.color.imagePath,
            logoNames: 'Customize Logo',
          },
        ];
      } else {
        LogoDetailsExist = item.logo.map((logo) => {
          return {
            ...personalization.defaultLogo.cartLogoPersonDetailModels[0],
            logoPrice: logo.price,
            logoQty: logo.qty,
            logoFile: logo.filePathUrl,
            logoTotal: logo.total,
            logoLocation: logo.positionImage.name,
            colorImagePath: item.product.color.imagePath,
            logoNames:
              logo.filePathUrl === '' ? 'Add Logo Later' : logo.filePathUrl,
            price: logo.price,
            logoDate: logo.date,
            logoPositionImage: logo.positionImage.path,
            originalLogoFilePath: logo.filePathUrl,
          };
        });
      }

      return {
        ...personalization.defaultLogo,
        attributeOptionId: item.product.attributeOptionId,
        attributeOptionValue: item.product.attributeOptionValue,
        price: item.product.price,
        quantity: item.product.qty,
        estimateDate: item.product.date,
        cartLogoPersonDetailModels: LogoDetailsExist,
      };
    });
  }

  if (cart.personalization.lineCartItems) {
    cartLinePersonModel = cart.personalization.lineCartItems.map((line) => {
      return {
        ...personalization.defaultLine,
      };
    });
  }

  return {
    addToCartModel: {
      customerId: cart.userId,
      storeId: cart.storeId,
      productId: cart.product.id,
      isempLogin: cart.isEmployeeLoggedIn,
      shoppingCartItemModel: {
        ..._default_shoppingCartItemModel,
        price: cart.product.price,
        quantity: cart.product.total.qty,
        logoTitle: cart.product.color.altTag,
        logogImagePath: cart.product.color.imageUrl,
        status: cart.product.status,
        itemNotes: cart.product.note,
      },
      shoppingCartItemsDetailModels: shoppingCartItemsDetailModel,
      cartLogoPersonModel: cartLogoPersonModel,
      cartLinePersonModels: cartLinePersonModel,
    },
  };
};

export const logoCartItems_Generator = (
  som_logos: _SOM_LogoDetails[] | null,
  product: _state_SelectedProduct,
  sizeQtys: _Product_SizeQtys[],
): _AddToCart_LogoCartItems[] => {
  const cartItems = sizeQtys.map((size) => {
    let logos: _LogoCartItems_LogoDetails[] = [];

    if (som_logos) {
      logos = som_logos.map((logo) => {
        if (logo.status === 'LOGO SUBMITTED') {
          return {
            positionImage: {
              path: logo.location.imageUrl,
              name: logo.location.name,
            },
            filePathUrl: logo.filePath!,
            price: logo.price,
            qty: logo.quantity,
            total: logo.price,
            date: logo.date,
          };
        }

        return {
          positionImage: {
            path: logo.location.imageUrl,
            name: logo.location.name,
          },
          filePathUrl: '',
          price: logo.price,
          qty: logo.quantity,
          total: logo.price,
          date: logo.date,
        };
      });
    }

    const item: _AddToCart_LogoCartItems = {
      product: {
        date: new Date(),
        color: {
          imagePath: product.color.imageUrl,
        },
        attributeOptionId: product.color.attributeOptionId,
        attributeOptionValue: size.size,
        price: size.price,
        qty: size.qty,
      },
      logo: logos.length > 0 ? logos : 'Customize Later',
    };
    return item;
  });
  return cartItems;
};
