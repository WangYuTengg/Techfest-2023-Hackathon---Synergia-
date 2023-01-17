import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import EmployerLoginPage from './routes/EmployerLogin';
import UserSwipePage from './routes/UserSwipePage';
import EmployerPage from './routes/EmployerPage';
import UserSignUpPage from './routes/UserSignUpPage';
import EmployerChat from './routes/EmployerChat';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/EmployerLoginPage" element={<EmployerLoginPage />} />
        <Route path="/UserSwipePage" element={<UserSwipePage />} />
        <Route path="/EmployerPage" element={<EmployerPage />} />
        <Route path="/UserSignUpPage" element={<UserSignUpPage />} />
        <Route path="/EmployerChat" element={<EmployerChat/>} />
      </Routes>
    </>
  );
}

export default App;
