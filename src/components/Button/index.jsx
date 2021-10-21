import PropTypes from 'prop-types'

import * as S from './style'

export default function Button({ children, handleAboutClick = undefined }) {
  return <S.Button onClick={handleAboutClick}>{children}</S.Button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleAboutClick: PropTypes.func
}
