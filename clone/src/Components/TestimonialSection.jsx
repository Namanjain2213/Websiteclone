import React from 'react';
import quote from '../assets/quote.png'
import audio from '../assets/Audio Track.png'
import Ellipse from '../assets/Ellipse 12.png'
import add from '../assets/Add.png'
function TestimonialSection() {
  return (
    <>
    <div className='border mt-4 ml-0 py-8  md:p-10 w-[300px] md:w-full bg-sky-100 '>
      <div className='w-[280px] md:w-[900px] m-auto bg-white p-2 md:p-4'>
        <div className='flex gap-2'>
          <img src={add} alt="" />
          <h1 className=' ml-2 mt-1'>Add your own</h1>
        </div>
        <p className='mt-2'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
        <button className='py-1 px-5 border mt-2 ' >Add New</button>
      </div>
      </div>



      <div className="mt-8 flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md md:w-[900px] m-auto  ">
        <div>
          <div className='flex gap-2'>
            <img src={quote} alt="" />
            <h3 className="text-2xl font-bold">Testimonials</h3>
          </div>

          <p className="mt-2">"In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it."</p>
          <div className='flex flex-col-reverse md:felx-row ' >
            <img src={audio} alt="" className='h-[60px] w-[350px]  md:w-[550px] md:object-cover mt-5 ' />
            <div className='flex  md:flex-row '>
              <img src={Ellipse} alt="" className='h=[30px] w-[60px] md:ml-20 mt-5 ' />

              <div className='flex flex-col mt-5 ml-2' ><p className='text-xl'>Shubha Nagarajan <p className='text-xs text-sky-300 font-bold'>Classical Dancer</p> </p></div>
            </div>
          </div>

        </div>

      </div>
    </>

  );
}

export default TestimonialSection;
