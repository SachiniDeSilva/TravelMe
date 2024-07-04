import React from 'react';
import '../styles/home.css';
import { Container,Row,Col, Form } from 'reactstrap';
import image1 from '../assets/OIP (13).jpg';
import image2 from '../assets/OIP (6).jpg';
import video1 from '../assets/hero.mp4';
import world from '../assets/OIP__1_-removebg-preview.png'
import Subtitle from '../shared/Subtitle';
import FeaturedToureList from '../components/Featured-tour/FeaturedToureList';
import experienceImg from '../assets/OIP (11).jpg'

import Service from '../Service/Service';
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return <>




  
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero_content'>
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle subtitle ={'Know Before You Go'}/>
              <img src={world} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque quisquam esse laborum asperiores, error repellat voluptate, deserunt hic, eum fugit molestiae optio. Laborum atque earum magni totam, nam odit.</p>
          </div>
        </Col>
        <Col lg='2'>
        <div className="hero_img-box">
          <img src={image1}alt="" />
        </div>
        </Col>

        <Col lg='2'>
        <div className="hero_img-box mt-4">
          <video src={video1}alt="" controls/>
        </div>
        </Col>

        <Col lg='2'>
        <div className="hero_img-box mt-5">
          <img src={image2}alt="" />
        </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>








  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services_subtitle">What we serve</h5>
        <h2 className="setvice_title">We offer our best service</h2>
        </Col>
        <Service/>
      </Row>
    </Container>
  </section>








{/*feature*/}
<section className='feach'>
  <Row>
    <Col lg='12' className='mb-5'>
    <Subtitle subtitle={'Explore'}/>
    <h2 className="featured_tour-title">Our Featured Tours</h2></Col>
    <FeaturedToureList/>
  </Row>
</section>















{/*experience*/}

<section>
  <Container>
    <Row>
      <Col lg='6'>
      <div className="experience_content">
        <Subtitle subtitle={'Experience'}/>

        <h2>With Our All Experience <br/> we will serve you</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil iure autem magni exercitationem reprehenderit nulla accusamus beatae eaque totam nesciunt?</p>
      </div>
      <div className="counter_wrapper d-flex align-items-center gap-5">

<div className="counter_box">
  <span>12k+</span>
  <h6>Successfull Trip</h6>
</div>
<div className="counter_box">
  <span>2k+</span>
  <h6>Regular clients</h6>
</div>
<div className="counter_box">
  <span>10</span>
  <h6>Years experience</h6>
</div>

      </div>
      </Col>
      <Col lg='6'>
      <div className="experience_img">
        <img src={experienceImg} alt="" />
      </div>
      </Col>
    </Row>
  </Container>
</section>
  </>
}

export default Home;