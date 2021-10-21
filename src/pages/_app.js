import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import NextNprogress from 'nextjs-progressbar'
import Layout from '@components/Layout'
import GlobalStyles from '@common/styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
