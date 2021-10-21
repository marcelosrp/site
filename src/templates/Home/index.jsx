import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Layout from '@components/Layout'
import About from '@components/About'

import * as S from './styles'

export default function HomeTemplate({ projects }) {
  console.log(projects.allProjects)
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
      <About />

      <S.WrapperProjects>
        {projects.allProjects.map((project) => (
          <S.CardProject key={project.id}>
            <Image
              src={project.thumb.url}
              alt={project.title}
              layout="fill"
              quality="80"
            />
          </S.CardProject>
        ))}
      </S.WrapperProjects>
    </Layout>
  )
}
