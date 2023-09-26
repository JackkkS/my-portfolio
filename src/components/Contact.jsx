import React from 'react'
import NavBar from './NavBar'
import { FaLine, FaFacebook, } from "react-icons/fa6";
import { CgMail } from 'react-icons/Cg';
import { BsTelephoneFill } from 'react-icons/bs'
import { useTheme } from './ThemeContext';


//Components
import Social from './Social'

function Contact() {

  const { isLightMode ,bgColorClass, textClass } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex justifly-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">Contact</h1>
            <div className="md:mx-40">
              <h2 className='text-3xl md:text-4xl text-start py-5'>Contact Me</h2>
              <div className="text-xl md:text-2xl">
                <ul>
                  <li className="flex items-center py-3">
                    <span>
                      <BsTelephoneFill className="icon hover:text-gray-500" />
                    </span>
                    <span className="ml-2">Tel. : 088-698-3582</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>
                      <CgMail className="icon hover:text-gray-500" />
                    </span>
                    <span className="ml-2">Email : punyapon43@gmail.com</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>
                      <FaFacebook className="icon hover:text-gray-500" />
                    </span>
                    <span className="ml-2">Facebook : Punyapon Meekeaw</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>
                      <FaLine className="icon hover:text-gray-500" />
                    </span>
                    <span className="ml-2">Line ID: jack2509p</span>
                  </li>
                </ul>
              </div>
            </div>
            <Social bgColorClass={bgColorClass} textClass={textClass} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact