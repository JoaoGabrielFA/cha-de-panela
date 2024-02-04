import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './pages/login/Login';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path=''/>
        <Route element={<Main />} path='/home'/>
      </Routes>
    </Router>
  );
}

export default App;