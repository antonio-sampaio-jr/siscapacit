import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PeopleList from './components/GovEmployee/GovEmployeeList/GovEmployeeList';
import NavigationBar from './components/NavigationBar/NavigationBar';
import PeopleDetails from './components/GovEmployee/GovEmployeeDetails/GovEmployeeDetails';
import AddPeople from './components/GovEmployee/AddGovEmployee/AddGovEmployee';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import ErrorPage from './pages/ErrorPage';
import GovEmployeeList from './components/GovEmployee/GovEmployeeList/GovEmployeeList';
import GovEmployeeDetails from './components/GovEmployee/GovEmployeeDetails/GovEmployeeDetails';
import AddGovEmployee from './components/GovEmployee/AddGovEmployee/AddGovEmployee';

function App() {
  const apiURL = "https://ironrest.cyclic.app/ironrh-91"
  
  const [form, setForm] = useState({
    name: "",
    salary: "",
    email: "",
    phone: "",
    department: "",
    admissionDate: "",
    status: "",
    active: true
  }) 

  return (
    <div className="App bg-light" style={{ height:'100vh'}}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/listarServidores" element={ <GovEmployeeList apiURL={ apiURL } /> } />
        <Route path="/listarServidor/:id" element={ <GovEmployeeDetails apiURL={ apiURL } /> } />
        <Route path="/cadastrarServidor" element={ <AddGovEmployee apiURL={ apiURL } form={ form } setForm={ setForm } /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
