import React from 'react';
import API from '../../utils/API';
// import API from '../../utils/API';

function savedCard(props) {
    let image;
    if (props.image) {
        image = props.image
    } else {
        image = "https://via.placeholder.com/150"
    }

    // let bookData = {
    //     title: props.title,
    //     authors: props.authors,
    //     description: props.description,
    //     image: image,
    //     link: props.previewLink
    // }

    function deleteCard() {
        alert("book removed!");
        // console.log(bookData);
        API.deleteBook(props._id)
        .then(window.location.reload())
        .catch(err => console.log(err))
    }

    function viewCard() {
        API.getBook(props._id)
    }

    return (
        <div className="card" style={{width: '30.33%', margin:'1%'}}>
            <img className="card-img-top" src={image} alt={props.title} />
            <div className="card-body" style={{height: '200px', overflowY: 'scroll'}}>
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">Written by: {props.authors.join()}</h6>
                <a className="btn btn-primary" href={props.link} target="_blank" rel="noopener noreferrer">View Book</a>
                <button className="btn btn-primary" onClick={deleteCard}>Delete Book</button>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default savedCard;