import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Error from './Error'
import "./style.css"
import { NotificationContainer } from "react-notifications"
const App = () => {
  return (
    <div>
        <Router>
        <NotificationContainer />
            <Routes>
                <Route path="/" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Error/>} />
                </Routes>
            </Router>   
    </div>
  )
}

export default App