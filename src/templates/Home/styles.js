import styled from 'styled-components'

export const WrapperProjects = styled.section`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 80px 0;
  padding-bottom: 30px;
  position: relative;
`

export const CardProject = styled.article`
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 480px;

  &:first-child {
    grid-column-start: span 2 !important;
  }

  .wrapper-image {
    max-height: none;
    height: 100%;
    min-height: 115px;
  }

  img {
    object-fit: cover;
  }
`
