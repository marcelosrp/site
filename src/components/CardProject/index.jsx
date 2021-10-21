import Image from 'next/image'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function CardProject({ project }) {
  return (
    <S.CardProject>
      <Image
        src={project.thumb.url}
        alt={project.title}
        layout="fill"
        quality="80"
      />
    </S.CardProject>
  )
}

CardProject.propTypes = {
  project: PropTypes.object.isRequired
}