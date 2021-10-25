import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function CardProject({ project }) {
  return (
    <S.CardProject>
      <Link href={`/work/${encodeURIComponent(project.slug)}`}>
        <a>
          <Image
            src={project.thumb.url}
            alt={project.title}
            layout="fill"
            quality="80"
          />
        </a>
      </Link>
    </S.CardProject>
  )
}

CardProject.propTypes = {
  project: PropTypes.object.isRequired
}
