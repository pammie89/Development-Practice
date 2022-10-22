import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

{/* container */}

<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pamela Afaneh <span class='text-pink-600'>\</span></h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Student of Full Stack Web Development with MERN</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>This portfolio serves as a location where I will link up all my practice website builds that I create.  
        Learning with hands-on experience is where we learn the best, as it allows us to experience real world 
        quirks that pop up when coding. So I will be completling a large list of projects that will focus on certain skill sets. Upon completion I will 
        upload them to this site for peer review. <br /><br />

        <br /> <br /> 
    </p>
    <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center
         hover:bg-pink-600 hover:border-pink-600'>
           <Link to='work' smooth={true} duration={500}> View Work </Link>
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
       
        </span>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Home