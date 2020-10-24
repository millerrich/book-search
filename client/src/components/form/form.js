import React from 'react';

function Form(props) {
    
    return(
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input type="text" className="form-control" id="search" aria-describedby="bookSearch" placeholder="Search for a book" onChange={props} />
            </div>
        </form>
    )
}

export default Form;