import React, { useState } from 'react';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

import './Popular.css'
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';

function Popular() {
    const [value, setValue] = useState(null);

    const handleSelect = () => {

    }

    return (
        <div className='popular'>
            <h2>Popular Places</h2>
            <PlacesAutocomplete value={value} onChange={setValue} onSelect={handleSelect}>
                {()=>(<div>Hey</div>)}
            </PlacesAutocomplete>
        </div>
    )
}

export default Popular
