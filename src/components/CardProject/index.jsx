import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import * as S from './styles'

const cardVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
}

export default function CardProject({ project }) {
  return (
    <S.CardProject variants={cardVariants} whileHover={{ translateY: -10 }}>
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
