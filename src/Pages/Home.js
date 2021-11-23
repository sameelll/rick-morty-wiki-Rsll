// React Hooks
import React, { useState, useEffect } from 'react';

// Components
import Cards from '../components/Cards/Cards';
import Filters from '../components/Filters/Filters';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';

const Home = () => {  // Home page which was in the App.js
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
        <h1 className="text-center mb-4">Characters</h1>    
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
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards
                  page="/" 
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

export default Home
