
import './Map.css';
import React from 'react';
import LocationMarker from '../LocationMarker/LocationMarker';
import QuickStore from '../../../QuickStore';

// don't forget to add image alts
const SHOPS = QuickStore;
const KEY = "AIzaSyDDgDK67FW5YTaOvXb-fF-4ca5JGvPkMSA";
const center = {
    lat: 51.53841,
    lng: -0.09872
}
const zoom = 13

class Map extends React.Component{

   

    render() {

    return (
   
<div className="card mb-3 half-width-desktop full-width-mobile map-split">
    <h3 className="card-header medium text-muted left-align"> Wellness Near Me <i className="fas fa-location-arrow"></i></h3> 
    <div className="card-body">
       
 <img src="logo\WellFindLogos\welcome logo.png" alt="a map with the WellFind logo, trees, and water droplet brand markers" className="map-image"/>
          <p className="large">
            <a href="#TagSearch" className="card-link search-l huge-tablet tablet">Search Listings <i className="fas fa-arrow-circle-down"></i></a>
            </p>
        </div>
        </div>
    )
}
}

{/*
     constructor(props){
        super(props)

        this.state = { SHOPS }
    }
    under render:
          console.log(SHOPS[0].name)
    Map.defaultProps = {
    center: {
        lat: 51.53841,
        lng: -0.09872
    },
    zoom: 13
} 


 <GoogleMapReact
            bootstrapURLKeys={
                {key: 'AIzaSyDDgDK67FW5YTaOvXb-fF-4ca5JGvPkMSA'}
            }
            defaultCenter= { center }
            defaultZoom= { zoom }
            >
                <LocationMarker lat={ center.lat} lng={center.lng}
                onClick={() => setInfo()}
                />
            </GoogleMapReact>
        
        */}

export default Map