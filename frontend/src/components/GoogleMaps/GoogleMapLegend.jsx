import React, { useState } from "react";
import "../../styles/components/GoogleMapLegend.css";

export default function GoogleMapLegend() {
//   const [hidden, setHidden] = useState("hidden");
  return (
    <section className="google-map-legend-container">
        <div className={`google-map-legend_inner`}>
          <div className="asdasd">
            <img
              width="50px"
              height="40px"
              src="/images/Legend_ReadyForService.png"
            />
            <p>Ready for Service</p>
            <img width="50px" height="40px" src="/images/Legend_NeedReview.png" />
            <p>Need Review/Reschedule</p>
            <img
              width="50px"
              height="40px"
              src="/images/Legend_NeedSchedule.png"
            />
            <p>Ready for Service</p>
            <img width="50px" height="40px" src="/images/Legend_PartCameIn.png" />
            <p>Ready for Service</p>
            <img
              width="50px"
              height="40px"
              src="/images/Legend_WaitingForPart.png"
            />
            <p>Waiting for Part</p>
        </div>
        <div className="zxczxc">
            <img
              width="50px"
              height="40px"
              src="/images/Legend_ReadyForServiceJP.png"
            />

            <p>JP</p>
            <img
              width="50px"
              height="40px"
              src="/images/Legend_ReadyForServiceZachary.png"
            />
            <p>Zachary</p>
            <img
              width="50px"
              height="40px"
              src="/images/Legend_ReadyForServiceJason.png"
            />
            <p>Jason</p>
            <img
              width="50px"
              height="40px"
              src="/images/Legend_ReadyForServiceCathal.png"
            />
            <p>Cathal</p>
        </div>
          </div>
    </section>
  );
}
