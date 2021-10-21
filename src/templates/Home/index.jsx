import { useRef } from 'react'
import { NextSeo } from 'next-seo'
import About from '@components/About'
import CardProject from '@components/CardProject'
import { scrollToElement } from '../../utils'

import * as S from './styles'

export default function HomeTemplate({ projects, about }) {
  const projectsWrapper = useRef()

  function handleAboutClick() {
    scrollToElement(projectsWrapper.current)
  }

  return (
    <>
      <NextSeo
        title="Marcelo Soares - Front-End"
        description="Meu nome é Marcelo Soares e sou programador front-end desde 2013 utilizando as principais tecnologias do mercado. Já atendi clientes como Walmart.com, Asics, Livelo, Carrefour, Microsoft e etc."
        canonical="https://marcelo-soares.vercel.app/"
        openGraph={{
          url: 'https://marcelo-soares.vercel.app/',
          title: 'Marcelo Soares - Front-End',
          description:
            'Meu nome é Marcelo Soares e sou programador front-end desde 2013 utilizando as principais tecnologias do mercado. Já atendi clientes como Walmart.com, Asics, Livelo, Carrefour, Microsoft e etc.',
          site_name: 'Marcelo Soares - Front-End'
        }}
      />

      <About about={about} handleAboutClick={handleAboutClick} />

      <S.WrapperProjects ref={projectsWrapper}>
        {projects.allProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </S.WrapperProjects>
    </>
  )
}
