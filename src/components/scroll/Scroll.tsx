
import Marquee from 'react-fast-marquee';

const Scroll = () => {
    return (
        <div className='py-3 flex gap-1'>
            <span className='btn text-sm sm:text-xl bg-amber-50'>New Arrivals:</span>
            <Marquee className=' text-sm sm:text-xl' speed={90}>
                 [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default Scroll;