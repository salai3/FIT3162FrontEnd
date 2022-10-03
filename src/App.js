import './App.css';

import '@fontsource/roboto/400.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import SignIn from './pages/Login';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<Layout />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
