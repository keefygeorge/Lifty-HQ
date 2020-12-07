import React, {useEffect} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import useGlobalState from "./GlobalContext";

/**
 * google map component
 * @type {<WithScriptjsProps>}
 */
const Map = withScriptjs(withGoogleMap((props) => {
    const [state, dispatch] = useGlobalState();

    console.log(state);
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {
              state.mapData.markers && state.mapData.markers.map(business => {
                return (
                    <Marker
                        key={business.name}
                        position={{
                          lat: business.position.lat,
                          lng: business.position.lng
                        }} />
                );
              })
            }
        </GoogleMap>
    );
}));

export default Map;