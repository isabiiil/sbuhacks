import React, { Component, useMemo } from "react";
import './App.css';
import Takeout from "./server/2022_JULY.json";
import Data from './components/data';
import { GoogleMap, LoadScript, MarkerF, Polyline } from "@react-google-maps/api";
import Pin from './assets/pin.png';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 40.7412012,
  lng: -73.9890337
};

const mark = {
  lat: 40.7300939,
  lng: -73.9908372
}

const paths = [
  {lat: 40.7300939, lng: -73.9908372},
  {lat: 40.7748300, lng: -73.9542110},
  {lat: 40.7546795, lng: -73.9870291},
]

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
  paths: [
    {lat: 40.7300939, lng: -73.9908372},
    {lat: 40.7748300, lng: -73.9542110},
    {lat: 40.7546795, lng: -73.9870291},
  ],
  zIndex: 1
};

const onLoad = polyline => {
  console.log('polyline: ', polyline)
};

class App extends Component{
  render(){
    const data = Takeout.timelineObjects;

    return(
      <div className="app">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            {Object.keys(data).map((item, index) => {
                if (typeof(data[item].placeVisit) != 'undefined') {
                  const places = data[item].placeVisit.location
                  const asArray = Object.entries(places);
                  const filtered = asArray.filter((item) => item.visitConfidence == 71);
                  const justStrings = Object.fromEntries(filtered);
                  // Object.values(places).forEach(key => {
                  //   // if (places[key] == 'name') {
                  //     console.log(places[key])
                  //   // };
                  // });
                  // console.log((Object.keys(places).includes('name')) ? "yes" : "no")
                  console.log(justStrings)
                  const latitude = places.latitudeE7 / 10000000
                  const longitude = places.longitudeE7 / 10000000
                  // const latitude = justStrings.latitudeE7 / 10000000
                  // const longitude = justStrings.longitudeE7 / 10000000
                  return (
                    <MarkerF
                      icon={{
                        path: {Pin}
                      }}
                      position={
                        {lat: latitude, lng: longitude}
                      }
                      key={index}
                    />
                  ) 
                }
              })}
            <Polyline
              onLoad={onLoad}
              path={paths}
              options={options}
            />
          </GoogleMap>
        {/* <Data mapdata={mapdata} /> */}
      </div>
      );
    }
  }
  
  export default App;