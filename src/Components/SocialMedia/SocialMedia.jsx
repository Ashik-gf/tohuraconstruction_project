import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";



const SocialMedia = () => {
  return (
    <div className=' flex justify-center items-center my-4 gap-3 px-3'>
        {/* Icpn */}
        <div className=' flex gap-2'>
            <p className=' text-2xl border-2 border-black hover:bg-purple-600 rounded-lg hover:text-white hover:p-2 p-2'><FaFacebook /> </p>
            <p className=' text-2xl border-2 border-black hover:bg-purple-600 rounded-lg hover:text-white hover:p-2 p-2'><FaTwitter /> </p>
            <p className=' text-2xl border-2 border-black hover:bg-purple-600 rounded-lg hover:text-white hover:p-2 p-2'><FiInstagram /> </p>
            <p className=' text-2xl border-2 border-black hover:bg-purple-600 rounded-lg hover:text-white hover:p-2 p-2'><FaLinkedinIn /> </p>
        </div>
        {/* Slider */}
        <div className=' h-[4px] w-[400px] bg-gray-800'>
         
        </div>
    </div>
  )
}

export default SocialMedia