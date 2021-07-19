import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 201px;
  }
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;

    background: #fff;

    padding: 0 16px;

    outline: 0;
    border: 0;
    border-radius: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
