import { MapContainer, TileLayer } from 'react-leaflet';
import {useEffect} from "react";

const MyComponent = () => {

    const [baseViewCoords, setBaseViewCoords] = useState([37.715, 44.8611]);
    const [map, setMap] = useState();

    const searchApiHandler = () => {...};

    useEffect(() => {
        if (map){
            L.control.sideBySide(stamenLayer, osmLayer).addTo(map);
        }
    }, [map])

    useEffect(() => {
        if (map){
            map.setView(baseViewCoords)
        }
    }, [map, baseViewCoords]);

    return (
        <MapContainer
            center={baseViewCoords}
            zoom={13}
            whenCreated={map => setMap(map)}
        >
            <TileLayer
                url={osm_url}
            />
            <TileLayer
                url={stamen_url}
            />
        </MapContainer>
    )

}