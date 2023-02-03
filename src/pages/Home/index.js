import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgCarousel from './ImgCarousel'

import Button from 'react-bootstrap/Button';

import CONTENT from '../../content/words'

function Home(){

    return<div>
        <Container>
            <Row>
                <Col></Col>
                <Col sm={7}>
                    <ImgCarousel></ImgCarousel>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
}

export default Home