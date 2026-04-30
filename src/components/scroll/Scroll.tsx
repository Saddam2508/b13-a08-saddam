import React from 'react';
import Marquee from 'react-fast-marquee';

const Scroll = () => {
    return (
        <div className='py-3'>
            <Marquee className='text-xl' speed={90}>
                New Arrivals: [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default Scroll;