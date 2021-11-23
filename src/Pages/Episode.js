// Hooks
import React, { useState, useEffect } from 'react'

// Components
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
    // States
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
        // Destructured data
    const { air_date, name, episode } = info;

    // Episodes api call
    const api = `https://rickandmortyapi.com/api/episode/${id}`;
    
    useEffect(() => {
        (async () => {
            const data = await fetch(api).then(res=>res.json())
            setInfo(data);
            
            const links = await Promise.all(
                data.characters.map(link => {
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
                    Episode: {" "} 
                    <span className="text-primary">
                        {name===""? "Unknown" : name}
                    </span>
                    <span className="text-secondary">{" #"}{episode}{" "}</span>                   
                </h1>
                <h5 className="text-center">
                    Air Date: {air_date===""? "Unknown" : air_date}
                </h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">
                        Pick Episodes
                    </h4>
                    <InputGroup 
                        name="Episode" 
                        total={51}
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

export default Episodes
