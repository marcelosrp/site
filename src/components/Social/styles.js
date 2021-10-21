import styled from 'styled-components'

export const WrapperSocial = styled.div`
  display: flex;
  gap: 2rem;

  svg {
    color: var(--white);
    font-size: 2.4rem;
    transition: color linear 0.3s;

    &:hover {
      color: var(--purple);
    }
  }
`
