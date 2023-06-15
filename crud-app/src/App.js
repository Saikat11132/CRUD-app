// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar.jsx';
import CodeforInterview from './components/SaikatRuj';
import AllUsers from './components/AllUsers';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser'

function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
       
       <Route path='/' element={ <CodeforInterview/>}/>
       <Route path='/add' element={ <AddUser/>}/>
       <Route path='/all' element={ <AllUsers/>}/>
       <Route path='/edit/:id' element={ <EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
