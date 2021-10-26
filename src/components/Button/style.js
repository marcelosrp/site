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

  &.back-to-top {
    background-color: var(--white);
    border: none;
    border-radius: 50%;
    bottom: 3rem;
    color: var(--background);
    cursor: pointer;
    font-weight: var(--bold);
    height: 4.5rem;
    right: 3rem;
    position: fixed;
    padding: 0;
    width: 4.5rem;
  }

  &:hover {
    background-color: var(--purple);
    color: var(--white);
  }

  &:active {
    transform: scale(0.9);
  }
`
