import React, { useState, useEffect } from "react";
import restos from "../restaurants";
import Card from "../components/Card";
import { setlocation, setsearch } from '../redux/location';
import { useSelector, useDispatch } from "react-redux";

import "./Popular.css";

function Popular() {
  // VARIABLES
  const dispatch = useDispatch()
  const location = useSelector((state) => state.location.location);
  const search = useSelector((state) => state.location.search);
  const [coords, setCoords] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [searched, setSearched] = useState([]);

  //METHODS

  // GET USER POSITION
  const onSuccess = (location) => {
    dispatch(setlocation({
      'latitude': location.coords.latitude,
      'longitude': location.coords.longitude
    }))
  }

  const onError = (error) => {
    dispatch(setlocation({
      'latitude': 51.215014,
      'longitude': 4.4123972
    }))
  }


  // GET USER POSITION
  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    })();
  }, []);

  // GET RESTAURANTS FROM POSITION
  useEffect(() => {
    (async () => {
      await fetch(
        `https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=3500&type=meal_takeaway&key=${process.env.REACT_APP_GOOLE_MAPS}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRestaurants(data.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();
  }, [coords, location]);

  useEffect(() => {
    setSearched([])
    for (var i = 0; i < restaurants.length; i++) {
      if (restaurants[i].name === search) {
        console.log('Search string IS IN array')
        searched.push(restaurants[i])
      } else {
        console.log('Search string not in restaurants')
      }
    }
    console.log(searched.length)
    console.log(search)
  }, [search]);

  const restaurantsmap = restaurants.map((resto) => (
    <Card
      name={resto.name}
      key={resto.place_id}
      id={resto.place_id}
      desc={resto.desc}
      photo={resto.photos ? resto.photos[0].photo_reference : ""}
      address={resto.vicinity}
      hours={resto.opening_hours}
      reviews={resto.rating}
    />))

    const searchedmap = searched.map((resto) => (
      <Card
        name={resto.name}
        key={resto.place_id}
        id={resto.place_id}
        desc={resto.desc}
        photo={resto.photos ? resto.photos[0].photo_reference : ""}
        address={resto.vicinity}
        hours={resto.opening_hours}
        reviews={resto.rating}
      />))
  


  //HTML

  return (
    <div className="popular">
      <h2>Popular Places</h2>
      <div className="popular__card">
        { searched.length > 0 ? searchedmap : restaurantsmap  }
      </div>
    </div>
  );
}

export default Popular;
