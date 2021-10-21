import styled from 'styled-components'

export const WrapperProjects = styled.section`
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  margin: 80px 0;
  padding-bottom: 30px;
  position: relative;
  transition: all 0.3s linear;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const CardProject = styled.article`
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 46rem;

  @media (min-width: 1110px) {
    height: 30rem;
  }

  @media (min-width: 1200px) {
    height: 33rem;
  }

  @media (min-width: 1350px) {
    height: 40rem;
  }

  @media (min-width: 1550px) {
    height: 46rem;
  }

  @media (min-width: 1800px) {
    height: 57rem;
  }

  @media (min-width: 1920px) {
    height: 60rem;
  }

  &:first-child {
    @media (min-width: 1000px) {
      grid-column-start: span 2;
    }
  }

  img {
    object-fit: cover;
  }
`
