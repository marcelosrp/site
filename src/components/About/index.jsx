import Button from '@components/Button'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'

import * as S from './styles'

export default function About({ about, handleAboutClick }) {
  return (
    <S.About>
      <p>{about.resume}</p>
      <Button handleAboutClick={handleAboutClick}>
        Ver projetos <FaChevronDown />
      </Button>
    </S.About>
  )
}
