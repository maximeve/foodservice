import React from 'react'
import './Imagecard.css'

function Imagecard(props) {

    console.log(props)

    return (
        <div className="imagecard">
            <img src={`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${props.photo}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS}`}/>
        </div>
    )
}

export default Imagecard

