import React, { Component, useMemo } from "react";
import './App.css';
import Mapdata from "./server/2022_JULY.json";
import Data from './components/data';
import { GoogleMap, LoadScript, MarkerF, Polyline } from "@react-google-maps/api";

// const GOOGLE_MAP_API = process.env.GOOGLE_MAP_API;
// console.log("API KEY: " + GOOGLE_MAP_API);

const containerStyle = {
  width: '800px',
  height: '800px'
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
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
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
  constructor(props) {
    super(props);
    this.state = {
      Mapdata: Mapdata.timelineObjects
    }
  }

  render(){
    const mapdata = this.state;
    return(
      <div className="app">
        <div>hello sanity check</div>
        <LoadScript
          googleMapsApiKey="AIzaSyA5qz7stbp7962yxHp_Udjp0rf_ZuIP2a0"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            {/* <MarkerF
              icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
              position={mark}
            /> */}
            {paths.map((path, index) => {
              return (
                <MarkerF
                  icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                  position={path}
                  key={index}
                />
              )
            })}
            {/* {mapdata.map((timelineObjects, index) => {
              const pins = timelineObjects.placeVisit;
              const location = {
                lat: pins.location.latitudeE7,
                lng: pins.location.longitudeE7
              }
              if(typeof(pins) == "object"){
                // return (
                //   <MarkerF
                //     icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                //     position={location}
                //   />
                console.log('yeet');
                
              }
            })} */}
            {/* <Polyline
              onLoad={onLoad}
              path={path}
              options={options}
            /> */}
          </GoogleMap>
        </LoadScript>
        {/* <Data mapdata={mapdata} /> */}
      </div>
      );
    }
  }
  
  export default App;