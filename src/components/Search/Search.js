import styles from './Search.module.scss';
import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input onChange={e => {
                setPageNumber(1); // While searching, page num should be 1
                setSearch(e.target.value);
            }} placeholder="Search for Characters" type="text" className={styles.input} />
            <button onClick={e => {
                e.preventDefault(); // Not to refresh page
            }} className={`btn btn-primary fs-5 ${styles.btn} `}>Search</button>
        </form>
    )
}

export default Search
