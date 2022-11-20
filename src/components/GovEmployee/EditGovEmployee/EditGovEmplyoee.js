import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditGovEmployee({ id, apiURL, form, setForm }) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await axios.get(`${apiURL}/${id}`)
            setForm(response.data)
        }

        fetchEmployee()
    }, [id])

    // monitorar todas as mudanças do nosso formulário
    const handleChange = (e) => {
        // monitora alterações no checkbox
        if(e.target.name === "active") {
            setForm({...form, active: e.target.checked})
            return
        }

        // monitora alterações nos outros inputs
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const clone = { ...form }
            delete clone._id

            await axios.put(`${apiURL}/${id}`, clone)
            navigate("/listarServidores")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Editar funcionário
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar novo funcionários</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Funcionário ativo na empresa"
                                name="active"
                                onChange={handleChange}
                                defaultChecked
                            />
                        </Form.Group>
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
                        <Form.Group className="mb-3">
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
                        <Form.Group className="mb-3">
                            <Form.Label>Data de admissão</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Insira o valor da remuneração mensal"
                                name="admissionDate"
                                value={form.admissionDate}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" onChange={handleChange}>
                                <option value="0">Selecione uma opção</option>
                                <option value="Disponível">Disponível</option>
                                <option value="Alocado">Alocado</option>
                                <option value="De Férias">De Férias</option>
                                <option value="De Licença">De Licença</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Atualizar funcionário
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditGovEmployee;