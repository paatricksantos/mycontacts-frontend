import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;

  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  padding: 0 16px;

  color: #fff;
  font-weight: bold;
  font-size: 16px;

  border: 0;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }

  ${({ danger, theme }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }

      &:disabled {
        background: #ccc;
        cursor: default;
      }
    `}
`;
