import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Product from './Pages/Product';
import SignUp from './Pages/SignUp';

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
