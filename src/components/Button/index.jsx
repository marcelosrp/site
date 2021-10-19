import PropTypes from 'prop-types'

import * as S from './style'

export default function Button({ children }) {
  return <S.Button>{children}</S.Button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}
