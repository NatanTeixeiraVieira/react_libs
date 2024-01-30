import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const ButtonContainer = styled.button<
  Pick<ButtonProps, 'backgroundColor' | 'width' | 'height'>
>`
  ${({
    theme,
    width = '100%',
    height = '50px',
    backgroundColor = theme.colors.primary,
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${backgroundColor};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  `}
`;
