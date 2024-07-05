import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import AboutUs from './Components/AboutUs';
import PricePage from './Components/PricePage';
import ContactPage from './Components/ContactPage'
import Clients from './Components/Clients'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Price" element={<PricePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
