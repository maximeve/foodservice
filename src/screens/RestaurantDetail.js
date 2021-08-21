import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RatingView } from "react-simple-star-rating";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./RestaurantDetail.css";
import Navbar from '../components/Navbar';

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState("");
  const [hours, setHours] = useState([]);
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState("");
  const [website,setWebsite] = useState('')
  let { id } = useParams();

  const handleData = (data) => {
    console.log(data)
    setRestaurant(data.result);
    setWebsite(data.result.website)
    data.result.photos.map((photo) => {
      images.push(
        `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo.photo_reference}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS}`
      );
    });
    if (data.result.opening_hours) {
      setHours(data.result.opening_hours.weekday_text);
    } else {
      setHours([]);
    }
    setRating(data.result.rating);
  };

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,opening_hours,photos,rating,website,reviews,types&key=${process.env.REACT_APP_GOOLE_MAPS}`
      )
        .then((response) => response.json())
        .then((data) => handleData(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    fetchData();
  }, [id]);

  return (
    <React.Fragment>
    <Navbar/>
    <div className="restaurantdetail">
      <div className="restaurantdetail__info">
        <h2>{restaurant.name}</h2>
        <RatingView ratingValue={rating} />
        {hours.map((day) => (
          <p key={day}>{day}</p>
        ))}
        <p className='restaurantdetail__website'><a href={website} target="_blank">website</a></p>
      </div>
      <div className="restaurantdetail__img">
      <Carousel>
        {images.map(image => <div className="slide__div"><img src={image} /></div> )}
        </Carousel>
      </div>
    </div>
    </React.Fragment>
  );
}

export default RestaurantDetail;
