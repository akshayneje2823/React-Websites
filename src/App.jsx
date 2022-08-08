import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    < >
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
