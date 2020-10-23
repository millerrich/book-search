import React from 'react';
// import API from '../../utils/API';

function Card(props) {
    let image;
    if (props.imageLinks) {
        image = props.imageLinks.thumbnail
    } else {
        image = "https://via.placeholder.com/150"
    }
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={image} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary">Save Book</button>
            </div>
        </div>
    )
}

export default Card;