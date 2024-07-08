import React from 'react';
import event from '../assets/event.png';
import groups from '../assets/groups.png'
import shooping from '../assets/shopping.png'
import location from '../assets/location.png'
function FeatureSection() {
  return (
    <div className="mt-8 md:ml-40 justify-center items-center grid md:grid-cols-2   gap-2">
      <div className="p-4 border-2  border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out  rounded-xl w-[300px] md:w-[450px] shadow-md">
       <div className='flex  items-center  mb-3' ><img src={groups} alt="" /> <h3 className="text-xl font-bold ml-3"> People</h3></div>
        <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
        <button className='border border-indigo-300 mt-2 py-1 px-6'>Connection</button>
      </div>
      <div className="p-4 border-2 border-green-400 hover:bg-green-400 hover:text-white transition-all duration-200 ease-in-out  rounded-xl w-[300px] md:w-[450px]  shadow-md ">
       <div className='flex  items-center mb-3' ><img src={location} alt="" className='text-white' /> <h3 className="text-xl font-bold ml-3"> <span></span> Place</h3></div>
        <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button className='border border-indigo-300 mt-2 py-1 px-6'>Meet Up</button>
      </div>
      <div className="p-4 border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-200 ease-in-out   rounded-xl w-[300px] md:w-[450px]  shadow-md  ">
      <div className='flex  items-center mb-3 ' ><img src={shooping} alt=""  />  <h3 className="text-xl font-bold ml-3">Product</h3> </div>
        <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button className='border border-indigo-300 mt-2 py-1 px-6'>Get it</button>
      </div>
      <div className="p-4 border-2 border-sky-400 hover:bg-sky-400 hover:text-white transition-all duration-200 ease-in-out  rounded-xl w-[300px] md:w-[450px]  shadow-md  ">
      <div className='flex  items-center mb-3'><img src={event} alt="" />  <h3 className="text-xl font-bold ml-3">Program</h3></div>
        <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button className='border border-indigo-300 mt-2 py-1 px-6'>Attend</button>
      </div>
    </div>
  );
}

export default FeatureSection;
