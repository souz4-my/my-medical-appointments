import { Button } from 'components/button'
import { TextField, DateField, TextareaField } from 'components/fields'
import { Container, Header, SubHeader } from './styled'

export const HomePage = () => {
  return (
    <Container>
      <Header>Bem vindo!</Header>
      
      <SubHeader>Crie lembretes para suas consultas</SubHeader>

      <TextField
        placeholder='Nome do paciente'
      />

      <TextField
        placeholder='E-mail do paciente'
        inputMode='email'
        />
      
      <DateField
        placeholder='Data da consulta'
      />
      
      <TextareaField
        placeholder='Descrição da consulta'
      />
      <Button>Salvar</Button>

    </Container>
  ) 
}
