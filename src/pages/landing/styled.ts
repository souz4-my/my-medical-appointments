import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background.secondary};
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`

export const LogoContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
` 

export const LogoImage = styled.img`
  padding-bottom: 16px;
  height: 90px;
  width: 90px;
`

export const LogoText = styled.h1`
  font-family: ${({theme}) => theme.fonts.emphasis};
  color: ${({theme}) => theme.colors.text.emphasis};
  padding-bottom: 16px;
`