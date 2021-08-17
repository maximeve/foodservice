import React, { useState, useEffect } from 'react';
import restos from '../restaurants'
import Card from '../components/Card'

import './Popular.css'

function Popular() {
    // VARIABLES 
    const [coords, setCoords] = useState({})
    const [restaurants, setRestaurants] = useState([]);

    //METHODS 

    const getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.215014,4.4123972&radius=500&type=meal_takeaway&key=${process.env.REACT_APP_GOOLE_MAPS}`)
            .then(response => response.json())
            .then(data => setRestaurants(data.results))
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const onSuccess = (location) => {
        setCoords({
            'latitude': location.coords.latitude,
            'longitude': location.coords.longitude
        })
    }

    const onError = (error) => {
        console.log(error)
        setCoords({
            'latitude': 51.215014,
            'longitude': 4.4123972
        })
    }

    useEffect(() => {
        (async () => {
            // await navigator.geolocation.getCurrentPosition(onSuccess, onError)
            const data = await getData();
         })();

    }, []);

    //HTML

    return (
        <div className='popular'>
            <h2>Popular Places</h2>
            <div className="popular__card">
                {restaurants.map(resto => <Card name={resto.name} key={resto.place_id} id={resto.place_id} desc={resto.desc} photo={resto.photos[0].photo_reference} address={resto.vicinity} hours={resto.opening_hours} reviews={resto.rating} />)}
            </div>
        </div>
    )
}

export default Popular
