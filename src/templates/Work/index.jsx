import { useRef, useState, useEffect } from 'react'
import Link from 'next/dist/client/link'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import { FaLink } from '@react-icons/all-files/fa/FaLink'
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft'
import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp'
import { motion } from 'framer-motion'
import { scrollToElement } from '../../utils'
import Gallery from '@components/Gallery'
import Button from '@components/Button'

import * as S from './styles'

let easing = [0.175, 0.85, 0.42, 0.96]

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
}

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
}

export default function WorkTemplate({ work }) {
  const { title, url, description, scope, technology, gallery } =
    work.allProjects[0]

  const container = useRef()

  const [showButtonToTop, setShowButtonToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleButtonToTop)

    return () => {
      window.removeEventListener('scroll', toggleButtonToTop)
    }
  }, [])

  function scrollToTop() {
    scrollToElement(container.current)
  }

  function toggleButtonToTop() {
    if (window.scrollY >= 250) {
      return setShowButtonToTop(true)
    }

    setShowButtonToTop(false)
  }

  return (
    <>
      <NextSeo
        title={title}
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

      <motion.div initial="exit" animate="enter" exit="exit">
        <S.Container ref={container}>
          <S.Header variants={textVariants}>
            <S.Title>{title}</S.Title>
            <Link href="/">
              <a title="Voltar para a home">
                <FaArrowLeft />
                Voltar
              </a>
            </Link>
          </S.Header>
          <S.AboutProjectWrapper variants={textVariants}>
            <S.About>
              <p>{description}</p>
              <S.URL href={url} target="_blank" rel="noreferrer">
                Ver site
                <FaLink />
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

        {gallery.length > 0 && (
          <S.Gallery variants={imageVariants}>
            {gallery.map((photo, index) => {
              return <Gallery key={index} photo={photo} />
            })}
            <S.URL href={url} target="_blank" rel="noreferrer">
              Ver site
              <FaLink />
            </S.URL>
          </S.Gallery>
        )}

        {showButtonToTop && (
          <Button
            handleClick={scrollToTop}
            className="back-to-top"
            title="Voltar ao topo"
          >
            <FaArrowUp />
          </Button>
        )}
      </motion.div>
    </>
  )
}

WorkTemplate.propTypes = {
  work: PropTypes.object.isRequired
}
