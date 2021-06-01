import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */

const mapStyles = {
  position: "relative",
  height: "35em",
};

const contStyle = {
  position: "relative",
  width: "calc(100vw - 16px)" /* placeholder for scrollbar width */,
  height: "35em",
  margin: "0 -33.3%",
};

const ContactPage = (props) => (
  <>
    <h1>Contact Us</h1>
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
    <h2>11-13 Royal Street, Kenwick, WA 6107</h2>
    <h2>(08) 9459 1233</h2>
    <h2>Services</h2>
  </>
);

/* Api key still exposed on website, see: https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app */
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(ContactPage);
