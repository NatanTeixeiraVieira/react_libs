import api from '../../services/api';
import { useFavoriteListStore } from '../../store/FavoriteList';
import { Post } from '../../types/post';
import {
  ButtonAddFavoriteList,
  Container,
  PostBody,
  PostContainer,
} from './styles';
import { useQuery } from 'react-query';

export default function Home() {
  const { data: posts, isLoading } = useQuery<Post[]>(
    'posts',
    async () => {
      return (await api.get('/posts')).data;
    },
    {
      retry: false,
      staleTime: Infinity,
    },
  );

  const {
    actions: { addPostInFavoriteList },
  } = useFavoriteListStore();

  return (
    <Container>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        posts?.map((post) => (
          <PostContainer
            key={post.id}
            onClick={() => {
              addPostInFavoriteList(post);
            }}
          >
            <div>
              <h2>{post.title}</h2>
              <PostBody>{post.body}</PostBody>
              <span>Autor: {post.userId}</span>
            </div>
            <ButtonAddFavoriteList>
              Adicionar aos favoritos
            </ButtonAddFavoriteList>
          </PostContainer>
        ))
      )}
    </Container>
  );
}
