import React from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import  Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home /> 
    </div>
  );
}

export default App;
