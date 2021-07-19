import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import { Container } from './styles';

function NewContact() {
  return (
    <Container>
      <PageHeader title="Novo Contato" />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">Salvar alterações</Button>
    </Container>
  );
}

export default NewContact;
