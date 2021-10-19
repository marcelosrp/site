import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'

export default function HomeTemplate() {
  return (
    <Layout>
      <NextSeo
        title="NextJS - Boilerplate"
        description="A simple NextJS Boilerplate to start an project"
        canonical="https://my-trips-soares.vercel.app/"
        openGraph={{
          url: 'https://my-trips-soares.vercel.app/',
          title: 'NextJS - Boilerplate',
          description: 'A simple NextJS Boilerplate to start an project',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'NextJS - Boilerplate'
            }
          ],
          site_name: 'NextJS - Boilerplate'
        }}
      />
      <h1>Home</h1>
    </Layout>
  )
}
