import Link from 'next/link'
import { FaSkull } from '@react-icons/all-files/fa/FaSkull'
import Social from '@components/Social'

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>
            <FaSkull />
          </a>
        </Link>
      </S.Logo>
      <Social />
    </S.Header>
  )
}
