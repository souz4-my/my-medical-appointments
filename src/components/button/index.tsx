import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 25px;
  font-weight: 500;
  min-width: 120px;
  font-size: 18px;
  margin: 8px 0px;
  height: 50px;
`
