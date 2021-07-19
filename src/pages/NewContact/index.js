import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import { Container } from './styles';

function NewContact() {
  return (
    <Container>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Salvar alterações" />
    </Container>
  );
}

export default NewContact;
