import React from 'react';
import API from '../../utils/API';
function Card(props) {
    let image;
    if (props.imageLinks) {
        image = props.imageLinks.thumbnail
    } else if (props.image) {
        image = props.image
    } else {
        image = "https://via.placeholder.com/150"
    }

    let bookData = {
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: image,
        link: props.previewLink
    }

    function saveCard() {
        alert("book saved!");
        console.log(bookData);
        API.saveBook(bookData)
        .then(res => res.send("success"))
        .catch(err => console.log(err))
    }

    return (
        <div className="card" style={{width: '30.33%', margin:'1%'}}>
            <img className="card-img-top" src={image} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">Written by: {[props.authors].join()}</h6>
                <button className="btn btn-primary" onClick={saveCard}>Save Book</button>
                <a className="btn btn-primary" href={props.link} target="_blank" rel="noopener noreferrer">View Book</a>
                <p className="card-text">{props.description}</p>
            </div>
            
        </div>
    )
}

export default Card;