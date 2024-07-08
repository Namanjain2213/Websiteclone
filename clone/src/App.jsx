import React from 'react';
import Header from './Components/Header';
import SignInForm from './Components/Signinform';
import FeatureSection from './Components/Feature';
import TestimonialSection from './Components/TestimonialSection';
import Footer from './Components/Footer';
import image1 from './assets/img1.png'
import image2 from './assets/img2.png'
import Loginform from './Components/Loginform';
import Tabs from './Components/Tabs';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('signin');
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row  justify-between p-1 md:pl-8 md:pr-8  pt-10 bg-slate-100  ">
          <div className=" md:w-1/2  ">
            <h1 className=" text-xl md:text-4xl font-bold italic text-[36px] ">Explore your <span className="text-blue-500">hobby</span> or <span className="text-red-500">passion</span></h1>
            <p className="mt-6 ">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p className='mt-6' >If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            <div className='flex mt-10 '>
              <img src={image1} alt="" className='md:h-[200px] md:w-[300px] w-[140px] ' />
              <img src={image2} alt="" className='md:h-[200px] md:w-[300px] w-[140px] ' />
            </div>
            
          </div>
          <div >
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === 'signin' ? <SignInForm /> : <Loginform />}
            </div>
        </div>
        <FeatureSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
