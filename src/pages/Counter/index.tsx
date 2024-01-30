import { useEffect, useRef, useState } from 'react';
import { ButtonIncreaseCounter, Counter, UseStateContainer } from './styles';

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {}, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <UseStateContainer>
      <Counter>{counter}</Counter>
      <ButtonIncreaseCounter onClick={handleIncreaseCounter}>
        +
      </ButtonIncreaseCounter>
      <input type="text" ref={inputRef} />
    </UseStateContainer>
  );
}
