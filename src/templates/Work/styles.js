import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: var(--bold);
`

export const Container = styled.section`
  margin: 8rem auto;
  max-width: var(--container);
  width: 100%;
`

export const AboutProjectWrapper = styled.div`
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding-top: 6.5rem;
  width: 100%;
`

export const About = styled.article`
  flex: 1 1;

  p {
    font-size: 2rem;
    line-height: 1.8;
  }
`

export const Tecs = styled.section`
  h3 {
    font-size: 2rem;
    font-weight: var(--extraBold);
    margin-bottom: 1.3rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 2.2rem;
  }
`

export const URL = styled.a`
  align-items: center;
  background-color: var(--white);
  border-radius: 100px;
  border: none;
  color: var(--background);
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: var(--extraBold);
  gap: 10px;
  justify-content: center;
  margin: 30px 0;
  padding: 12px 40px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: var(--purple);
    color: var(--white);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const Gallery = styled.section`
  max-width: var(--container);
  margin: 0 auto;
  padding-bottom: 4rem;
  position: relative;
  width: 100%;

  & > div {
    border-radius: 16px;
    margin: 6rem 0;
    min-height: 563px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  & > a {
    margin: 0 auto;
  }
`
