import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function RestaurantDetail() {
    const [restaurant, setRestaurant] = useState('')
    const [hours,setHours] = useState([])
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')
    let { id } = useParams();

    const handleData = (data) => {
        setRestaurant(data.result)
        setImage(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${data.result.photos[0].photo_reference}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS}`)
        if (data.result.opening_hours) {
            setHours(data.result.opening_hours.weekday_text)
        } else {
            setHours([])
        }
        setRating(data.result.rating)
        console.log(data.result)
    }


    useEffect(() => {
        async function fetchData() {
            await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,opening_hours,photos,rating,website,reviews,types&key=${process.env.REACT_APP_GOOLE_MAPS}`)
            .then(response => response.json())
            .then(data => handleData(data))
            .catch((error) => {
                console.error('Error:', error);
            })
        }
        fetchData()
    }, [id]);


    return (
        <div>
            <img src={image} alt={restaurant.name} />
            <p>{restaurant.name}</p>
            <p>{rating}</p>
            {hours.map(day => <p key={day}>{day}</p>)}
        </div>
    )
}

export default RestaurantDetail
