import React from 'react';

function Card(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.imageLinks.thumbnail} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Card;