import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px) saturate(200%);
  display: flex;
  height: 10rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: var(--normal);
  letter-spacing: 1px;
`
