
const Layout = ({children}: any) => {
    return(
      <>
      {children}
      </>
    )
  }

export const getServerSideProps = () => {
  console.log("i am here")
  return {
    props: {
      title: 'husain'
    }
  }
}
  

  export default Layout;