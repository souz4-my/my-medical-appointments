import { Container, LogoContainer, LogoImage, LogoText } from './styled'
import {ClipLoader} from "react-spinners";

import logo from 'assets/images/logo.png'
import { theme } from 'global'

export const LandingPage = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImage src={logo}/>
        <LogoText>medical appointments</LogoText>
        <ClipLoader color={theme.colors.background.primary} />
      </LogoContainer>
    </Container>
  )
}

