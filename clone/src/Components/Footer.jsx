import React from 'react';
import img1 from '../assets/5820000 1.png';
import img2 from '../assets/5820098 1.png';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className= " flex flex-col bg-sky-100 md:max-w-fit m-auto">
          <p className="text-2xl font-bold p-5">
            Your <span className="text-indigo-700">Hobby</span>, Your <span className="text-blue-300 font-bold">Community...</span>
          </p>
          <button className="py-1 px-6 bg-purple-700 w-[150px] text-white ml-5">Get Started</button>
        
            <div className=" flex   p-4  relative w-[800px] mt-4  items-center">
              
              <img src={img2} alt="" className="w-[150px] h-[100px] md:w-2/5 md:h-[220px] md:mt-4 md:ml-10 md:mr-10" />
              <img src={img1} alt="" className="w-[150px] h-[100px] md:w-2/5 md:h-[220px] md:mt-4 md:ml-10 md:mr-10"  />

            </div>

        </div>
      </div>
    
      <footer className="bg-white py-8 mt-8 border-t">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hobbycue</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">How Do I</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a Query</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Add a Blog Post</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Other Queries</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><TiSocialFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><TiSocialTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><SlSocialInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><SlSocialPintarest /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><TiSocialYoutube /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaTelegramPlane /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><IoMdMail /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Invite Friends</h4>
            <form>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="mt-3 w-full px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Invite
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-600 md:h-0 h-10 mb-0 bg-slate-200 md:bg-white">
          © Purple Cues Private Limited
        </div>
      </footer>
    </>
  );
};

export default Footer;






















