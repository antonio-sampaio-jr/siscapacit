import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faCalendarCheck, faCircleCheck, faBuildingUser, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import EditPeople from "../EditGovEmployee/EditGovEmplyoee";

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
        <Container style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <Card className="text-center w-100">
                <Card.Header>
                    <Card.Title className="m-0">
                        <h3>{employee.name}</h3>
                    </Card.Title>
                    { employee.active && <h6 className="text-success">Este funcionário está ativo na empresa</h6>}
                    { !employee.active && <h6 className="text-secondary">Este funcionário não está ativo na empresa</h6> }
                </Card.Header>
                <Card.Body>
                    <Card.Title>Informações trabalhista</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCalendarCheck} /> {employee.admissionDate}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faCircleCheck} /> {employee.status}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faMoneyCheckDollar} /> R${employee.salary},00
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faBuildingUser} /> {employee.department}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Card.Title>Informações de contato</Card.Title>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faAt} /> {employee.email}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                <FontAwesomeIcon icon={faPhone} /> {employee.phone}
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