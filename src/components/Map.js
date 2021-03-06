import GoogleMapReact from 'google-map-react';
import FireMarker from './FireMarker';
import VolcanoMarker from './VolcanoMarker';
import DustMarker from './DustMarker';
import FloodMarker from './FloodMarker';
import StormMarker from './StormMarker';
import IceMarker from './IceMarker';
import EarthquakeMarker from './EarthquakeMarker';
import SnowMarker from './SnowMarker';


const Map = ({eventData, center, zoom}) => {
    const locationMarkers = eventData.map(ev => {
        let geo = ev.geometry[0].coordinates;
        let id = ev.categories[0].id;

        if(geo[0] !== undefined && geo[1] !== undefined) {

            if(id === 'wildfires') {
                return <FireMarker lat={geo[1]} lng={geo[0]}/>

            } else if(id === 'volcanoes') {
                return <VolcanoMarker lat={geo[1]} lng={geo[0]}/>

            } else if (id === 'dustHaze') {
                return <DustMarker lat={geo[1]} lng={geo[0]}/>

            } else if (id === 'floods') {
                return <FloodMarker lat={geo[1]} lng={geo[0]}/>

            } else if (id === 'seaLakeIce') {
                return <IceMarker lat={geo[1]} lng={geo[0]}/>

            } else if (id === 'severeStorms') {
                return ev.geometry.map(g => {
                    return <StormMarker lat={g[1]} lng={g[0]}/>
                }) 

            } else if (id === 'earthquakes') {
                return <EarthquakeMarker lat={geo[1]} lng={geo[0]}/>

            } else if (id === 'snow') {
                return <SnowMarker lat={geo[1]} lng={geo[0]}/>
            }
                
        }

    })


    return (
        <div className="map">
            <GoogleMapReact
                defaultCenter= {center}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: 'AIzaSyB3coJPSajZSaWRtm1vsh9mrzksvoEg6vU'}}
            >
                {locationMarkers}

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map