import GoogleMapReact from 'google-map-react';
import FireMarker from './FireMarker';


const Map = ({eventData, center, zoom}) => {
    const fireMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>
        }
    })


    return (
        <div className="map">
            <GoogleMapReact
                defaultCenter= {center}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: 'AIzaSyALst5zQjrGs4RdjhK8-UdIGYd7KxhkTbg'}}
            >
                {fireMarkers}
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