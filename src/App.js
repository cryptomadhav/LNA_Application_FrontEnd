import React from 'react';
import './App.css';
import Login from "./components/Login";
import Student from "./components/Student";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
        <Login/>
        <Student/>
        <Parent/>
    </div>
  );
}

export default App;
