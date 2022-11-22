import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddCourse({ apiURLCourses, formCourses, setFormCourses }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    //monitoramento dos inputs
    setFormCourses({ ...formCourses, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // requisição axios.post
      await axios.post(apiURLCourses, formCourses);
      // navegação para a página de funcionários
      navigate("/listarCursos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <p />
      <h2>Cadastrar Novo Curso</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do curso"
                name="nome"
                value={formCourses.nome}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Foto do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o link para a foto do curso"
                name="foto"
                value={formCourses.foto}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Id do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o id do curso (seguir sequência)"
                name="idCurso"
                value={formCourses.idCurso}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Forma de realização</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira forma de realização do curso"
                name="formaRealizacao"
                value={formCourses.formaRealizacao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Local</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o local do curso"
                name="local"
                value={formCourses.local}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Ofertante</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do ofertante"
                name="ofertante"
                value={formCourses.ofertante}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Período de inscrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o período de inscrição"
                name="periodoInscricao"
                value={formCourses.periodoInscricao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Vagas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a quantidade de vagas"
                name="vagas"
                value={formCourses.vagas}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Período de realização</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o período de realização do curso"
                name="periodoRealizacao"
                value={formCourses.periodoRealizacao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o valor"
                name="valor"
                value={formCourses.valor}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Tipo de curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o tipo de curso"
                name="tipo"
                value={formCourses.tipo}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Site</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o site do curso"
                name="site"
                value={formCourses.site}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Descrição do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira uma breve descrição do curso"
                name="descricao"
                value={formCourses.descricao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Critérios de seleção</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira os critérios de seleção do curso"
                name="criteriosSelecao"
                value={formCourses.criteriosSelecao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Situação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a situação do curso (Inscrições abertas/Em realização/Concluído)"
                name="situacao"
                value={formCourses.situacao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <p />
        <Button
          variant="secondary"
          onClick={() => navigate(-1)}
          style={{ margin: "10px" }}
        >
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

export default AddCourse;
