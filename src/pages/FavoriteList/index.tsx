import { useFavoriteListStore } from '../../store/FavoriteList';
import { Container, PostBody, PostContainer } from './styles';

export default function FavoriteList() {
  const {
    state: { favoriteList },
  } = useFavoriteListStore();

  return (
    <Container>
      {favoriteList?.map((post) => (
        <PostContainer key={post.id}>
          <h2>{post.title}</h2>
          <PostBody>{post.body}</PostBody>
          <span>Autor: {post.userId}</span>
        </PostContainer>
      ))}
    </Container>
  );
}
