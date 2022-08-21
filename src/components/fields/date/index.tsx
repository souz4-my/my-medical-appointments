import { HTMLAttributes } from 'react'
import { Container, Input } from './styled'
import { useRef } from 'react';

export const DateField = (props: HTMLAttributes<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Input
        {...props}
        ref={ref}
        type='text'
        onFocus={() => (ref.current!.type = 'date')}
        onBlur={() => (ref.current!.value.length ? ref.current!.type = 'date' :  ref.current!.type = 'text')}
      />
    </Container>
  )
}
