import styled, { DefaultTheme, css } from 'styled-components';

const gapLinks = (theme: DefaultTheme) =>
  css`
    gap: ${theme.spacings.small};
  `;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    background-color: ${theme.colors.primary};
    height: 4.5rem;

    ${theme.media.mobile} {
      padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    }
  `}
`;

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    ${gapLinks(theme)};
  `}

  & a {
    color: white;
    text-decoration: none;
  }
`;
