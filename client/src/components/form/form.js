import React, { useState } from 'react';
import API from '../../utils/API';
import Card from '../card/card';

function Form() {

        
    const [results, setResults] = useState([]);


    
    function searchBooks(book) {
        API.googleBook(book)
        .then(res => {
            // console.log(res.data.items)
            const searchResults = res.data.items;
            const mapped = [];
            // console.log("search result", searchResults);
            searchResults.map(o => mapped.push(o.volumeInfo));
            
            setResults(mapped)
            // console.log("results", results);
        })
        .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        console.log(event.target.value);
        searchBooks(event.target.value);
    }
    
    return(
        <>
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input type="text" className="form-control" id="search" aria-describedby="bookSearch" placeholder="Search for a book" onChange={handleInputChange} />
            </div>
        </form>
        <div className="container d-flex flex-row flex-wrap">
        {results.map((props, index) => <Card key={index} {...props} />)}
    </div>
    </>
    )
}

export default Form;