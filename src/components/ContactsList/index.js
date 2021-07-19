import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Container, Header, ListContainer, Card } from './styles';

function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
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
            <a href="/">
              <img src={edit} alt="editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

export default ContactsList;
