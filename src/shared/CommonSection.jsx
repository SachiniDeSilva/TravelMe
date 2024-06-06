import React from 'react';
import './common-section.css';
import {Container, Row ,Col} from 'reactstrap';

const CommonSection = ({title}) => {
  return (
    <section className="common_section">
        <Container>
            <Row>
                <col lg ='12'>
                    <h1>
                        {title}
                    </h1>
                </col>
            </Row>
        </Container>
    </section>



   
  )
}

export default CommonSection