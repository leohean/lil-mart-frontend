import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Nav from './components/Nav/Nav.js';

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Search from './pages/Search/Search.js';
import Register from './pages/Register/Register.js';
import RegisterUser from './pages/Register/RegisterUser/RegisterUser.js';
import RegisterMarket from './pages/Register/RegisterMarket/RegisterMarket.js';
import MarketHome from './pages/MarketHome/MarketHome.js';

function App() {
  return (
    <Router>

      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/register/registeruser" element={<RegisterUser/>} />
          <Route path="/register/registermarket" element={<RegisterMarket/>}/>
          <Route path="/marketHome" element={<MarketHome/>} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
