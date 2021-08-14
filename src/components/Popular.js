import React,{useState} from 'react';
import restos from '../restaurants'
import Card from '../components/Card'

    // import {
    //     geocodeByAddress,
    //     geocodeByPlaceId,
    //     getLatLng,
    //   } from 'react-places-autocomplete';

import './Popular.css'
// import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';

function Popular() {
    // const [value, setValue] = useState(null);
    const [restaurants,setRestaurants] = useState(restos);
    // const handleSelect = () => {

    // }
    
    return (
        <div className='popular'>
            <h2>Popular Places</h2>
            <div className="popular__card">
            {restaurants.map(resto => <Card name={resto.name} key={resto.id} desc={resto.desc} photo={resto.photograph} address={resto.address} hours={resto.operating_hours} reviews={resto.reviews} cuisine={resto.cuisine_type}/>)}
            {/* <PlacesAutocomplete value={value} onChange={setValue} onSelect={handleSelect}>
                {()=>(<div>Hey</div>)}
            </PlacesAutocomplete> */}
            </div>
        </div>
    )
}

export default Popular
