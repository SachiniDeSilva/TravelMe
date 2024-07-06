import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg';
import ava02 from '../../assets/profile2.jpg';
import ava03 from '../../assets/profile3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimo.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className='text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className=' test2 d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='test_img rounded-2' alt="" />
        <div>
        <h6 className='mb-0 mt-3 text-white font-bold'>John</h6>
        <p className='text-white font-medium' >Customer</p>
      </div></div></div>

      <div className="testimonial py-4 px-3">
        <p className='text-white font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className='test2 d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='test_img rounded-2' alt="" />
        <div>
        <h6 className='mb-0 mt-3 text-white font-bold'>John</h6>
        <p className='text-white font-medium'>Customer</p>
      </div></div></div>

      <div className="testimonial py-4 px-3">
        <p className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse in, magnam tenetur sit illum eos expedita impedit architecto quisquam inventore.</p>
        <div className=' test2 d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='test_img rounded-2' alt="" />
        <div>
        <h6 className='mb-0 mt-3 text-white font-bold'>John</h6>
        <p className='text-white font-medium'>Customer</p>
      </div></div></div>
    </Slider>
  );
};

export default Testimonials;
