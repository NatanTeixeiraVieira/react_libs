'use client';

import styled, { css } from 'styled-components';
import { InputRootProps } from './InputRoot';
import { InputFullProps } from './InputFull';

export const Container = styled.div<InputRootProps>``;

export const InputLabelContainer = styled.label``;

export const InputFullContainer = styled.div<InputFullProps>`
  ${({ theme, hasError }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
    margin-top: calc(${theme.spacings.xxxsmall} / 2);
    border: ${theme.border.default};
    border-radius: ${theme.border.radius.big};
    border-color: ${hasError && theme.colors.error};
    gap: ${theme.spacings.xxxsmall};
    width: 100%;
  `}
`;

export const InputFieldContainer = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    flex: auto;
    font-size: 1rem;
    background-color: inherit;

    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 1.2rem;
    cursor: pointer;
    margin-left: ${theme.spacings.xsmall};
  `}
`;

export const InputHelperTextContainer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 0.8rem;
    margin-top: 2px;
  `}
`;
