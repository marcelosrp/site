import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Gallery({ photo }) {
  return (
    <div>
      <Image
        src={photo.url}
        alt={photo.alt}
        layout="fill"
        objectFit="contain"
        quality="80"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
    </div>
  )
}

Gallery.propTypes = {
  photo: PropTypes.object.isRequired
}
