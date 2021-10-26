import Button from '@components/Button'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'

import * as S from './styles'

let easing = [0.175, 0.85, 0.42, 0.96]

const textVariants = {
  exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
}

export default function About({ about, handleAboutClick }) {
  return (
    <S.About initial="exit" animate="enter" exit="exit" variants={textVariants}>
      <p>{about.resume}</p>
      <Button handleAboutClick={handleAboutClick}>
        Ver projetos <FaChevronDown />
      </Button>
    </S.About>
  )
}
