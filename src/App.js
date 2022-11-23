import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage";
import GovEmployeeList from "./components/GovEmployee/GovEmployeeList/GovEmployeeList";
import GovEmployeeDetails from "./components/GovEmployee/GovEmployeeDetails/GovEmployeeDetails";
import AddGovEmployee from "./components/GovEmployee/AddGovEmployee/AddGovEmployee";
import EditGovEmployee from "./components/GovEmployee/EditGovEmployee/EditGovEmplyoee";
import CourseList from "./components/Courses/CourseList/CourseList";
import CourseDetails from "./components/Courses/CourseDetails/CourseDetails";
import AddCourse from "./components/Courses/AddCourse/AddCourse";
import EditCourse from "./components/Courses/EditCourse/EditCourse";

function App() {
  
  const apiURL = "https://ironrest.cyclic.app/cursos";
  const [form, setForm] = useState({
    matricula: "",
    nome: "",
    foto: "",
    orgao: "",
    vinculo: "",
    cargo: "",
    lotacao: "",
    exercicio: "",
    email: "",
    telefone: "",
    celular: "",
    dataAdmissao: "",
    cpf: "",
    dataNascimento: "",
    Naturalidade: "",
  });

  return (
    <div className="App bg-light" style={{ height: "100vh" }}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/listarServidores"
          element={<GovEmployeeList apiURL={apiURL} />}
        />
        <Route
          path="/listarServidor/:id"
          element={<GovEmployeeDetails apiURL={apiURL} />}
        />
        <Route
          path="/cadastrarServidor"
          element={
            <AddGovEmployee apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="//editarServidor/:id"
          element={
            <EditGovEmployee apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="/listarCursos"
          element={<CourseList apiURL={apiURL} />}
        />
        <Route
          path="/listarCurso/:id"
          element={<CourseDetails apiURL={apiURL} />}
        />
        <Route
          path="/cadastrarCurso"
          element={
            <AddCourse apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="//editarCurso/:id"
          element={
            <EditCourse apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
