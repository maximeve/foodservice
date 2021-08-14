import React from 'react'

function Card({name,key,photo,address,hours,reviews}) {
    return (
        <div>
            <p>{name}</p>
            <p>{key}</p>
            <p>{address}</p>
        </div>
    )
}

export default Card
