import { InputHTMLAttributes, forwardRef } from 'react';
import { InputFieldContainer } from './styles';

export default forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function InputField(props, ref) {
  return <InputFieldContainer ref={ref} {...props} />;
});
