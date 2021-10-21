import { NextSeo } from 'next-seo'
import About from '@components/About'
import CardProject from '@components/CardProject'

import * as S from './styles'

export default function HomeTemplate({ projects, about }) {
  return (
    <>
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

      <About about={about} />

      <S.WrapperProjects>
        {projects.allProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </S.WrapperProjects>
    </>
  )
}
