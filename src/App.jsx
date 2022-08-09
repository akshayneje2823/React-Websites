import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    < >
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
