import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./logo.png"
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from "react-notifications"
import { useState } from 'react';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [password, setPassword] = useState("");
const signUp = (e) => {
    e.preventDefault();
    // It show empty notification . because i am not passing any message
    if(!email || !password || !email2){
        NotificationManager.warning("","",3000)
        return;
    }
    else if(email !== email2){
        NotificationManager.error("","",3000)
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
            <p id="str">Criar nova conta</p>
            Ou <Link to="/login" className='link'> entrar na sua conta existente</Link></div>
        <div className="card shadow">
            
          <div className="card-body bg-white">
            <form className='bg-white' onSubmit={(e)=>signUp(e)}>
              <div className="mb-4 bg-white">
                <label htmlFor="email" className="form-label bg-white">E-mail</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" className="form-control" id="username" />
              </div>
              <div className="mb-4 bg-white">
                <label htmlFor="repeat" className="form-label bg-white">Repetir e-mail</label>
                <input type="text" onChange={(e)=>setEmail2(e.target.value)} value={email2} name="repeat" className="form-control" id="username" />
              </div>
              <div className="mb-4 bg-white">
                <label htmlFor="password" className="form-label bg-white">Senha</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" className="form-control" id="password" />
              </div>
              <div className="mb-4 bg-white">
                <input type="checkbox" className="form-check-input " id="remember" /><small>Eu li e aceito os <u>termos de uso</u>, <u>termos de licença de uso de software</u>, <u>política de conteúdo</u> da Kiwify</small>
                {/* <label htmlFor="remember" className="form-label"></label> */}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary text-white">Criar conta</button>
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

export default SignUp