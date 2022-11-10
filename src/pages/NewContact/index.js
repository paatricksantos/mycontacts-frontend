import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import { Container } from './styles';

function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      };
      await ContactsService.createContact(contact);

      toast({ type: 'sucess', text: 'Contato cadastrado com sucesso!' });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o ccontato!'
      });
    }
  }
  return (
    <Container>
      <PageHeader title="Novo Contato" />

      <ContactForm onSubmit={handleSubmit} buttonLabel="Salvar alterações" />
    </Container>
  );
}

export default NewContact;
