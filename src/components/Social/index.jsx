import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'

import * as S from './styles'

export default function Social() {
  return (
    <S.WrapperSocial>
      <a href="https://github.com/marcelosrp" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/marcelosrp/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </S.WrapperSocial>
  )
}
