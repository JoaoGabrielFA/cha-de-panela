import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path=''/>
        <Route element={<Home />} path='/home'/>
        <Route element={<Produtos />} path='/produtos'/>
      </Routes>
    </Router>
  );
}

export default App;