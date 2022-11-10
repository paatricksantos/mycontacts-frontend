import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    text-decoration: none;

    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;

  margin-bottom: 8px;

  button {
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;

    img {
      transition: transform 0.2s ease-in;

      transform: ${({ orderBy }) =>
        orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;

        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;

  .details {
    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: flex-start;
  gap: 24px;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
