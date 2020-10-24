import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/nav';
import API from '../utils/API';
import Card from '../components/card/card';
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
        <div className="container d-flex flex-row flex-wrap">
        {data.map((props, index) => <Card key={index} {...props} />)}
        </div>
        <h1>SAVED PAGE</h1>
        </div>
    )
}

export default Saved;