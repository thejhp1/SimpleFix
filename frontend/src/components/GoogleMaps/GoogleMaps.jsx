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

export default function GoogleMaps({
  date,
  completedTickets,
  pendingTickets,
  cancelledTickets,
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
  const [active, setActive] = useState({});

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  const handleActive = (marker) => {
    if (marker === active) {
      return;
    }
    setActive(marker);
  };

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
                  {pendingTickets?.map((ticket) => {
                    if (ticket.date === null || ticket.date === date) {
                      if (ticket.status == "CSR-Need Schedule") {
                        return (
                          <div key={ticket.id}>
                            <MarkerF
                              position={ticket.Customer.location}
                              onClick={() => handleActive(ticket.id)}
                              icon={{
                                url: "/images/Marker-NeedSchedule.png",
                                scaledSize: { width: 50, height: 50 },
                              }}
                            >
                              {active === ticket.id ? (
                                <InfoWindowF
                                  position={ticket.Customer.location}
                                  onCloseClick={() => setActive(null)}
                                >
                                  <GoogleMapInfoWindow ticket={ticket} />
                                </InfoWindowF>
                              ) : null}
                            </MarkerF>
                            ;
                          </div>
                        );
                      } else if (ticket.status == "Need Review" || ticket.status == "Need Reschedule") {
                        return (
                          <div key={ticket.id}>
                            <MarkerF
                              position={ticket.Customer.location}
                              onClick={() => handleActive(ticket.id)}
                              icon={{
                                url: "/images/Marker-NeedReview.png",
                                scaledSize: { width: 50, height: 50 },
                              }}
                            >
                              {active === ticket.id ? (
                                <InfoWindowF
                                  position={ticket.Customer.location}
                                  onCloseClick={() => setActive(null)}
                                >
                                  <GoogleMapInfoWindow ticket={ticket} />
                                </InfoWindowF>
                              ) : null}
                            </MarkerF>
                            ;
                          </div>
                        );
                      } else if (ticket.status == "Waiting for Part") {
                        return (
                          <div key={ticket.id}>
                            <MarkerF
                              position={ticket.Customer.location}
                              onClick={() => handleActive(ticket.id)}
                              icon={{
                                url: "/images/Marker-WaitingForPart.png",
                                scaledSize: { width: 50, height: 50 },
                              }}
                            >
                              {active === ticket.id ? (
                                <InfoWindowF
                                  position={ticket.Customer.location}
                                  onCloseClick={() => setActive(null)}
                                >
                                  <GoogleMapInfoWindow ticket={ticket} />
                                </InfoWindowF>
                              ) : null}
                            </MarkerF>
                            ;
                          </div>
                        );
                      } else if (ticket.status == "CSR-Part Came In") {
                        return (
                          <div key={ticket.id}>
                            <MarkerF
                              position={ticket.Customer.location}
                              onClick={() => handleActive(ticket.id)}
                              icon={{
                                url: "/images/Marker-PartCameIn.png",
                                scaledSize: { width: 50, height: 50 },
                              }}
                            >
                              {active === ticket.id ? (
                                <InfoWindowF
                                  position={ticket.Customer.location}
                                  onCloseClick={() => setActive(null)}
                                >
                                  <GoogleMapInfoWindow ticket={ticket} />
                                </InfoWindowF>
                              ) : null}
                            </MarkerF>
                            ;
                          </div>
                        );
                      } else if (ticket.status == "Ready for Service") {
                        return (
                          <div key={ticket.id}>
                            <MarkerF
                              position={ticket.Customer.location}
                              onClick={() => handleActive(ticket.id)}
                              icon={{
                                url: "/images/Marker-Ticket.png",
                                scaledSize: { width: 59, height: 59 },
                              }}
                            >
                              {active === ticket.id ? (
                                <InfoWindowF
                                  position={ticket.Customer.location}
                                  onCloseClick={() => setActive(null)}
                                >
                                  <GoogleMapInfoWindow ticket={ticket} />
                                </InfoWindowF>
                              ) : null}
                            </MarkerF>
                            ;
                          </div>
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
