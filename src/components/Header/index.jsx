import Link from 'next/link'
import Social from '@components/Social'
import { FaCode } from '@react-icons/all-files/fa/FaCode'

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>
            Marcelo <strong>Soares</strong>
            <FaCode />
          </a>
        </Link>
      </S.Logo>
      <Social />
    </S.Header>
  )
}
