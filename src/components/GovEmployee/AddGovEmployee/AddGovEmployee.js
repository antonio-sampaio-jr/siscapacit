import axios from "axios"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function AddGovEmployee({ apiURL, form, setForm }) {
    const navigate = useNavigate()

    const handleChange = (e) => {
        // monitoramento do checkbox
        if(e.target.name === "active") {
            setForm({...form, active: e.target.checked})
            return
        }

        //monitoramento dos inputs
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // requisição axios.post
            await axios.post(apiURL, form)
            // navegação para a página de funcionários
            navigate("/listarServidores")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <p />
            <h2>Cadastrar Novo Servidor</h2>
            <Form onSubmit={ handleSubmit }>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Funcionário ativo na empresa"
                                name="active"
                                onChange={handleChange}
                                checked={form.active}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome do funcionário</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira o nome completo do funcionário"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de telefone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira o número de telefone para contato com DDD"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Endereço de e-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insira o endereço de e-mail válido para contato"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Remuneração por mês</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insira o valor da remuneração mensal"
                                name="salary"
                                value={form.salary}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Departamento</Form.Label>
                            <Form.Select name="department" onChange={handleChange}>
                                <option value="0">Selecione uma opção</option>
                                <option value="People">People</option>
                                <option value="Front-end">Front-end</option>
                                <option value="Back-end">Back-end</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Financeiro">Financeiro</option>
                                <option value="Marketing">Marketing</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Data de admissão</Form.Label>
                            <Form.Control
                                type="date"
                                name="admissionDate"
                                value={form.admissionDate}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" onChange={handleChange}>
                                <option value="0">Selecione uma opção</option>
                                <option value="Disponível">Disponível</option>
                                <option value="Alocado">Alocado</option>
                                <option value="De Férias">De Férias</option>
                                <option value="De Licença">De Licença</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <p />
                <Button variant="secondary" onClick={() => navigate(-1)}>Voltar</Button>
                <Button variant="success" type="submit">Cadastrar</Button>
                <p />
            </Form>
        </Container>
    )
}

export default AddGovEmployee;