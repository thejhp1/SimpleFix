import React, { useEffect, useState } from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
import ticketReducer from "../../store/ticket";
export default function GoogleMapMarkerRS({ ticket, clickOnTicket }) {
  const [active, setActive] = useState({});
  const handleActive = (marker) => {
    if (marker === active) {
      return;
    }
    setActive(marker);
  };

  useEffect(() => {
    setActive(clickOnTicket.id);
  }, [clickOnTicket]);
  return (
    <div key={ticket.id}>
      {ticket.Technician.name === "JP" ? (
        <MarkerF
          position={ticket.Customer.location}
          onClick={() => handleActive(ticket.id)}
          icon={{
            url: "/images/Marker_ReadyForServiceJP.png",
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
      ) : ticket.Technician.name === "Zachary" ? (
        <MarkerF
          position={ticket.Customer.location}
          onClick={() => handleActive(ticket.id)}
          icon={{
            url: "/images/Marker_ReadyForServiceZachary.png",
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
      ) : ticket.Technician.name === "Cathal" ? (
        <MarkerF
          position={ticket.Customer.location}
          onClick={() => handleActive(ticket.id)}
          icon={{
            url: "/images/Marker_ReadyForServiceCathal.png",
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
      ) : ticket.Technician.name === "Jason" ? (
        <MarkerF
          position={ticket.Customer.location}
          onClick={() => handleActive(ticket.id)}
          icon={{
            url: "/images/Marker_ReadyForServiceJason.png",
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
      ) : (
        ""
      )}
    </div>
  );
}
