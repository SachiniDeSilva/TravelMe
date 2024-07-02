import { useRef } from 'react';
import React from 'react'
import './search-bar.css';
import {Col, Form, FormGroup} from 'reactstrap';

const SearchBar =() =>{

const locationRef =useRef('')
const distanceRef =useRef(0)
const maxGroupRef =useRef(0)

const searchHandler =()=>{
    const location = locationRef.current.value
    const disance = distanceRef.current.value
    const maxGroup = maxGroupRef.current.value


    if(location ===''|| disance === ' ' || maxGroup ===''){
        return alert ('All fields are required!')
    }
}

  return (
   <Col lg='12'>
    <div className="search_bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form_group form_group-fast '>
                <span><i className='ri-map-pin-line'></i></span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='Where are you going?' ref={locationRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form_group form_group-fast '>
                <span><i className='ri-time-line'></i></span>
                <div>
                    <h6>Destination</h6>
                    <input type="number" placeholder='Distance k/m'ref={distanceRef}/>
                </div>
            </FormGroup>


            <FormGroup className='d-flex gap-3 form_group form_group-last '>
                <span><i className='ri-group-line'></i></span>
                <div>
                    <h6>Max People</h6>
                    <input type="number" placeholder='0'ref={maxGroupRef}/>
                </div>
            </FormGroup>
            <span className="search_icon" type='submit' onClick={searchHandler}>
                <i className='ri-search-line'></i>
            </span>
        </Form>
    </div>
   </Col>
  )
}

export default SearchBar