import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RatingView } from "react-simple-star-rating";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./RestaurantDetail.css";
import Navbar from "../components/Navbar";
import Dish from "../components/Dish";

function RestaurantDetail() {
  const cartItems = useSelector( state => state.cart.items)

  const [restaurant, setRestaurant] = useState("");
  const [hours, setHours] = useState([]);
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState("");
  const [website, setWebsite] = useState("");
  let { id } = useParams();

  const handleData = (data) => {
    console.log(data);
    setRestaurant(data.result);
    setWebsite(data.result.website);
    data.result.photos.map((photo) => {images.push(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo.photo_reference}&maxwidth=400&key=${process.env.REACT_APP_GOOLE_MAPS}`)});
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
        .then((data) => {
          handleData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    fetchData();
  }, [id]);

  return (
    <React.Fragment>
      <Navbar />
      {/* RESTAURANT DETAILS  */}
      <div className="restaurantdetail">
        <div className="restaurantdetail__info">
          <h2>{restaurant.name}</h2>
          <RatingView ratingValue={rating} />
          {hours.map((day) => (
            <p key={day}>{day}</p>
          ))}
          <p className="restaurantdetail__website">
            <a href={website} target="_blank" rel="noreferrer">
              website
            </a>
          </p>
        </div>
        <div className="restaurantdetail__img">
          <Carousel>
            {images.map((image) => (<div className="slide__div"><img src={image} alt="food" /></div>))}
          </Carousel>
        </div>
      </div>
      {/* RESTAURANT DISHES */}
      <div className="restaurantdetails__search">
        <h2>Why starve when you have us</h2>
        <svg
          id="Capa_1"
          className="restaurantdetails__fries"
          enable-background="new 0 0 512 512"
          height="52"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m217.834 0h76.331v361.684h-76.331z" fill="#fed841" />
            <path d="m256 0h38.166v361.684h-38.166z" fill="#fdb118" />
            <path d="m141.503 47.253h76.331v361.684h-76.331z" fill="#fed841" />
            <path d="m179.669 47.253h38.166v361.684h-38.166z" fill="#fdb118" />
            <path d="m294.166 47.253h76.331v361.684h-76.331z" fill="#fed841" />
            <path d="m332.331 47.253h38.166v361.684h-38.166z" fill="#fdb118" />
            <path d="m370.497 107.591h76.331v180.842h-76.331z" fill="#fed841" />
            <path d="m408.663 107.591h38.166v180.842h-38.166z" fill="#fdb118" />
            <path d="m65.172 107.591h76.331v180.842h-76.331z" fill="#fed841" />
            <path d="m103.337 107.591h38.166v180.842h-38.166z" fill="#fdb118" />
            <g>
              <g>
                <path
                  d="m416.526 512h-321.052l-49.973-333.128h119.325l1.124 13.78c3.584 43.934 40.921 78.348 85 78.348h10.1c44.079 0 81.416-34.415 85-78.348l1.124-13.78h119.325z"
                  fill="#ff1f2e"
                />
              </g>
            </g>
            <path
              d="m466.499 178.872h-119.325l-1.124 13.78c-3.584 43.933-40.921 78.348-85 78.348h-5.05v241h160.526z"
              fill="#bf0030"
            />
            <path
              d="m347.174 178.872-1.124 13.78c-3.584 43.933-40.921 78.348-85 78.348h-10.1c-44.079 0-81.416-34.415-85-78.348l-1.111-13.618 10.572 332.966h161.178l10.592-333.128z"
              fill="#ff4d55"
            />
            <path
              d="m347.182 178.872h-.008l-1.124 13.78c-3.584 43.933-40.921 78.348-85 78.348h-5.05v241h80.589z"
              fill="#ff1f2e"
            />
            <g>
              <g>
                <path
                  d="m256 445.485c-59.493 0-104.357-25.733-104.357-59.858s44.864-59.858 104.357-59.858 104.357 25.733 104.357 59.858-44.864 59.858-104.357 59.858z"
                  fill="#fef7d5"
                />
              </g>
            </g>
            <path
              d="m256 325.769v119.716c59.493 0 104.357-25.733 104.357-59.858s-44.864-59.858-104.357-59.858z"
              fill="#ffdea8"
            />
          </g>
        </svg>
        <input
          type="text"
          className="restaurantdetails__input"
          placeholder="Search Items"
        />
      </div>
      <div className="restaurantdetails__dish">
      {/* FUNCTIE EN ID PASSEREN DIE ITEMS ADD AAN REDUX */}
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      </div>
    </React.Fragment>
  );
}

export default RestaurantDetail;
