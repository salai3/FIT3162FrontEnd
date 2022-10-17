import './App.css';

import '@fontsource/roboto/400.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './pages/Layout';
import SignIn from './pages/Login';
import LandingPage from './pages/LandingPage';
import AuthContext from './store/auth-context.js';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={authCtx.isLoggedIn ? <Layout /> : <Navigate to="/login" />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
