import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import { Container } from './styles';

function EditContact() {
  return (
    <Container>
      <PageHeader title="Editar Patrick" />
      <ContactForm buttonLabel="Salvar alterações" />
    </Container>
  );
}

export default EditContact;
