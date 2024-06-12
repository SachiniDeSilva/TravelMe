import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImag from '../assets/'
import guidImag from '../assets/'
import customizationImag from '../assets/'

const serviceData =[
    {
        imgUrl :weatherImag,
       title: "Calculatr Weather",
       desc:"lorem20"
      
    },
    {
        imgUrl :guidImag,
       title: "Calculatr Weather",
       desc:"lorem20"
      
    },
    {
        imgUrl :customizationImag,
       title: "Best Tour Guide",
       desc:"lorem20"
      
    },
    
]

function Service() {
  return <>
{
    serviceData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
}

  </>
}

export default Service