import React, { useState } from "react";
import './App.css';
import Data from './components/data';
import { GoogleMap, LoadScript, MarkerF, Polyline } from "@react-google-maps/api";
import Pin from './assets/pin.png';
import Blurb from './components/Blurb.jsx';
import InfoWindow from './components/InfoWindow.jsx';
import Button from './components/Button.jsx'

import Takeout0722 from "./server/2022_JULY.json";
import Takeout0622 from "./server/2022_JUNE.json";
import Takeout1220 from './server/2020_DECEMBER.json';
import Takeout0920 from "./server/2020_SEPTEMBER.json";


const styles = {
  container: {
    width: '100vw',
    height: '90vh',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw'
  },
  buttonText: {
    margin: '0',
    lineHeight: '50px'
  }
};

const center = {
  lat: 40.7412012,
  lng: -73.9890337
};

const mark = {
  lat: 40.7300939,
  lng: -73.9908372
}

const options = {
  strokeColor: '#00F',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#00F',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};


// const onLoad = polyline => {
//   console.log('polyline: ', polyline)
// };

export default function App(){
    const paths = [];
    const [data, setData] = useState(Takeout0622.timelineObjects);

    return(
      <div className="app">
          <GoogleMap
            mapContainerStyle={styles.container}
            center={center}
            zoom={14}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            {Object.keys(data).map((item, index) => {
                if (typeof(data[item].placeVisit) != 'undefined') {
                  const places = data[item].placeVisit.location;
                  const latitude = places.latitudeE7 / 10000000;
                  const longitude = places.longitudeE7 / 10000000;
                  return (
                    <MarkerF
                      position={
                        {lat: latitude, lng: longitude}
                      }
                      key={index}
                    />
                  ) 
                }
              })}
              {Object.keys(data).map((item, index) => {
                if(typeof(data[item].placeVisit) != 'undefined') {
                  if (typeof(data[item].placeVisit.location) != 'undefined' && typeof(data[item].placeVisit.duration) != 'undefined') {
                    // const times = data[item].placeVisit.duration;
                    const places = data[item].placeVisit.location;
                    const latitude = places.latitudeE7 / 10000000
                    const longitude = places.longitudeE7 / 10000000
                    var position = {lat: latitude, lng: longitude}
                    paths.push(position);
                }
              }})}
              {/* {Object.keys(data).map((item, index) => {
                if(typeof(data[item].placeVisit) != 'undefined') {
                  if (typeof(data[item].placeVisit.location) != 'undefined' && typeof(data[item].placeVisit.duration) != 'undefined') {
                  return (
                      <Polyline
                        // onLoad={onLoad}
                        path={paths}
                        options={options}
                      />
                    )}}})} */}
              {/* })} */}
          </GoogleMap>
        {/* <Data mapdata={mapdata} /> */}
        <h1 style={{padding: '1vw', textAlign: 'center'}}>Which month's adventure would you like to explore?</h1>
        <div style={styles.row}>
          <Button>
            <p style={styles.buttonText} onClick={() => setData(Takeout0920.timelineObjects)}>September 2020</p>
          </Button>
          <Button>
            <p style={styles.buttonText} onClick={() => setData(Takeout1220.timelineObjects)}>December 2020</p>
          </Button>
          <Button>
            <p style={styles.buttonText} onClick={() => setData(Takeout0722.timelineObjects)}>July 2022</p>
          </Button>
        </div>
        <Blurb />
      </div>
      );
}
