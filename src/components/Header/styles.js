import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background-color: rgba(6, 1, 1, 0.9);
  backdrop-filter: blur(20px) saturate(200%);
  display: flex;
  height: 6rem;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;

  @media (min-width: 700px) {
    padding: 0 10rem;
    height: 10rem;
  }
`

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: var(--normal);
  letter-spacing: 1px;
`
