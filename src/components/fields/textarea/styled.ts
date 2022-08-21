import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
	flex-direction: column;
  margin: 8px 0px;
	display: flex;
  width: 100%;
`

export const Input = styled.textarea<TextareaHTMLAttributes<HTMLTextAreaElement>>`
  border-bottom: 2px solid ${({theme}) => theme.colors.text.emphasis};
  padding: 24px 4px;
  font-size: 18px;
  height: 160px;
`
