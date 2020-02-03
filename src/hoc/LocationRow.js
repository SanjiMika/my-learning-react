import React from "react";

// Presentation component (stateless component)
const LocationRow = (props) => {
    return (
        <div>
            <p>---------------</p>
            <p><b>Name:</b> {props.name}</p>
            <p><b>Zone:</b> {props.zone}</p>
            <p><b>Region:</b> {props.region}</p>
        </div>
    )
};

export default LocationRow;
