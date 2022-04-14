import GlobalStyle from '../styles/global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </>
  )
}

export default MyApp
