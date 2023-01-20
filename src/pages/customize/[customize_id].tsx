
import CustomizeLogo from 'appComponents/ui/cart/customizeLogo';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CustomizeLogoId: NextPage = () => {
  const router = useRouter()
  const { customize_id } = router?.query ?? 0

  return <><CustomizeLogo customize_id={customize_id ? +customize_id : 0} /></>;
};

export default CustomizeLogoId;
