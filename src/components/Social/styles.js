import styled from 'styled-components'

export const WrapperSocial = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 767px) {
    gap: 1.5rem;
  }

  svg {
    color: var(--white);
    font-size: 2.4rem;
    transition: color linear 0.3s;

    @media (max-width: 767px) {
      font-size: 2rem;
    }

    &:hover {
      color: var(--purple);
    }
  }
`
