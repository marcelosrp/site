import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = styled(motion.section)`
  margin: 5rem 0;
  width: 100%;

  @media (min-width: 1200px) {
    width: 105rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: var(--bold);
    line-height: 1.8;

    @media (min-width: 700px) {
      font-size: 2.8rem;
      line-height: 1.5;
    }
  }

  button {
    margin-top: 3rem;
  }
`
