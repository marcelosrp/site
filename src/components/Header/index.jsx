import Link from 'next/link'
import Social from '@components/Social'

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>Soares</a>
        </Link>
      </S.Logo>
      <Social />
    </S.Header>
  )
}
