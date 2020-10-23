import React, { useState } from 'react';
import Navbar from '../components/navbar/nav';
import API from '../utils/API';


function Search() {
    
    const [results, setResults] = useState([]);


    
    function searchBooks(search) {
        API.googleBook(search)
        .then(res => setResults(res.data.items));
        console.log(results);
    }

    function handleInputChange(event) {
        console.log(event.target.value);
        searchBooks(event.target.value);
    }
    return (
        <div className="container">
        <Navbar />
        <form className="bg-light">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input type="text" className="form-control" id="search" aria-describedby="bookSearch" placeholder="Search for a book" onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        <h1>SEARCH PAGE</h1>
        </div>
    )
}

export default Search;