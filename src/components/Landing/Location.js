import React, { useEffect } from "react";
import './Location.css';

function Location() {

    let userLatitude = 0;
    let userLongitude = 0;
    let origin = 0;
    let mapLink ="";
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          alert('Browser does not support geolocation!')
        }
      }

    function showPosition(position) {
        console.log(position)
        userLatitude = position.coords.latitude;
        userLongitude = position.coords.longitude;
        origin = userLatitude+","+userLongitude;
        mapLink = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBoWOCh2dOIYsCwSp5d3iUvZPOEUNThKFI
        &origin=${origin}
        &destination=7.129330, 125.634829`
        showGeoMap()
    }

    function showGeoMap(){
        var div = document.getElementById('geo-map');
        var map = document.createElement('iframe');
        map.width="700px";
        map.height="500px";
        map.id="randomid";
        map.frameBorder="0"
        map.setAttribute("src", mapLink);
        div.appendChild(map);
    }

    useEffect(() => {
        getLocation();
    },[]);

    return (
        <div className="location">
               <div className="location__header">
                   <h2>Location</h2>
                   <p>We make Italian-inspired homemade pizza with LOVE and deliver them door to
                       door so you can enjoy right in the comforts of your home.
                   </p>
               </div>
               <div className="location__map" id="geo-map"> 
                </div>
        </div>

// https://www.google.com/maps/embed/v1/directions
// ?key=YOUR_API_KEY
// &origin=Oslo+Norway
// &destination=Telemark+Norway
// &avoid=tolls|highways
    )
}

export default Location
