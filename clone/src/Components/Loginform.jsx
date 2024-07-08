import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
function Loginform() {
  return (
    <div>
        <div className="w-full  p-4">
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
      <p className='text-xs md:text-[15px] '>
          By continuing, you agree to our <a href="/terms" className='font-bold'>Terms of Service</a> and <a href="/privacy" className='font-bold' >Privacy Policy</a>.
        </p>
    </div>

    </div>
  )
}

export default Loginform