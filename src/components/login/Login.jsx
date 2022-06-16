import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();
    const arr = ['husan', 123]
    const handlerLogin =(e)=>{
        e.preventDefault()
        let login = e.target.elements.name.value
        let parol =e.target.elements.password.value
    const arr = ['husan', 123]
        if(arr[0] == login && arr[1] == parol){
            window.localStorage.setItem('test', 'true')
            navigate("/home");
            
        }else{
            navigate("/login");
            window.localStorage.setItem('test', 'false')
        }
        
    }

   
  return (
    <>
    
    <h1>Login</h1>

    <form action="/" onSubmit={handlerLogin}>

    <input type="text" name='name'/>
    <input type="number" name='password'/>
    <button type='submit'>login</button>
    </form>

    </>

  )
}
