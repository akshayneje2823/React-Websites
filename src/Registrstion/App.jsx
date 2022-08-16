import React from 'react'
import Layout from './components/pages/Layout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import LoginReg from './components/pages/auth/LoginReg';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='login' element={<LoginReg/>}></Route>
            </Route>
        </Routes>
    </Router>
    </> 
  )
}

export default App