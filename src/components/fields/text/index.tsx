import { HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import { Container, Input } from './styled'

export const TextField = (props: HTMLAttributes<HTMLInputElement> & {
  type?: HTMLInputTypeAttribute
}) => {
  return (
    <Container>
      <Input {...props} />
    </Container>
  )
}