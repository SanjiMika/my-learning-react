import React from "react";
import preloadData from "./preloadData";
import LocationRow from "./LocationRow";
import withSearch from "./withSearch";

// Presentation component (stateless component)
const Location = (props) => {
    const {searchTerm} = props;

    return (
        <div>
            <div>
                <div>
                    <h2>Preferred Locations</h2>
                </div>
            </div>
            <div>
                {preloadData.filter(locationItem => `${locationItem.name} ${locationItem.zone} ${locationItem.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
                    .map(location => <LocationRow key={location.id} {...location} />)}
            </div>
        </div>
    )
};

export default withSearch(Location);
