import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImag from '../assets/weather.png'
import guidImag from '../assets/guide.png'
import customizationImag from '../assets/customization.png'

const serviceData =[
    {
        imgUrl :weatherImag,
       title: "Calculatr Weather",
       desc:"lorem20"
      
    },
    {
        imgUrl :guidImag,
       title: "Best Tour Guid",
       desc:"lorem20"
      
    },
    {
        imgUrl :customizationImag,
       title: "Customization",
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