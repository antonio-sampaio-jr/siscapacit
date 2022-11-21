import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faCalendarCheck, faCircleCheck, faBuildingUser} from "@fortawesome/free-solid-svg-icons";

function GovEmployeeDetails({ apiURL }) {
    const [employee, setEmployee] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const fetchEmployee = async () => {
                const response = await axios.get(`${apiURL}/${id}`)
                setEmployee(response.data)
            }

            fetchEmployee()
        } catch (error) {
            console.log(error)
        }
    }, [id])
   
    return (
        <Container style={{ height: '80vh' }} className="d-flex justify-content-center align-items-center">
            <Card className="text-center w-100">
                <Card.Header>
                    <Card.Title className="m-0">
                        <h3>{employee.nome}</h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Informações Funcionais</Card.Title>
                    < p/>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={employee.foto} />
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Matrícula: {employee.matricula}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Órgão: {employee.orgao}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Cargo: {employee.cargo}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Lotação: {employee.lotacao}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faBuildingUser} /> Exercício: {employee.exercicio}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Vínculo: {employee.vinculo}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCalendarCheck} /> Data de Admissão: {employee.dataAdmissao}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Card.Title>Informações Pessoais</Card.Title>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faAt} /> Email: {employee.email}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faPhone} /> Telefone: {employee.telefone}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faPhone} /> Celular: {employee.celular}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> CPF: {employee.cpf}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCalendarCheck} /> Data de Nascimento: {employee.dataNascimento}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> Naturalidade: {employee.Naturalidade}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Button
                                variant="secondary"
                                onClick={() => navigate(-1)}
                            >
                                Voltar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default GovEmployeeDetails;