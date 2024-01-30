import { Container, LoginContent } from './styles';
import LoginFormComposition from '../../components/LoginFormComposition';

export default function Login() {
  return (
    <Container>
      <LoginContent>
        <h1>Entrar</h1>
        <LoginFormComposition />
      </LoginContent>
    </Container>
  );
}
