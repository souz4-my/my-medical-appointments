import { Container, LogoContainer, LogoImage, LogoText } from './styled'
import { ClipLoader} from "react-spinners";
import { useNavigate } from "react-router-dom";
import { theme } from 'global'

import logo from 'assets/images/logo.png'

export const LandingPage = () => {
  const navigate = useNavigate()

  setTimeout(() => {navigate('/home')}, 1000)

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

