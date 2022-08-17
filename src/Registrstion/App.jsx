import React from 'react'
import Layout from './components/pages/Layout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import LoginReg from './components/pages/auth/LoginReg';
import SendPasswordResetEmail from './components/pages/auth/SendPasswordResetEmail';
import ResetPassword from './components/pages/auth/ResetPassword';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='login' element={<LoginReg/>}></Route>
            <Route path='sendPasswordResetEmail' element={<SendPasswordResetEmail/>}></Route>
            <Route path='reset' element={<ResetPassword/>}></Route>
            </Route>
        </Routes>
    </Router>
    </> 
  )
}

export default App