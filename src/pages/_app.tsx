import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Product/layout'
import AppContext from 'Context/AppContext'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider
      value={{
        title: 'husain'
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )

}

export const getInitialProps = () => {
  console.log("here");
}

export default MyApp

