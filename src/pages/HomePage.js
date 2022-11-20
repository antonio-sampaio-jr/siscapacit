import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <Container style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
            <Button className="p-4" variant="primary" size="lg">
                <Link className="nav-link" to="/listarServidores">
                    Entrar no Sistema de Capacitação de Servidores (SisCAPACIT)
                </Link>
            </Button>
        </Container>
    )
}

export default HomePage