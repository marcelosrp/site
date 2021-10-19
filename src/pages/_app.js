import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from '@common/styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
