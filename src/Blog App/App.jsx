import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Write from './components/pages/write/Write';
import SinglePage from './components/pages/single page/Single/Single';
import TopBar from './components/Top Bar/TopBar';
import Setting from './components/pages/settings/Setting';
import Home from './components/pages/home/Home'
import Login from './components/pages/Login and Register/Login'
import Register from './components/pages/Login and Register/Register'

function App() {
  const user = true;
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={user ? <Home/> : <Register/>}/>
          {/* <Route path='/register' element={user ? <Register /> :<Home/> } /> */}
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/write' element={user ? <Write /> : <Register />} />
          <Route path='/setting' element={user ? <Setting /> : <Register />} />
          <Route path='/post/:postID' element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App