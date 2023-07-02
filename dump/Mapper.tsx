import React from 'react';
import ImageMapper from 'react-img-mapper';

import journey from '../../public/assets/itinerary.jpg';
import itinerary from '../../components/Journey/itinerary.json'


const Mapper = props => {
    const URL = 'https://res.cloudinary.com/diy4muhie/image/upload/v1688284204/Beyul%20%7C%20Bigu%20Life%20Festival/itinerary_-_mapper_zk8aoz.jpg';
    const MAP = {
        name: 'my-map',
        areas: itinerary,
    };

    return <ImageMapper
        src={URL}
        map={MAP}
        // parentWidth={1518}
        // responsive={true}
        onMouseEnter={(e) => {
            (
                <h1>ENTER</h1>
            )
        }}
        onMouseLeave={(e) => { console.log("Mouse left", e) }}
    />
}

export default Mapper;