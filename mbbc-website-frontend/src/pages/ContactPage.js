import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

const contStyle = {
  position: "relative",
  width: "calc(100vw - 15px)" /* placeholder for scrollbar width */,
  height: "35em",
  margin: "0 -33.3%",
};

const mapStyles = {
  position: "relative",
  height: "35em",
};

const ContactPage = (props) => (
  <>
    <h1 className="decorative-title">Contact Us</h1> {/* remove title? */}
    <Map
      google={props.google}
      containerStyle={contStyle}
      style={mapStyles}
      zoom={16}
      initialCenter={{
        lat: -32.03240959,
        lng: 115.97779357,
      }}
    >
      <Marker name="Metropolitan Bible Baptist Church" />
    </Map>
    <div className="contact-details">
      <p>11-13 ROYAL STREET, KENWICK, WA 6107</p>
      <p>(08) 9459 1233</p>
    </div>
    <h2 className="timetable-title">SUNDAYS</h2>
    <ul className="timetable-list">
      <li>9:30 am - Doctrine Class</li>
      <li>10:40 am - Preaching Service</li>
      <li>5:00 pm - Evening Service</li>
    </ul>
    <h2 className="timetable-title">WEDNESDAYS</h2>
    <ul className="timetable-list">
      <li>7:00 pm - Bible Study and Prayer Meeting</li>
    </ul>
    <h1 className="decorative-title">
      Contact Us PLACEHOLDER AND CHANGE DESIGN TOP
    </h1>
  </>
);

/* 11-13 Royal Street, Kenwick, WA 6107 */
/* Api key still exposed on website, see: https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app */
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(ContactPage);
