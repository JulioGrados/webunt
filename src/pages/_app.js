import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux'
import Head from 'next/head'

import { GlobalStyle } from '../styles/GlobalStyle'

import { getCookie } from 'utils/functions/session'
import { useRouter } from 'next/router'
import 'antd/dist/antd.min.css'

const MyApp = ({ Component, pageProps, store }) => {
  const router = useRouter();
  const currentUrl = `https://www.incubaunt.com${router.asPath}`;
  return (
    <Provider store={store}>
      <Head>
        <meta property="og:title" content="INCUBAUNT" />
        <meta name="og:description" content="Nuestro propósito es impulsar a más emprendedores de La Libertad y del Perú a descubrir y recorrer el camino hacia el éxito." />
        <meta property="og:image" content="../../public/static/img/home.jpg" />
        <meta property="og:image:alt" content="INCUBAUNT" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // console.log('ctx', ctx)
  const jwt = getCookie('jwt', ctx.req)
  const currentUser = getCookie('user', ctx.req)

  if (jwt) {
    ctx.jwt = jwt
  }
  if (currentUser) {
    ctx.currentUser = JSON.parse(decodeURI(currentUser).replace(/\%2C/g, ','))
  }
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  return { pageProps }
}

export default withRedux(initStore)(MyApp)
