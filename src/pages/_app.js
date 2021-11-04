import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import NextNprogress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/Layout'
import GlobalStyles from '@common/styles/global'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#161616" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#700B97"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp
