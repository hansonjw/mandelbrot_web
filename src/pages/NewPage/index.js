import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import CrossFade from './crossfade'

import CONTENT from '../../content/words'

function ImgList(){

    return<div>
        <CrossFade />
        {/* <RevolveImgs /> */}
    </div>
}


class RevolveImgs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imgIdx: 0,
        imgIdxMax: CONTENT.images.length - 1
    };
    }
  
    changeImg() {
        // add logic to compage to len of image source array
        if (this.state.imgIdx >= this.state.imgIdxMax){
            this.setState(state =>({
                imgIdx: 0
            }))
        } else {
            this.setState(state =>({
                imgIdx: state.imgIdx + 1
            }))
        }
    }
  
    componentDidMount() {
        // this.interval = setInterval(() => this.tick(), 1000);
        this.interval = setInterval(() => this.changeImg(), 500);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
            <Container>
                <Row className="p-3">
                    <Col></Col>
                        <Col sm={8}>
                            <Image
                                src={CONTENT.images[this.state.imgIdx]}
                                rounded
                                fluid
                            />
                        </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
      );
    }
}

export default ImgList