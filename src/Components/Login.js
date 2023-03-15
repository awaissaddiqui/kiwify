import React from 'react'
import Logo from "./logo.png"
import { Link } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from "react-notifications"
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        if(!email || !password){
            NotificationManager.error("","", 3000)
            return;
        }
    }
  return (

    <div>
        <div className="main-bg">

<div className="container ">
        <div className="text-center">
          <img src={Logo} className="image-fluid" width="300px" alt='this is logo of kiwify'/>
        </div>
  <div className="row justify-content-center mt-5 ">
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className='text-center pb-5 ' >
          <p id="str">Entrar na sua conta</p>
          Ou <Link to="/" className='link'>fazer cadastro</Link></div>
      <div className="card shadow">
          
        <div className="card-body bg-white">
            {/* Form */}
          <form className='bg-white' onSubmit={(e)=>login(e)}>
            <div className="mb-4 bg-white">
              <label htmlFor="email" className="form-label bg-white">E-mail</label>
              <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" className="form-control" id="username" />
            </div>
            
            <div className="mb-4 bg-white">
              <label htmlFor="password" className="form-label bg-white">Senha</label>
              <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" value={password} className="form-control" id="password" />
              <small><Link to="#" className='link'>Esqueceu a senha?</Link></small>
            </div>
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary text-white">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
    </div>
  )
}

export default Login