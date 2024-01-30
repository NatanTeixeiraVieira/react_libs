import styled, { css } from 'styled-components';

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.small};
  `}
`;

export const IconsEye = styled.div`
  cursor: pointer;
`;
