import { useEffect } from 'react';
import { Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Shaxriyor from './components/shaxriyor/shaxriyor';


function App() {
  let local = window.localStorage.getItem('test')
  let location  = useLocation()
  let navigate = useNavigate();

  useEffect(()=>{
     if(!local || local == 'false'){
        navigate("/login");
    }
},[location.pathname])


  return (
    <div className="App">
      <h1>app</h1>
     <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />} />
     </Routes>
     <Shaxriyor />

    </div>
  );
}

export default App;
