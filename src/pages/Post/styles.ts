import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 0 auto;
  width: 30%;
`;

export const PostForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1rem;
    padding: ${theme.spacings.xsmall};
    border: ${theme.border.default};
    border-radius: ${theme.border.radius.big};
  `}
`;
