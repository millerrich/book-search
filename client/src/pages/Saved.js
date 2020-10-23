import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/nav';
import API from '../utils/API';

function Saved() {

    const [data, setData] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);

    console.log(data);
    return (
        <div className="container">
        <Navbar />
        <h1>SAVED PAGE</h1>
        </div>
    )
}

export default Saved;