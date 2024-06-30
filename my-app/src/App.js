import React from 'react';
import logo from './logo.svg';$ 
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MainPage from './Components/MainPage';


function App() {
  return (
    <div>
    <Header />
    <MainPage />
    </div>
  );
}

export default App;
