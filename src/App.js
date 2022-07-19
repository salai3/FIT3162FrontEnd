import './App.css';

import '@fontsource/roboto/400.css';
import Navbar from './UI/Navbar';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
