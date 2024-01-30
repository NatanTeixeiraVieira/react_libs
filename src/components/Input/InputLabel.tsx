import { InputLabelContainer } from './styles';
import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
  children,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return <InputLabelContainer {...rest}>{children}</InputLabelContainer>;
}
