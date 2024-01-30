import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 20rem);
  gap: 2rem 3rem;
  margin-top: 2rem;
  box-sizing: border-box;
`;

export const PostContainer = styled.div`
  width: 20rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
`;

export const PostBody = styled.p`
  margin: 0.5rem 0 1rem 0;
`;

export const ButtonAddFavoriteList = styled(Button)`
  cursor: pointer;
`;
