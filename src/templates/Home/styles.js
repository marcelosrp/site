import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperProjects = styled(motion.section)`
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  margin: 80px 0;
  padding-bottom: 30px;
  position: relative;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
