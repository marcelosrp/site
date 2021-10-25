import { NextSeo } from 'next-seo'
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight'
import * as S from './styles'

export default function WorkTemplate({ work }) {
  const { title, url, description, scope, technology } = work.allProjects[0]

  return (
    <>
      <NextSeo
        title={`${title} | Marcelo Soares - Front-End`}
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

      <S.Container>
        <S.Title>{title}</S.Title>
        <S.AboutProjectWrapper>
          <S.About>
            <p>{description}</p>
            <S.URL href={url} target="_blank" rel="noreferrer">
              Ver site
              <FaArrowRight />
            </S.URL>
          </S.About>
          <S.Tecs>
            <h3>Escopo</h3>
            <p>{scope}</p>
            <h3>Tecnologias</h3>
            <p>{technology}</p>
          </S.Tecs>
        </S.AboutProjectWrapper>
      </S.Container>
    </>
  )
}
