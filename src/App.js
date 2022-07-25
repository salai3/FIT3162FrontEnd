import './App.css';

import '@fontsource/roboto/400.css';
import Navbar from './UI/Navbar';
import Dashboard from './Dashboard';
import PurchaseHistoryPage from './PurchaseHistoryPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <PurchaseHistoryPage/>
      </div>
    </div>
  );
}

export default App;
