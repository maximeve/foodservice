import React, { useState, useEffect } from 'react';
import restos from '../restaurants'
import Card from '../components/Card'

import './Popular.css'

function Popular() {

    const [coords, setCoords] = useState('')
    const [restaurants, setRestaurants] = useState([]);
    const [labels, setLabels] = useState(restos)

    const getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyBQALPYvs3F79ChAkku1CNdzbDBoU_UIWU`)
            .then(response => response.json())
            .then(data => console.log(data))
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
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
    const fetchData = async () => {
        const data = await getData();
    }

}, []);

return (
    <div className='popular'>
        <h2>Popular Places</h2>
        <div className="popular__card">
            {restaurants.map(resto => <Card name={resto.name} key={resto.id} desc={resto.desc} photo={resto.photograph} address={resto.address} hours={resto.operating_hours} reviews={resto.reviews} cuisine={resto.cuisine_type} />)}
        </div>
    </div>
)
}

export default Popular
