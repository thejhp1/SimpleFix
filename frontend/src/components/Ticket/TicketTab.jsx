import React, { useEffect } from 'react'
import "../../styles/components/TicketTab.css"


export default function TicketTab({ selectedTab, setSelectedTab }) {

  useEffect(() => {
    setSelectedTab("General")
  }, [setSelectedTab])

  return (
    <section className='ticket-tab-container'>
        <div className='ticket-tab_inner'>
            <span onClick={() => setSelectedTab("General")} className={selectedTab === "General" ? 'active ticket-tab-general-information-container' : "ticket-tab-general-information-container"}>
                <div className='ticket-tab-general-information_inner'>
                    General Information
                </div>
            </span>
            <span onClick={() => setSelectedTab("Service")}  className={ selectedTab === "Service" ? 'active ticket-tab-service-tracking-container' : "ticket-tab-service-tracking-container"}>
                <div className='ticket-tab-service-tracking_inner'>
                    Service Tracking
                </div>
            </span>
        </div>
    </section>
  )
}
