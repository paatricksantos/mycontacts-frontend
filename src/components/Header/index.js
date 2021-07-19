import React from 'react';

import logo from '../../assets/images/logo.svg';
import { Container, InputSearchContainer } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="My Contacts" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}

export default Header;
