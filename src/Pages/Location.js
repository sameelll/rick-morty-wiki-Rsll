// Hooks
import React, { useState, useEffect } from 'react'

// Components
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
    // States
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
        // Destructured data
    const { name, type, dimension } = info;

    // Location api call
    const api = `https://rickandmortyapi.com/api/location/${id}`;
    
    useEffect(() => {
        (async () => {
            const data = await fetch(api).then(res=>res.json())
            setInfo(data);
            
            const links = await Promise.all(
                data.residents.map(link => {
                    return fetch(link).then(res=>res.json());
                })
            )
            setResults(links); 
        })();
    }, [api]);

    return (
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-4">
                    Location: {" "} 
                    <span className="text-primary">
                        {name===""? "Unknown" : name}
                    </span>                  
                </h1>
                <h5 className="text-center">
                    Dimension: {dimension===""? "Unknown" : dimension}
                </h5>
                <h6 className="text-center">
                    Type: {type===""? "Unknown" : type}
                </h6>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">
                        Pick Location
                    </h4>
                    <InputGroup 
                        name="Location" 
                        total={126}
                        setId={setId} />               
                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards results={results} />
                    </div>                  
                </div>
            </div>           
        </div>
    )
}

export default Location
