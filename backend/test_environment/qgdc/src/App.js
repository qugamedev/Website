import logo from './logo.svg';
import './App.css';
import SQL from './sql.js';
import Edit from './edit.js';
import Create from './create.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<SQL />} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/create" element={<Create/>} />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
