import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: var(--white);
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: var(--extraBold);
  gap: 10px;
  justify-content: center;
  padding: 14px 20px 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--purple);
    color: var(--white);
  }

  &:active {
    transform: scale(0.9);
  }
`
