import React, { useEffect, useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import "../../styles/components/GoogleMaps.css";

const mapStyles = {
  height: "88.5vh",
  width: "100%",
};

export default function GoogleMaps() {
  const center = useMemo(
    () => ({
      lat: 37.526104,
      lng: -77.444513,
    }),
    []
  );

  const darkOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: false,
      mapId: "783d71f5b2aa200c",
    }),
    []
  );

  const lightOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: false,
    }),
    []
  );

  const user = useSelector((state) => state.session.user);
  const ticketStore = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const [active, setActive] = useState({});

  useEffect(() => {
    dispatch(thunkGetAllTicket());
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  //DIVIDE TICKETS INTO COMPLETED, PENDING AND CANCELLED
  let completedTickets = [],
    pendingTickets = [],
    cancelledTickets = [];
  for (let ticket of Object.values(ticketStore)) {
    if (ticket.status === "Completed") {
      completedTickets.push(ticket);
    } else if (ticket.status === "Cancel") {
      cancelledTickets.push(ticket);
    } else {
      pendingTickets.push(ticket);
    }
  }
  const handleActive = (marker) => {
    if (marker === active) {
      return
    }
    setActive(marker)
  }

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          //   position="static"
          //   zIndex="1"
          mapContainerStyle={mapStyles}
          options={lightOptions}
          zoom={11}
          center={center}
        >
          {pendingTickets?.map((ticket) => (
            <>
              <MarkerF
                key={ticket.id}
                position={ticket.Customer.location}
                onClick={() => handleActive(ticket.id)}
                icon={{
                  url: "/images/Marker.png",
                  scaledSize:{width:50, height:50}
                }}
              >
                {active === ticket.id ? <InfoWindowF onCloseClick={() => setActive(null)}>
                  <section className="map-info-window-container">
                    <div className="map-info-window_inner">
                      <p>{ticket.number}</p>
                    </div>
                  </section>
                </InfoWindowF> : null}
              </MarkerF>;
            </>
          ))}
        </GoogleMap>
      ) : (
        ""
      )}
    </>
  );
}
