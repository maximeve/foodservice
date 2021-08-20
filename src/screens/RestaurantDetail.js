import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating'
import './RestaurantDetail.css';

function RestaurantDetail() {
    const [restaurant, setRestaurant] = useState('')
    const [hours, setHours] = useState([])
    const [images, setImages] = useState([])
    const [rating, setRating] = useState('')
    let { id } = useParams();

    const handleData = (data) => {
        setRestaurant(data.result)
       data.result.photos.map(photo => {
           images.push(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo.photo_reference}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS}`)
       } )
        if (data.result.opening_hours) {
            setHours(data.result.opening_hours.weekday_text)
        } else {
            setHours([])
        }
        setRating(data.result.rating)
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
            <div className="restaurantdetail">
            </div>
            <p>{restaurant.name}</p>
            <RatingView ratingValue={rating} />
            {hours.map(day => <p key={day}>{day}</p>)}
        </div>
    )
}

export default RestaurantDetail
