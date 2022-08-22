import { HTMLAttributes } from 'react'
import { Container, Input } from './styled'
import { useRef } from 'react';

export const DateField = (props: HTMLAttributes<HTMLInputElement> & {
  type?: 'date' | 'datetime-local'
}) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Input
        {...props}
        ref={ref}
        type='text'
        onFocus={() => (ref.current!.type = props.type || 'datetime-local')}
        onBlur={() => (ref.current!.value.length ? ref.current!.type = props.type || 'datetime-local' :  ref.current!.type = 'text')}
      />
    </Container>
  )
}
