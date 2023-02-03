import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import CONTENT from '../../content/words'

function ImgList(){

    return<div>
        <Container>
        {CONTENT.images.map((i)=>(
            <Row className="p-3">
                <Col></Col>
                <Col sm={8}>
                    <Image
                    src={i}
                    alt={i}
                    rounded
                    fluid
                    />
                </Col>
                <Col></Col>
            </Row>
        ))}
        </Container>
    </div>
}

export default ImgList