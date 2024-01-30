import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import './styles.css';

export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const basicFormSchema = z.object({
  email: z
    .string({ required_error: 'O email é obrigatório' })
    .trim()
    .min(1, 'O email é obrigatório')
    .email('Email inválido.')
    .regex(regexEmail, 'Email inválido.'),
});

type BasicFormDatas = z.infer<typeof basicFormSchema>;

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFormDatas>({
    resolver: zodResolver(basicFormSchema),
  });

  const submitForm = (datas: BasicFormDatas) => {
    console.log(datas);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submitForm)} noValidate>
      <div>
        <div className="input_button">
          <input className="input_email" type="text" {...register('email')} />
          <button className="button_submit" type="submit">
            Enviar
          </button>
        </div>
        <p>{errors.email?.message}</p>
      </div>
    </form>
  );
}
