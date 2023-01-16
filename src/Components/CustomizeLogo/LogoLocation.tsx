const LogoLocation = ({ item, logoSelected, setLogoSelected }: any) => {
  const handleLogoSelected = (event: any) => {
    setLogoSelected(item?.name);
  };
  return (
    <>
      <li className='w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex'>
        <div
          className={`border-2 hover:border-primary p-3 w-full text-ceter ${
            logoSelected === item?.name ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={handleLogoSelected}
        >
          <div className='w-40 h-40 inline-flex items-center justify-center'>
            <img
              className='inline-block max-h-full'
              src={item?.threeDImage}
              alt='No Image Found'
            />
          </div>
          <div className='mt-2'>{item?.name}</div>
        </div>
      </li>
    </>
  );
};

export default LogoLocation;
