import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background.secondary};
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px 32px;
  display: flex;
  height: 100%;
  width: 100%;
`

export const Header = styled.h1`
  font-weight: normal;
  margin-bottom: 8px;
  width: 100%;
`

export const SubHeader = styled.h4`
  font-weight: normal;
  width: 100%;
`
