import styled, { createGlobalStyle, css } from 'styled-components';

const headerHeightInRem = 4.5;
const footerHeightInRem = 5;

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    html {
      overflow-x: hidden;
      background-color: ${theme.colors.background};
    }
  `}
`;

export const Main = styled.main`
  min-height: calc(100vh - ${headerHeightInRem}rem - ${footerHeightInRem}rem);
  padding: 2rem;
`;
