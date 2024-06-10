import React from 'react';
import '../styles/home.css';
import { Container,Row,Col, Form } from 'reactstrap';
import image1 from '../assets/OIP (13).jpg';
import image2 from '../assets/OIP (6).jpg';
import video1 from '../assets/hero.mp4';
import world from '../assets/OIP.jpg'
import Subtitle from '../shared/Subtitle';

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
  
  </>
}

export default Home;