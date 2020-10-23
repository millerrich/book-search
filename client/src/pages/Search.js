import React, { useState } from 'react';
import Navbar from '../components/navbar/nav';
import API from '../utils/API';
import Card from '../components/card/card';


function Search() {
    
    const [book, setBook] = useState('');
    const [results, setResults] = useState([]);


    
    function searchBooks(event) {
        event.preventDefault()
        API.googleBook(book)
        .then(res => {
            // console.log(res.data.items)
            const searchResults = res.data.items;
            const mapped = [];
            // console.log("search result", searchResults);
            searchResults.map(o => mapped.push(o.volumeInfo));
            
            setResults(mapped)
            console.log("results", results);
        })
        .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        console.log(event.target.value);
        setBook(event.target.value);
    }
    return (
        <div className="container">
        <Navbar />
        <form className="bg-light">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input type="text" className="form-control" id="search" aria-describedby="bookSearch" placeholder="Search for a book" onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary" onClick={searchBooks}>Submit</button>
            </div>
        </form>
        <div className="container d-flex flex-row flex-wrap">
            {results.map((props, index) => <Card key={index} {...props} />)}
        </div>
        <h1>SEARCH PAGE</h1>
        </div>
    )
}

export default Search;