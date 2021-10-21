import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'

import * as S from './styles'

export default function Social() {
  return (
    <S.WrapperSocial>
      <a
        href="https://github.com/marcelosrp"
        target="_blank"
        rel="noreferrer"
        title="Meu Github"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/marcelosrp/"
        target="_blank"
        rel="noreferrer"
        title="Meu LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="mailto:soares.srp@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="Vamos conversar?"
      >
        <FaEnvelope />
      </a>
    </S.WrapperSocial>
  )
}
