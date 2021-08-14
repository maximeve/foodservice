import React from 'react'
import './Card.css';

function Card({name,key,photo,address,hours,reviews,cuisine,desc}) {
    
    return (
        <div className="card">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <h4>{cuisine}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default Card
