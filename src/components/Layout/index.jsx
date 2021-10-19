import Head from 'next/head'
import PropTypes from 'prop-types'
import Header from '@components/Header'

import * as S from './styles'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextJS - Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <Header />
        {children}
      </S.Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
