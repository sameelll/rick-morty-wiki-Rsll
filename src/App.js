// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages 
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Home from './Pages/Home';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Navbar component
import Navbar from './components/Navbar/Navbar';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

export default App;