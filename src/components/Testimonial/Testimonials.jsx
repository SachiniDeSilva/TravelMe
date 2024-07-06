import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/madolsima.jpg'
import ava02 from '../../assets/42 Lighthouse.jpg'
import ava03 from '../../assets/muthukandiya.jpg'

const Testimonials = () => {
  return (
   <Slider>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
           <img src={ ava01} className='w-25 h-25 rounded-2 'alt="" /> 
        </div>
        <h6 className='mb-0 mt-3'>John</h6>
        <p>Customer</p>
    </div>


    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
           <img src={ ava02} className='w-25 h-25 rounded-2 'alt="" /> 
        </div>
        <h6 className='mb-0 mt-3'>John</h6>
        <p>Customer</p>
    </div>


    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
           <img src={ ava03} className='w-25 h-25 rounded-2 'alt="" /> 
        </div>
        <h6 className='mb-0 mt-3'>John</h6>
        <p>Customer</p>
    </div>
   </Slider>
  )
}

export default Testimonials