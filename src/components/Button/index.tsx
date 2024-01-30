import { ButtonContainer } from './styles';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  width?: string;
  backgroundColor?: string;
  height?: string;
  color?: string;
};

export default function Button({
  width,
  backgroundColor,
  height,
  color,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      width={width}
      backgroundColor={backgroundColor}
      height={height}
      color={color}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}
