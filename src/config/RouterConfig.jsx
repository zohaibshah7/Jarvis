import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../components/Login'
import SignUp from '../components/Signup'
import Home from '../components/Home'

const RouterConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element ={<LogIn/>} />
            <Route path='/signup' element ={<SignUp/>} />
            <Route path='/' element ={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig
