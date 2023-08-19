import React from "react";
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import { useDispatch } from "react-redux";
import { thunkGetAddress } from '../../store/googleMap'
import ScheduleTechnician from "./ScheduleTechnician";

export default function ScheduleRoutePage() {
  const dispatch = useDispatch()
  const asdasd = () => {
    return dispatch(thunkGetAddress())
  }

  return (
    <section className='schedule-route-container'>
      <div className='schedule-route_inner'>
        <GoogleMaps />
        <ScheduleTechnician />
      </div>
    </section>
  )
}
