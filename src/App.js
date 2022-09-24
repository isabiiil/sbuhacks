import React, { Component, useMemo } from "react";
import './App.css';
import Mapdata from "./server/2022_JULY.json";
import Data from './components/data';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const GOOGLE_MAP_API = process.env.GOOGLE_MAP_API;
// console.log("API KEY: " + GOOGLE_MAP_API);
// <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5qz7stbp7962yxHp_Udjp0rf_ZuIP2a0&callback=initMap">
// </script>

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Mapdata: Mapdata.timelineObjects
    }
  }

  render(){
    const { Mapdata } = this.state;
    return(
      <div className="app">
        <div>hello sanity check</div>
        <Data Mapdata={Mapdata} />
      </div>
      );
    }
  }
  
  export default App;