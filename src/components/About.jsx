import React from 'react'
import NavBar from './NavBar'
import { useTheme } from './ThemeContext';

function About() {

  const { isLightMode ,bgColorClass, textClass } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex justifly-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className='flex justify-center items-start'>
                <img className='w-80 max-w-md md:max-w-full rounded-full drop-shadow-2xl' src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.15752-9/383913904_1557569391649160_6548097130497018787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE4RXfHWLakHoIUrJ1TH3lEfcowSCH7gR19yjBIIfuBHcExOuXn2yKMK9aFFSNVunGUD4T2QOZK6SKRpi5bUuUQ&_nc_ohc=FJ2ee1QSiegAX8TkOBJ&_nc_ht=scontent.fbkk2-4.fna&oh=03_AdS7Ur-3W19I7-I8dQyyVPKEJQXeaQMSXor-tu8_Ef4LSA&oe=6539D6F7" alt="" />
              </div>
              <div>
                <h2 className='text-2xl md:text-3xl py-2 md:py-5'>Hello, this is about me</h2>
                <ul className="text-lg md:text-xl py-2 md:py-5 space-y-2 md:space-y-4">
                  <li><strong>Name :</strong> Punyapon Meekeaw</li>
                  <li><strong>Nick name :</strong> Jack</li>
                  <li><strong>Address :</strong> 32 Soi 7 Raphael TaiBan Road, Sub-district Paknam, District Mueang Samutparkarn, Samutprakarn 10270 Thailand</li>
                  <li><strong>Birthday :</strong> 25 September 2000</li>
                  <li><strong>Grade :</strong> 3.05</li>
                  <li><strong>Favorite :</strong> I enjoy coding, and in my free time, I like to play sports and music.</li>
                  <li className="flex">
                    <strong>Certificates:</strong>
                    <ul className="ml-4 space-y-2">
                      <li>IC3 GS5 Living Online (Office 2016)</li>
                      <li>IC3 GS5 Key Applications (Office 2016)</li>
                      <li>TPQI IC3 GS5 Computing Fundamentals (Office 2016)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About