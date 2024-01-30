import { ReactNode } from 'react';
import { InputFullContainer } from './styles';

export type InputFullProps = {
  children: ReactNode;
  hasError?: boolean;
};

export default function InputFull({
  children,
  hasError = false,
}: InputFullProps) {
  return (
    <InputFullContainer hasError={hasError}>{children}</InputFullContainer>
  );
}
