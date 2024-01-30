import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    ${theme.media.mobile} {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;

export const LoginContent = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    margin: 0 auto;

    ${theme.media.mobile} {
      width: 100%;
    }
  `}
`;
