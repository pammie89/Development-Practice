import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi there, my name is Pam.  Thanks for stopping by to check out my practice projects</p>
                  </div>
                  <div>
                    <p>
                      I have been working in the web arena for about 20 years, and recently I decided it is time to give my skill sets an 
                      upgrade.  So I took a leap of faith and enrolled in a certification program for Full Stack Web Development with MERN with M.I.T xPro.
                      I am super excited to complete this program in March so I can get back out into the work place with new bells and whitles to add to my resume.
                    </p>
                  </div>

                </div>
            </div>
        </div>

    
  )
}

export default About