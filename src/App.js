// Hooks imports
import React, { useState, useEffect } from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Components
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  // States
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
      // Filters
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
      // Destructured Data
  const { info, results } = fetchedData;

  // API call
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Hooks
  useEffect(() => {
    (async () => {
      const data = await fetch(api).then(res=>res.json()) // Data fetching
      setFetchedData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search 
        setPageNumber={setPageNumber} 
        setSearch={setSearch} />
      <div className="container">
        <div className="row">         
          <Filters 
            setStatus={setStatus}
            setGender={setGender}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies} />          
          <div className="col-8">
            <div className="row">
              <Cards 
                results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination 
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info} />
    </div>
  );
}

export default App;