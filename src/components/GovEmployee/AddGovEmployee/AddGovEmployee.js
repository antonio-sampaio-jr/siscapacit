import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddGovEmployee({ apiURL, form, setForm }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    //monitoramento dos inputs
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // requisição axios.post
      await axios.post(apiURL, form);
      // navegação para a página de funcionários
      navigate("/listarServidores");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <p />
      <h2>Cadastrar Novo Servidor</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Número da matrícula do servidor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o número da matrícula"
                name="matricula"
                value={form.matricula}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do servidor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome completo do servidor"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Foto do servidor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o link para a foto do servidor"
                name="foto"
                value={form.foto}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Órgão</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do òrgão ao qual o servidor está vinculado"
                name="orgao"
                value={form.orgao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Tipo de vinculo</Form.Label>
              <Form.Select name="vinculo" onChange={handleChange}>
                <option value="0">Selecione uma opção</option>
                <option value="Estatutário">Estatutário</option>
                <option value="Comissionado">Comissionado</option>
                <option value="Terceirizado">Terceirizado</option>
                <option value="Estagiário">Estagiário</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Data de admissão do servidor</Form.Label>
              <Form.Control
                type="date"
                name="dataAdmissao"
                value={form.dataAdmissao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o cargo do servidor"
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Lotação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a cidade de lotação do servidor"
                name="lotacao"
                value={form.lotacao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Departamento de Exercício</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o departamento de exercício do servidor"
                name="exercicio"
                value={form.exercicio}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o endereço de e-mail do servidor"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Número de telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o número de telefone fixo (com DDD)"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Número de telefone celular</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o número de telefone celular (com DDD)"
                name="celular"
                value={form.celular}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Data de nascimento do servidor</Form.Label>
              <Form.Control
                type="date"
                name="dataNascimento"
                value={form.dataNascimento}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Naturlidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome da cidade onde o servidor nasceu"
                name="Naturalidade"
                value={form.Naturalidade}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o número do CPF do servidor"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <p />
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        <Button variant="success" type="submit">
          Cadastrar
        </Button>
        <p />
      </Form>
    </Container>
  );
}

export default AddGovEmployee;
