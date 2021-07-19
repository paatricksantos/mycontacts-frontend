import React from 'react';

import logo from '../../assets/images/logo.svg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="My Contacts" />
    </Container>
  );
}

export default Header;
