import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardProject = styled(motion.article)`
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 30rem;
  transition: all 0.3s linear;

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

  &:hover {
    transform: scale(0.98);
  }

  a {
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
  }

  img {
    object-fit: cover;

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
