import GoogleMapReact from 'google-map-react';
import FireMarker from './FireMarker';


const Map = ({eventdata, center, zoom}) => {
    const fireMarkers = eventdata.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireMarker lat={ev.lat} lng={ev.lng}/>
        }
    })


    return (
        <div className="map">
            <GoogleMapReact
                defaultCenter= {center}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: ''}}
            >
                <FireMarker lat={center.lat} lng={center.lng}/>
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