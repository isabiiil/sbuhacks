// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCFUzm27n9IkIV820A_VyyvCXb9v8cBI8A",
//   authDomain: "hackher-9b4ed.firebaseapp.com",
//   databaseURL: "https://hackher-9b4ed.firebaseio.com",
//   projectId: "hackher-9b4ed",
//   storageBucket: "hackher-9b4ed.appspot.com",
//   messagingSenderId: "875167518655",
//   appId: "1:875167518655:web:16daa8339defad35601b0a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import React from "react";
import PropTypes from 'prop-types';
// import '../css/data.css';

const DataDisplay = ({Mapdata}) => Mapdata.map((timelineObjects, index) => {

    // timelineObjects -> activitySegment -> startLocation -> latitudeE7, longitudeE7
    const pins = timelineObjects.placeVisit;
    // console.log(typeof(pins));
    if(typeof(pins) == "object"){
        // console.log(pins);
        console.log(pins.location.address, pins.location.latitudeE7, pins.location.longitudeE7)
    }
    // for(const item in pins) {
    //     if(typeof(item) != "undefined"){
    //         // for (const prop in item) {
    //         //     // if(prop.key() == "location"){
    //         //     //     console.log(prop)
    //         //     // }
    //         //     console.log(prop)
    //         // }
    //         console.log(typeof(item))
    //     }
    // }


    return (
        <div key={index}>
            <div>sanity check 2</div>
            <div className="data_1">
                {/* {timelineObjects.map((activitySegment, index) => {
                    return (
                        <div key={index}>
                            <h2>{activitySegment}</h2>
                        </div>);
                })} */}
            </div>
        </div>
    );
});

export default DataDisplay;