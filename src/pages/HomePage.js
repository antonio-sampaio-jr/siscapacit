import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    // className="d-flex align-items-center justify-content-center"
    // className="d-grid gap-2"
    <Container style={{ height: "70vh", padding: "30px" }}>
      <Row>
        <Button className="p-4" variant="primary" size="lg">
          <Link className="nav-link" to="/listarServidores">
            Entrar no Sistema de Capacitação de Servidores (SisCAPACIT 1.0)
            <p />= MÓDULO ADMIN = Informações de SERVIDORES
          </Link>
        </Button>
      </Row>
      <Row>
        <Button className="p-4" variant="danger" size="lg">
          <Link className="nav-link" to="/listarCursos">
            Entrar no Sistema de Capacitação de Servidores (SisCAPACIT 1.0)
            <p />= MÓDULO ADMIN = Informações de CURSOS
          </Link>
        </Button>
      </Row>
    </Container>
  );
}

export default HomePage;
