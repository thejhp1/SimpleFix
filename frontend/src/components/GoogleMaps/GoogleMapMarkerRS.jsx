import React, { useEffect, useState } from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
export default function GoogleMapMarkerRS({ ticket, clickOnTicket }) {
  const [active, setActive] = useState({});
  const handleActive = (marker) => {
    if (marker === active) {
      return;
    }
    setActive(marker);
  };

  useEffect(() => {
    setActive(clickOnTicket.id)
  }, [clickOnTicket])

  return (
    <div key={ticket.id}>
      <MarkerF
        position={ticket.Customer.location}
        onClick={() => handleActive(ticket.id)}
        icon={{
          url: "/images/Marker_ReadyForService.png",
          scaledSize: { width: 50, height: 50 },
        }}
      >
        {active === ticket.id ? (
          <InfoWindowF
            position={ticket.Customer.location}
            onCloseClick={() => setActive(null)}
          >
            <GoogleMapInfoWindow
              ticket={ticket}
            />
          </InfoWindowF>
         ) : null}
      </MarkerF>
      ;
    </div>
  );
}
