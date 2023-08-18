import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import { useDispatch } from 'react-redux'
import { thunkGetAddress } from '../../store/googleMap'

export default function ScheduleRoute() {
  const dispatch = useDispatch()
  const asdasd = () => {
    console.log('asdasd')
    return dispatch(thunkGetAddress())
  }
  return (
    <section className='schedule-route-container'>
      <div className='schedule-route_inner'>
        <GoogleMaps />
        ScheduleRoute
        <button onClick={asdasd}>asd</button>
      </div>
    </section>
  )
}
