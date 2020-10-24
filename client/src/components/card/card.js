import React from 'react';
import API from '../../utils/API';
// import API from '../../utils/API';

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
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={image} alt={props.title} />
            <div className="card-body" style={{height: '200px', overflowY: 'scroll'}}>
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">Written by: {props.authors}</h6>
                <button className="btn btn-primary" onClick={saveCard}>Save Book</button>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;