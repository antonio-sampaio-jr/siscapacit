import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormLabel,
  Spinner,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CourseList({ apiURLCourses }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchCourses = async () => {
        const response = await axios.get(apiURLCourses);
        setCourses(response.data);
        setIsLoading(false);
      };

      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteCourse = async (id) => {
    await axios.delete(`${apiURLCourses}/${id}`);
    navigate("/listarCursos");
  };
  const renderCourses = courses
    .filter((course) =>
      course.nome.toLowerCase().includes(search.toLowerCase())
    )
    .map((course) => {
      return (
        <tr key={course._id}>
          <td>
            <img src={course.foto} width="50" heigth="50" alt="" />
          </td>
          <td>{course.nome}</td>
          <td>{course.ofertante}</td>
          <td>{course.tipo}</td>
          <td>{course.periodoInscricao}</td>
          <td>{course.periodoRealizacao}</td>
          <td style={{ width: "250px" }}>
            <Link
              className="btn btn-outline-primary btn-sm m-1"
              role="button"
              to={`/listarCurso/${course._id}`}
            >
              Detalhar
            </Link>
            <Link
              className="btn btn-outline-secondary btn-sm m-1"
              role="button"
              to={`/editarCurso/${course._id}`}
            >
              Alterar
            </Link>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                window.confirm("Deseja realmente EXCLUIR?") &&
                  deleteCourse(course._id);
              }}
            >
              Excluir
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <Form className="my-4">
        <FormLabel>
          <h3>Total de Cursos:{courses.length}</h3>
        </FormLabel>
        <Form.Control
          type="search"
          placeholder="Procurar curso"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p />
        <Button variant="info" size="sm">
          <Link className="nav-link" to="/cadastrarCurso">
            Novo Curso
          </Link>
        </Button>
      </Form>
      {isLoading && <Spinner className="" animation="border" />}
      {!isLoading && (
        <Table className="mt-4" striped bordered hover>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Ofertante</th>
              <th>Tipo</th>
              <th>Período de inscrição</th>
              <th>Período de Realização</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{renderCourses}</tbody>
        </Table>
      )}
    </Container>
  );
}

export default CourseList;
