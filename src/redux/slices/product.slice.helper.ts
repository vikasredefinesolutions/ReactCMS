import {
  _LogoDetails_IfSubmitted,
  _LogoDetails_WillSubmitLater,
  _SOM_LogoDetails,
} from './product.slice.types';

export const updatedLogosHandler = (
  oldLogos: _SOM_LogoDetails[] | null,
  upcomingLogo: _LogoDetails_IfSubmitted | _LogoDetails_WillSubmitLater,
): _SOM_LogoDetails[] => {
  let logos: _SOM_LogoDetails[] = [];

  if (oldLogos === null) {
    logos.push(upcomingLogo);
  }

  if (oldLogos !== null) {
    logos = [...oldLogos];

    const logoExist = oldLogos.find(
      (logo) => logo.location.value === upcomingLogo.location?.value,
    );

    if (logoExist) {
      logos = logos.map((logo) => {
        if (logo.location.value === upcomingLogo.location?.value) {
          return upcomingLogo;
        }
        return logo;
      });
    }

    if (!logoExist) {
      logos.push(upcomingLogo);
    }
  }

  return logos;
};
