import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id); //call api and data from db
  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to the server
  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);
    // later will call api
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'> 
                    <span className='tour_rating d-flex align-items-center gap-1'>
                      <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated' ) : ( <span>({reviews.length})</span>)}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i>{address}
                    </span>
                  </div>

                  <div className="tour_extra-detail">
                    <span><i className='ri-map-pin-2-line'></i>{city}</span>
                    <span><i className='ri-money-dollar-circle-line'></i>${price}</span>
                    <span><i className='ri-map-pin-time-line'></i>{distance}k/m</span>
                    <span><i className='ri-group-line'></i>{maxGroupSize}</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                
                {/*=============== tour reviews */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      <span onClick={() => setTourRating(1)}><i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(2)}><i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(3)}><i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(4)}><i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(5)}><i className="ri-star-s-fill"></i></span>
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className='btn primary_btn text-white' type='submit'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>

<Col lg='4'></Col>



          </Row>
        </Container>
      </section>
    </>
  );
}

export default TourDetails;
