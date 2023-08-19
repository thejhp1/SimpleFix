import React, { useEffect, useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
import "../../styles/components/GoogleMaps.css";

const mapStyles = {
  height: "50rem",
  width: "150rem",
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
    <section className="google-map-container">
      <div className="google-map_inner">
        {isLoaded ? (
          <>
          <section className="schedule-date-container">
            <div className="schedule-date_inner">
              <div className="schedule-date-background">
                <input type="date"></input>
              </div>
            </div>
          </section>
          <section className="google-map-background-container">
            <div className="google-map-background_inner">
              <div className="google-map-second-background">
                <div className="google-map">
                  <GoogleMap
                    position="static"
                    zIndex="1"
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
                            <GoogleMapInfoWindow ticket={ticket} />
                          </InfoWindowF> : null}
                        </MarkerF>;
                      </>
                    ))}
                  </GoogleMap>
                </div>

              </div>

            </div>
          </section>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
