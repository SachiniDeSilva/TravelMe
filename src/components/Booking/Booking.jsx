import React from 'react'
import './booking.css'
import { Form , FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

const Booking = ({tour, avgRating}) => {

const {price, reviews} = tour


  return <div className="booking">
    <div className="booking_top d-flex align-items-center justify-content-between">
      <h3>${price} <span>/per person</span></h3>

      <span className='tour_rating d-flex align-items-center '>
                      <i className="ri-star-fill"></i>
                      {avgRating === 0 ? null : avgRating} ({reviews?.length})
                     
                    </span>
    </div>
    {/*=======Booking form==========*/}
    <div className="booking_form">
      <h5>Information</h5>
      <form action="booking_info-form">
        <FormGroup>
          <input type="text" placeholder='Full Name' id='fulName' required onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
          <input type="text" placeholder='Full Name' id='fulName' required onChange={handleChange}/>
        </FormGroup>


        <FormGroup>
          <input type="text" placeholder='Full Name' id='fulName' required onChange={handleChange}/>
        </FormGroup>

      </form>
    </div>
  </div>
}

export default Booking