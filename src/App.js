import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Nav from './components/Nav/Nav.js';

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Search from './pages/Search/Search.js';
import RegisterUser from './pages/Register/RegisterUser.tsx';

function App() {
  return (
    <Router>

      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/RegisterUser" element={<RegisterUser/>} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
