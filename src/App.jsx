import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';

function App() {
  return (
    < >
    <Router>
    <Navbar/>
      <Routes>
        <Route 
        path='/' exact
        element={<Home/>}
        ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
