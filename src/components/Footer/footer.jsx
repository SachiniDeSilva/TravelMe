import React from 'react'
import './footer.css'
import {Container, Row , Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const quick_links = [
  {
    path : '/home',
    display : 'Home'
  },

  {
    path : '/about',
    display : 'About'
  },

  {
    path : '/toures',
    display : 'Toures'
  },
]


const quick_links2 = [
  {
    path : '/gallery',
    display : 'Gallery'
  },

  {
    path : '/login',
    display : 'Login'
  },

  {
    path : '/register',
    display : 'Register'
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
<Container>
  <Row>
    <Col lg='3'>
    <div className="logo">
      <img src={logo} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, doloribus?</p>
      <div className="social_links d-flex align-items-center gap-4">
        <sapn>
          <Link to='#'><i class="ri-youtube-line"></i></Link>
        </sapn>




        <sapn>
          <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
        </sapn>



        <sapn>
          <Link to='#'><i class="ri-instagram-line"></i></Link>
        </sapn>
      </div>
    </div>
    </Col>
    <Col lg='3'>
    <h5 className='footer_link_title'>Discover</h5>
    <ListGroup className='footer_quick_links'>
      {
        quick_links.map((item, index)=>(
          <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to ={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }

    </ListGroup>
    </Col>
    <Col lg='3'>
    <h5 className='footer_link_title'>Discover</h5>
    <ListGroup className='footer_quick_links'>
      {
        quick_links2.map((item, index)=>(
          <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to ={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }

    </ListGroup>
    </Col>
    <Col lg='3'></Col>
  </Row>
</Container>
    </footer>
  );
    
  
}

export default Footer;