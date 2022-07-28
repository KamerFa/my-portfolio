import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
        <p className='text-xl'>Hello, <b className='text-[#129195]'>my name</b> is</p>
        <h1 className='text-4xl sm:text-7xl'>
          <b className='text-[#129195]'>Kamer</b> Fazlic
        </h1>
        <h2 className='text-4xl sm:text-7xl'>
          I'm a <b className='text-[#129195]'>Front-End</b> <br />Developer.
        </h2>
        <div>
          <Link to='projects' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#129195] hover:border-[#129195]'>
              See Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
