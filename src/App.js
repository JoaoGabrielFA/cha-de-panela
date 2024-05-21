import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';


function App() {

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            localStorage.getItem('nome_do_convidado_danyeriquelme') ? <Navigate to="/home" /> : <Login />
          }
        />
        <Route element={<Home />} path='/home' />
        <Route element={<Produtos />} path='/produtos/:categoria' />
      </Routes>
    </Router>
  );
}

export default App;