import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse({ apiURLCourses, formCourses, setFormCourses }) {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`${apiURLCourses}/${id}`);
      setFormCourses(response.data);
    };

    fetchCourse();
  }, [id, apiURLCourses, setFormCourses]);

  // monitorar todas as mudanças do nosso formulário
  const handleChange = (e) => {
    // monitora alterações no checkbox
    if (e.target.name === "active") {
      setFormCourses({ ...formCourses, active: e.target.checked });
      return;
    }

    // monitora alterações nos outros inputs
    setFormCourses({ ...formCourses, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clone = { ...formCourses };
      delete clone._id;

      await axios.put(`${apiURLCourses}/${id}`, clone);
      navigate("/listarCursos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <p />
      <h2>Alterar Curso</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Id do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alterar o Id do curso?"
                name="idCurso"
                value={formCourses.idCurso}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alterar o nome do Curso?"
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
                placeholder="Alterar o link da foto do curso?"
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
              <Form.Label>Forma de realização</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alterar a forma de realização do curso?"
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
                placeholder="Alterar o local do curso?"
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
                placeholder="Alterar o ofertante do curso?"
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
                placeholder="Alterar o período de inscrição do curso?"
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
                placeholder="Alterar a quantidade de vagas do curso?"
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
                placeholder="Alterar o período de realização do curso?"
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
                type="text"
                placeholder="Alterar o valor do curso?"
                name="valor"
                value={formCourses.valor}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Tipo de curso</Form.Label>
              <Form.Select
                value={formCourses.tipo}
                name="tipo"
                onChange={handleChange}
              >
                <option value="Aperfeiçoamento">Aperfeiçoamento</option>
                <option value="Especialização">Especialização</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutorado">Doutorado</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Site</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alterar o site do curso?"
                name="site"
                value={formCourses.site}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Descrição do curso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alterar a descrição do curso?"
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
                placeholder="Alterar os critérios de seleção?"
                name="criteriosSelecao"
                value={formCourses.criteriosSelecao}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Situação</Form.Label>
              <Form.Select
                value={formCourses.situacao}
                name="situacao"
                onChange={handleChange}
              >
                <option value="Inscrições Abertas">Inscrições Abertas</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluído">Concluído</option>
              </Form.Select>
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
          Alterar
        </Button>
        <p />
      </Form>
    </Container>
  );
}

export default EditCourse;
