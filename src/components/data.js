import React from "react";
import PropTypes from 'prop-types';
// import '../css/data.css';

const DataDisplay = ({mapdata}) => mapdata.map((timelineObjects, index) => {

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