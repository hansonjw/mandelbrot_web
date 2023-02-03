import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import CONTENT from '../../content/words'

function ImgCarousel(){

    return<div>
        <Carousel fade>
        {CONTENT.images.map((i)=>(
            <Carousel.Item interval={200}>
                <Image
                src={i}
                alt={i}
                rounded
                fluid
                />
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
}

export default ImgCarousel
