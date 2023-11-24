import logo from './logo.svg';
import './App.css';
import SQL from './sql.js';
import Edit from './edit.js';
import Create from './create.js';
import Login from './Auth/login.js';
import Admin from './admin.js';

import PrivateRoute from './Auth/PrivateRoute'
import { AuthProvider} from './Auth/AuthContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <AuthProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<SQL />} />
              <Route path="/edit" element={<Edit/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />

              
            </Routes>
          </Router>
        </AuthProvider>

    </div>
  );
}

export default App;
