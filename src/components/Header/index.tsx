import { Link } from 'react-router-dom';
import { HeaderContainer, Navigation } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/favorite-list">Lista de favoritos</Link>
        <Link to="/counter">Contador</Link>
        <Link to="/basic-form">Formulário básico</Link>
        <Link to="/login">Login</Link>
      </Navigation>
    </HeaderContainer>
  );
}
