import React, {useState} from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AuthLogin from './components/AuthLogin';
import CandidateHome from "./components/CandidateHome"
function App() {

  return (
    <div className="App">
      <Register />
      <Login />
      <AuthLogin />
      <CandidateHome />
    </div>
  )
}

export default App;
