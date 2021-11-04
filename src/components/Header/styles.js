import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background-color: rgba(22, 22, 22, 0.9);
  backdrop-filter: blur(20px) saturate(200%);
  display: flex;
  height: calc(var(--header) - 4rem);
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;

  @media (min-width: 700px) {
    padding: 0 10rem;
    height: var(--header);
  }
`

export const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: var(--normal);

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }

  & > a {
    align-items: center;
    color: var(--white);
    display: flex;
    gap: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--purple);
    }
  }
`
