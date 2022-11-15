
const Layout = ({children}: any) => {
    return(
      <>
      {children}
      </>
    )
  }

export const getServerSideProps = () => {
  return {
    props: {
      title: 'husain'
    }
  }
}
  

  export default Layout;