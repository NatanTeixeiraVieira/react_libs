import { ReactNode } from 'react'
import { InputHelperTextContainer } from './styles'

type InputHelperTextProps = {
  children: ReactNode
}

export default function InputHelperText({children}: InputHelperTextProps) {
  return <InputHelperTextContainer>{children}</InputHelperTextContainer>
}
