import React from 'react'
import './newsletter.css'
import { Container, Row ,Col } from 'reactstrap'
import maleTourist from '../assets/OIP__11_-removebg-preview.png'

const Newsletter = () => {
  return (
  <section>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter_content">
                <h2>
                    Subscribe now to get useful traveling information
                </h2>

                <div className="newsletter_input">
                    <input type="email" placeholder='Enter Your email' />
                    <button className="btn newsletter_btn">Subscribe</button>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nostrum doloremque dolorum ullam ipsa, fugit labore architecto at iure nemo?</p>




            </div>
            </Col>
            <div className="newsletter_img">
                <img src={maleTourist} alt="" />
            </div>


            <Col lg='6'>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter