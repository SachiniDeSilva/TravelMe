import React from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
const TourDetails = () => {



  const {id} = useParams()



  const tour = tourData.find((tour) => tour.id === id)//call api and data from db

const {photo, title, desc, price, reviews, address,city, distance , maxGroupSize} = tour


const {totalRating,avgRating} = calculateAvgRating(reviews)
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
              <div className='d-flex align-items-cente gap-5'> 
                
          <span className='tour_rating d-flex align-items-center gap-1'>
            <i class ="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i>{calculateAvgRating === 0 ? null :avgRating}
            {totalRating === 0 ? ('Not rated' ): ( <span>({reviews.length})</span>)}
          </span>
            

            <span>
              <i class="ri-map-pin-user-fill"></i>{address}
            </span>
                </div>

                <div className="tour_extra-detail">
                  <span><i class='ri-map-pin-2-line'></i>{city}</span>
                  <span><i class='ri-money-dollar-circle-line'></i>${price}</span>
                  <span><i class='ri-group-line'></i>{maxGroupSize}</span>
                </div>
                <h5>description</h5>
                <p>{desc}</p>
            </div>
            {/*=============== tour reviwes*/}
            <div className="tour_reviews mt-4">
              <h4>Reviews({reviews?.length}reviews)</h4>
              <form >
                <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                </div>
                <div className="review_input">
                  <input type="text" placeholder='share your thought' />
                  <button className='btn primary_btn text-white'type='submt'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    </>
  )
}

export default TourDetails;