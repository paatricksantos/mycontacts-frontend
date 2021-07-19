import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer
} from './styles';

function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome </span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Patrick</strong>
              <small>Instagram</small>
            </div>
            <span>patrick@patrick.com.br</span>
            <span>(21) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

export default Home;
