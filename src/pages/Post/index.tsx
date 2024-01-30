import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, PostForm, Textarea } from './styles';
import { usePost } from './usePost';

export default function Post() {
  const { register, handleSubmit, onSubmit } = usePost();

  return (
    <Container>
      <Content>
        <h1>Postar</h1>
        <PostForm onSubmit={handleSubmit(onSubmit)}>
          <Input.Root>
            <Input.Label htmlFor="title">Título</Input.Label>
            <Input.Full>
              <Input.Field id="title" {...register('title')} />
            </Input.Full>
          </Input.Root>

          <Input.Root>
            <Input.Label htmlFor="content">Conteúdo</Input.Label>
            <Textarea rows={4} id="content" {...register('content')}></Textarea>
          </Input.Root>
          <Button>Enviar</Button>
        </PostForm>
      </Content>
    </Container>
  );
}
