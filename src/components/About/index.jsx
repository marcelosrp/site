import Button from '@components/Button'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'

import * as S from './styles'

export default function About() {
  return (
    <S.About>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button>
        Ver projetos <FaChevronDown />
      </Button>
    </S.About>
  )
}
