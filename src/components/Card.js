import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
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
        <div className="card">
            <img src={`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo}&maxwidth=400&key=AIzaSyBQALPYvs3F79ChAkku1CNdzbDBoU_UIWU`} alt={name} />
            <h2>{name}</h2>
            <p>{reviews}</p>
            <p>{open ? 'OPEN' : 'CLOSED'}</p>
            <p>{address}</p>
        </div >
        </Link>
    )
}

export default Card
