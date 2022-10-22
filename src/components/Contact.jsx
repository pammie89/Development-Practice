import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e96c34ff-c6a7-4d48-a8d9-0256054331f6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - pamela-afaneh@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 border-radius: 4px rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' />
            <textarea name='message' rows="10" className='my-4 p-2 bg-[#ccd6f6] rounded-md' placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collarborate</button>
        </form>

    </div>
  )
}

export default Contact