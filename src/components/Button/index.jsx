import PropTypes from 'prop-types'

import * as S from './style'

export default function Button(props) {
  const { children, handleClick = undefined } = props
  return (
    <S.Button {...props} onClick={handleClick}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func
}
