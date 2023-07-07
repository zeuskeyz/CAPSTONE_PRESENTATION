import '../App.css';
import Login from './Login';
import Table from './Table';
import Dashboard from './Dashboard';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/home' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
