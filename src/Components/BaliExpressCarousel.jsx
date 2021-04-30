import React from 'react';

import Carousel from 'react-material-ui-carousel'


const BaliExpressCarousel = ({items}) => {


    return (
        <Carousel>
            {
                items.map((item, index) => (<img src={item.image} alt={item.name} className="image"/>))
            }
        </Carousel>
    );
}

export default BaliExpressCarousel;