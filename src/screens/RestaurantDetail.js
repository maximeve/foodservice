import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function RestaurantDetail() {
    const [restaurant,setRestaurant] = useState('')
    let { id } = useParams();

    const getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number&key=AIzaSyBQALPYvs3F79ChAkku1CNdzbDBoU_UIWU`)
            .then(response => response.json())
            .then(data => setRestaurant(data))
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    useEffect(() => {
        (async () => {
            // await navigator.geolocation.getCurrentPosition(onSuccess, onError)
            const data = await getData();
         })();

    }, []);

    return (
        <div>
            <p>Hello</p>
            <p>{restaurant.result.name}</p>
        </div>
    )
}

export default RestaurantDetail
