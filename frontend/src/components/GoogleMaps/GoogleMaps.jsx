import React, { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
import "../../styles/components/GoogleMaps.css";

const mapStyles = {
  height: "54rem",
  width: "154rem",
};

export default function GoogleMaps({ completedTickets, pendingTickets, cancelledTickets }) {

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
  const [active, setActive] = useState({});

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
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
                      <div key={ticket.id}>
                        <MarkerF
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
                      </div>
                    ))}
                  </GoogleMap>
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
