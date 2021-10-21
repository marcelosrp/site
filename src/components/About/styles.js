import styled from 'styled-components'

export const About = styled.section`
  margin: 5rem 0;
  width: 100%;

  @media (min-width: 700px) {
    width: 105rem;
  }

  p {
    font-size: 2.5rem;
    font-weight: var(--extraBold);
    line-height: 1.5;

    @media (min-width: 700px) {
      font-size: 3.1rem;
    }
  }

  button {
    margin-top: 3rem;
  }
`
