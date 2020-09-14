import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={flexCentered}>
        <div style={section(1)}>1</div>
        <div style={section(3)}>2</div>
        <div style={section(1)}>3</div>
      </div>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

const flexCentered = { display: "flex" };
const section = (grow) => { return { flexGrow: grow, height: "78vh"} }

export default App;
