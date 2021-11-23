// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages 
import Episode from './Pages/Episode';
import Location from './Pages/Location';
import Home from './Pages/Home';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar/Navbar';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episode />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}

export default App;