import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { loginFormSchema } from '../../validations/schemas';
import { LoginDatas } from '../../types/login';
import Input from '../Input';
import { Eye, EyeOff } from 'lucide-react';
import { IconsEye, LoginFormContainer } from './styles';
import Button from '../Button';

export default function LoginFormComposition() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<LoginDatas>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { password: '' },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async ({ email, password }: LoginDatas) => {
    console.log(email, password);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input.Root>
        <Input.Label htmlFor="email">Email</Input.Label>
        <Input.Full>
          <Input.Field
            id="email"
            type="email"
            disabled={isSubmitting}
            {...register('email')}
          />
        </Input.Full>
        {errors.email && (
          <Input.HelperText>{errors.email.message}.</Input.HelperText>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label htmlFor="password">Senha</Input.Label>
        <Input.Full>
          <Input.Field
            id="password"
            type={showPassword ? 'text' : 'password'}
            disabled={isSubmitting}
            {...register('password')}
          />
          <IconsEye>
            {dirtyFields.password &&
              (showPassword ? (
                <EyeOff onClick={handleShowHidePassword} />
              ) : (
                <Eye onClick={handleShowHidePassword} />
              ))}
          </IconsEye>
        </Input.Full>

        {errors.password && (
          <Input.HelperText>{errors.password.message}.</Input.HelperText>
        )}
      </Input.Root>
      <Button type="submit" disabled={isSubmitting}>
        Entrar
      </Button>
    </LoginFormContainer>
  );
}
