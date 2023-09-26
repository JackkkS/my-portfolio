import React from 'react'
import { FaGithub,FaFacebook, } from "react-icons/fa6";
import { CgMail } from 'react-icons/Cg';

function Social({bgColorClass, textClass }) {
  return (
    <div className="social">
        <div className={`flex text-6xl p-10 justify-center mt-20 ${bgColorClass} ${textClass}`}>
            <a href="https://www.facebook.com/profile.php?id=100003676017379" target="_blank" className='px-3'><i><FaFacebook className="icon hover:text-gray-500" /></i></a>
            <a href="https://github.com/JackkkS" target="_blank" className='px-3'><i><FaGithub className="icon hover:text-gray-500" /></i></a>
            <a href="" target="_blank" className='px-3'><i><CgMail className="icon hover:text-gray-500" /></i></a>
        </div>
    </div>
  )
}

export default Social