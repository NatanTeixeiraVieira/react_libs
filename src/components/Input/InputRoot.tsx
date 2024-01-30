import { ReactNode } from 'react';

import { Container } from './styles';

export type InputRootProps = {
  children: ReactNode;
  width?: string;
  margin?: string;
};

export default function InputRoot({ children, width, margin }: InputRootProps) {
  return (
    <Container width={width} margin={margin}>
      {children}
    </Container>
  );
}
