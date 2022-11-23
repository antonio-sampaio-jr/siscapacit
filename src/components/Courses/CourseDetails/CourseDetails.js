import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CourseDetails({ apiURLCourses }) {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const fetchCourse = async () => {
        const response = await axios.get(`${apiURLCourses}/${id}`);
        setCourse(response.data);
      };

      fetchCourse();
    } catch (error) {
      console.log(error);
    }
  }, [id, apiURLCourses]);

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card className="text-center w-100">
        <Card.Header>
          <Card.Title className="m-0">
            <h3>{course.nome}</h3>
            <a href={course.site} target="_blank" rel="noreferrer">
              {course.site}
            </a>
            <p />
            <p>Situação: {course.situacao}</p>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p />
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src={course.foto}
                style={{ height: "200px", width: "200px" }}
              />
              <p />
            </Col>

            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item action variant="primary">
                  Forma de realização: {course.formaRealizacao}
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  Local: {course.local}
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Ofertante: {course.ofertante}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  Período de inscrição: {course.periodoInscricao}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item action variant="primary">
                  Quantidade de vagas: {course.vagas}
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  Tipo de curso: {course.tipo}
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Valor: R${course.valor}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  Período de realização: {course.periodoRealizacao}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Row>
              <ListGroup variant="flush">
                <ListGroup.Item action variant="primary">
                  Descrição: {course.descricao}
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  Critério de seleção: {course.criteriosSelecao}
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button variant="secondary" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseDetails;
