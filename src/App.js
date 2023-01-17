import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import EmployerLoginPage from './routes/EmployerLogin';
import UserSwipePage from './routes/UserSwipePage';
import EmployerPage from './routes/EmployerPage';
import UserSignUpPage from './routes/UserSignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/EmployerLoginPage" element={<EmployerLoginPage />} />
        <Route path="/UserSwipePage" element={<UserSwipePage />} />
        <Route path="/EmployerPage" element={<EmployerPage />} />
        <Route path="/UserSignUpPage" element={<UserSignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
