import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  outline: none;
  border: 2px solid transparent;
  border-radius: 4px;

  padding: 0 16px;

  font-size: 16px;

  appearance: none;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    opacity: 1;
  }
`;
