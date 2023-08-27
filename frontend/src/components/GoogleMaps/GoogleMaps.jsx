import React, { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
import "../../styles/components/GoogleMaps.css";
import GoogleMapMarkerNS from "./GoogleMapMarkerNS";
import GoogleMapMarkerNR from "./GoogleMapMarkerNR";
import GoogleMapMarkerWP from "./GoogleMapMarkerWP";
import GoogleMapMarkerPCI from "./GoogleMapMarkerPCI";
import GoogleMapMarkerRS from "./GoogleMapMarkerRS";
import GoogleMapLegend from "./GoogleMapLegend";

const mapStyles = {
  height: "54rem",
  width: "154rem",
};

export default function GoogleMaps({
  date,
  completedTickets,
  pendingTickets,
  cancelledTickets,
  tickets
}) {
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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return (
    <section className="google-map-container">
      <div className="google-map_inner">
        {isLoaded ? (
          <>
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
                  <GoogleMapLegend />
                  {tickets?.map((ticket) => {
                    if (ticket.date === null || ticket.date === date) {
                      if (ticket.status == "CSR-Need Schedule") {
                        return (
                          <GoogleMapMarkerNS ticket={ticket} />
                        );
                      } else if (
                        ticket.status == "Need Review" ||
                        ticket.status == "Need Reschedule"
                      ) {
                        return (
                          <GoogleMapMarkerNR ticket={ticket} />
                        );
                      } else if (ticket.status == "Waiting for Part") {
                        return (
                          <GoogleMapMarkerWP ticket={ticket} />
                        );
                      } else if (ticket.status == "CSR-Part Came In") {
                        return (
                          <GoogleMapMarkerPCI ticket={ticket} />
                        );
                      } else if (ticket.status == "Ready for Service") {
                        return (
                          <GoogleMapMarkerRS ticket={ticket} />
                        );
                      }
                    }
                  })}
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
