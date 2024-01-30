import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema } from '../../validations/schemas';
import { useForm } from 'react-hook-form';
import { FormPostDatas, Post } from '../../types/post';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const usePost = () => {
  const { register, handleSubmit } = useForm<FormPostDatas>({
    resolver: zodResolver(postSchema),
  });

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ title, content }: FormPostDatas) => {
      const response = await api.post('/posts', {
        title,
        body: content,
        userId: 1,
      });
      return response.data;
    },
    onSuccess: (data: Post) => {
      queryClient.setQueryData<Post[]>('posts', (currentDatas) => [
        data,
        ...currentDatas!,
      ]);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async ({ title, content }: FormPostDatas) => {
    mutation.mutate({
      title,
      content,
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
