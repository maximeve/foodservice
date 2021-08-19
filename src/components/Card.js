import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ name, id, photo, address, hours, reviews }) {

    const [open, setOpen] = useState('')

    useEffect(() => {
        if (hours === undefined) {
            setOpen(false)
        } else {
            setOpen(hours.open_now)
        }
    }, [hours])

    return (
        <Link to={`/restaurant/${id}`}>
            <div className="card" style={{
                width: '400px',
                height: '300px',
                backgroundSize: 'cover',
                backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS})`
            }}>
               <div className="card__info">
                <h2>{name}</h2>
                <p>{reviews}</p>
                <p className="card__open">{open ? 'OPEN' : 'CLOSED'}</p>
                <p className="card__address">{address}</p>
                </div>
                <div className="overlay"></div>
            </div >
        </Link>
    )
}

export default Card
