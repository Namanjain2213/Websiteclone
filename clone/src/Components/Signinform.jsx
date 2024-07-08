import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import lockicon from '../assets/lock_black_24dp 1.png'

function SignInForm() {
  return (
    <div className="w-full md:w-full p-4">
      <button className="bg-transparent border border-indigo-300 mt-2 text-black font-bold md:text-xl w-full py-2 rounded-lg mb-2 relative flex items-center justify-center">
        <FcGoogle className='absolute left-4' /> Continue with Google
      </button>
      <button className="bg-transparent border border-indigo-300 mt-2 text-black font-bold md:text-xl w-full py-2 rounded-lg mb-2 relative flex items-center justify-center">
        <BiLogoFacebookCircle className='absolute left-4' /> Continue with Facebook
      </button>
      <div className='flex items-center justify-center mt-2'>
        <div className='h-[2px] w-10 md:w-40 mr-2 bg-slate-300'></div>
        <div className='text-black font-semibold'>Or Connect with</div>
        <div className='h-[2px] w-10 md:w-40 ml-2 bg-slate-300'></div>
      </div>
      <div className="mt-2">
        <input type="email" placeholder="Email" className="w-full p-2 mt-4 border rounded mb-2 outline-none" />
        <input type="password" placeholder="Password" className="w-full mt-4 p-2 border rounded mb-2 outline-none" />
        <button className="bg-transparent border border-indigo-300 mt-4 text-black font-bold text-xl w-full py-2 rounded-lg mb-2">Continue</button>
      </div>
      <div className='mt-2 flex  md:flex-row md:items-center'>
        <input type="checkbox" id='rember' />
        <label htmlFor="rember" className='ml-1 text-[15px] font-semibold'>Remember me</label>
        <div className=' ml-2 md:mt-0 md:ml-auto flex items-center text-[15px] '>
          <img src={lockicon} alt="" className=' ' /> Forgot Password
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
