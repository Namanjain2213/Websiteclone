import React from 'react';
import logo from '../assets/HobbyCue Logo.png'
import Searchicon from '../assets/icons8_search 1.png';
import group from '../assets/Group.png'
import product from '../assets/Product 3.png'
import notificationlogo from '../assets/notifications_black_24dp 1.png';
import hobbieslogo from '../assets/Hobbies.png';
import bookmarklogo from '../assets/bookmark_black_24dp 1.png';
function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src={logo} className='w-[100px] md:sr-only not-sr-only  ' alt="" />
                    <img src={Searchicon} alt="" className='bg-blue-500 ml-2 md:sr-only not-sr-only ' />
                    <img src={notificationlogo} alt="" className='ml-2 md:sr-only not-sr-only ' />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a></a></li>
                            <li>
                                <a>Explore</a>
                                <ul className="p-2">
                                    <li><a>People-community</a></li>
                                    <li><a>Place-Venues</a></li>
                                    <li><a>Programs-Events</a></li>
                                    <li><a>Product-Store</a></li>
                                    <li><a>Blogs</a></li>
                                </ul>
                            </li>
                            <li><a>Hobbies</a></li>
                        </ul>
                    </div>
                    <a className=" h-[30px]  w-[150px] ml-32 "><img src={logo} alt="" /></a>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                <div className='flex '>   <input type="text" placeholder="Search here" className="input input-bordered w-24 md:w-auto" /> <img src={Searchicon} alt="" className='h-[45.5px] w-[35px] bg-blue-700 absolute rounded-md  left-[484px] top-[28px]    '  /> </div>
                    <ul className="menu menu-horizontal px-1">
                    
                    <li>
                            <details>
                                
                                <summary className='ml-32'> <img src={group} alt="" className='h-[20px] w-[20px] ' /> Explore</summary>
                                <div className='ml-28 absolute bg-white'>
                                <ul className="p-2 ">
                                    <li><a className='w-[150px] '>People-community</a></li>
                                    <li><a className='w-[150px] ' >Place-Venues</a></li>
                                    <li><a className='w-[150px] ' >Programs-Events</a></li>
                                    <li><a className='w-[150px] ' >Product-Store</a></li>
                                    <li><a className='w-[150px] '>Blogs</a></li>
                                </ul>
                                </div>
                            </details>
                        </li>
                        <li>
                            <div className='flex gap2  '  >
                            <img src={hobbieslogo} alt="" className='h-[20px] w-[20px] ' /> <a>Hobbies</a>
                            </div>
                            </li>
                    </ul>
                    <div className='flex gap-4 ml-12 ' >
                <div>
                    <img src={bookmarklogo} alt="" className='h-[30px] w-[30px]   ' />
                </div>
                <div>
                    <img src={notificationlogo} alt="" className='h-[30px] w-[30px]   ' />
                </div>
                <div>
                    <img src={product} alt="" className='h-[30px] w-[30px]   ' />
                </div>
                </div>
                </div>
                  
                <div className="navbar-end ">
                    <a className=" border border-indigo-300 rounded-lg mr-3 md:mr-20 on hover:bg-purple-500 hover:text-white font-bold transition-all duration-200 px-5 ease-in-out py-1 md:px-5  text-indigo-500 cursor-pointer  ">Sign in</a>
                </div>
            </div>
    </header>
  );
}

export default Header;
