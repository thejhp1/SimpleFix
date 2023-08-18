import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllTicket } from "../../store/ticket";
import "../../styles/components/GoogleMaps.css"
// import MapsUserInfo from './MapsUserInfo'
// import dog from "./dog.png"


const mapStyles = {
    height: "88.5vh",
    width: "100%"
};

const center = {
    lat: 37.526104,
    lng: -77.444513
};

export default function GoogleMaps() {
    const user = useSelector(state => state.session.user)
    const ticketStore = useSelector(state => state.tickets)
    const dispatch = useDispatch();
    const [selected, setSelected] = useState({});

    useEffect(() => {
        dispatch(thunkGetAllTicket());
    }, [dispatch]);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.GOOGLE_MAP_API
    })

    // if (loadError) {
    //     return <div>Map cannot be loaded right now, sorry.</div>
    // }

    return (
        <>
            {isLoaded ? <GoogleMap
                position="static"
                zIndex="1"
                mapContainerStyle={mapStyles}
                zoom={11}
                center={center}></GoogleMap>
                : ""}
        </>
    )
}
