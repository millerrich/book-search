import React from 'react';

function Form() {
    return(
        <form className="bg-light">
            <div className="form-group">
                <label for="search">Search:</label>
                <input type="text" className="form-control" id="search" aria-describedby="bookSearch" placeholder="Search for a book" />
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Form;