import './App.css';

import '@fontsource/roboto/400.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
