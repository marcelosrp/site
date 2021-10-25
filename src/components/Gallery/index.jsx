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
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Wg8AAk8BZuQcWLwAAAAASUVORK5CYII="
      />
    </div>
  )
}

Gallery.propTypes = {
  photo: PropTypes.object.isRequired
}
