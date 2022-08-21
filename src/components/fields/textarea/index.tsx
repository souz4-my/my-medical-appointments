import { TextareaHTMLAttributes } from 'react'
import { Container, Input } from './styled'

export const TextareaField = ({ rows = 4, ...rest}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <Container>
      <Input {...rest} rows={rows}/>
    </Container>
  )
}