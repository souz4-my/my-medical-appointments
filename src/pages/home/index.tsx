import { Button } from 'components/button'
import { TextField, DateField, TextareaField } from 'components/fields'
import { axiosClient } from 'config/axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Container, Form, Header, SubHeader } from './styled'

export const HomePage = () => {
  const [appointmentData, setAppointmentData] = useState({})
  
  const handleCreate =  async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const response = await axiosClient().post('/appointment', appointmentData)

    console.log(response)
  }

  return (
    <Container>
      <Header>Bem vindo!</Header>
      
      <SubHeader>Crie lembretes para suas consultas</SubHeader>

      <Form onSubmit={handleCreate}>
        <TextField
          placeholder='Nome do paciente'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAppointmentData({
              ...appointmentData,
              name: e.target.value
            })
          }}
        />

        <TextField
          placeholder='E-mail do paciente'
          inputMode='email'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAppointmentData({
              ...appointmentData,
              email: e.target.value
            })
          }}
        />
        
        <DateField
          placeholder='Data da consulta'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAppointmentData({
              ...appointmentData,
              date: e.target.value
            })
          }}
        />
        
        <TextareaField
          placeholder='Descrição da consulta'
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setAppointmentData({
              ...appointmentData,
              description: e.target.value
            })
          }}
        />
        
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  ) 
}
