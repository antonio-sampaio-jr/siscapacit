import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, FormLabel, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GovEmployeeList({ apiURL }) {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchEmployees = async () => {
                const response = await axios.get(apiURL)
                setEmployees(response.data)
                setIsLoading(false)
            }

            fetchEmployees()
        } catch (error) {
            console.log(error)
        }
    }, []);

    const deleteEmployee = async (id) => {
            await axios.delete(`${apiURL}/${id}`);
            navigate("/listarServidores");
    };

    const renderEmployees = employees
        .filter((employee) => employee.nome.toLowerCase().includes(search.toLowerCase()))
        .map((employee) => {
            return (
                <tr key={employee._id}>
                    <td>
                        <img src={employee.foto} width="50" heigth="50" alt=""/>  
                    </td>
                    <td>{employee.nome}</td>
                    <td>{employee.cargo}</td>
                    <td>{employee.orgao}</td>
                    <td>{employee.lotacao}</td>
                    <td>{employee.email}</td>
                    <td style={{width:'250px'}}>
                        <Link className="btn btn-outline-primary btn-sm m-1" role="button" to={`/listarServidor/${employee._id}`}>Detalhar</Link>
                        <Link className="btn btn-outline-secondary btn-sm m-1" role="button" to={`/editarServidor/${employee._id}`}>Alterar</Link>
                        <Button variant="danger" size="sm" onClick={() => {window.confirm("Deseja realmente EXCLUIR?") && deleteEmployee(employee._id)}}>Excluir</Button>     
                    </td>
                </tr>
            )
        })

    return (
        <Container>
            <Form className="my-4">
                <FormLabel>
                    <h3>Total de Servidores:{employees.length}</h3>
                </FormLabel>
                <Form.Control
                    type="search"
                    placeholder="Procurar servidor"
                    value={ search }
                    onChange={ (e) => setSearch(e.target.value) }
                />
                < p/>
                <Button variant="info" size="sm">
                        <Link className="nav-link" to="/cadastrarServidor">Novo Servidor</Link>
                </Button>
            </Form>
            {isLoading && <Spinner className="" animation="border" />}
            {!isLoading &&
                <Table className="mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Órgão</th>
                            <th>Lotação</th>
                            <th>Email</th>
                             <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderEmployees }
                    </tbody>
                </Table>
            }
        </Container>
    )
}

export default GovEmployeeList;