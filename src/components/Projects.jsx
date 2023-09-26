import React from 'react';
import NavBar from './NavBar';
import { useTheme } from './ThemeContext';
import projects from './data/project';

function Project() {
  const { isLightMode, bgColorClass, textClass, bgCrad } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex justify-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">Projects</h1>
            <div className="grid gap-10 md:grid-cols-3 mb-6">
              {projects.map((val, idx) => (
                <div className={`block max-w-sm p-6 rounded-lg shadow ${bgCrad}`} key={idx}>
                  <img className='rounded-xl w-max' src={val.imgpj} alt="" />
                  <h3 className='text-center text-2xl my-3 font-semibold'>{val.namepj}</h3>
                  <ul className='list-disc'>
                    <li className='py-2'>{val.descriptpj_1}</li>
                    <li className='py-2'>{val.descriptpj_2}</li>
                    {val.descriptpj_3 && (
                    <li className='py-2'>{val.descriptpj_3}</li>
                    )}
                  </ul>
                  <div className='flex mt-4 justify-center'>
                    <a href={val.github} target="_blank">
                      <button className='border border-white font-medium rounded-lg focus:ring-4 focus:ring-gray-200 text-sm px-5 py-2.5 mr-2 mb-2'>Github</button>
                    </a>
                    {val.live && (
                      <a href={val.live} target="_blank" rel="noopener noreferrer">
                        <button className='border border-white font-medium rounded-lg focus:ring-4 focus:ring-gray-200 text-sm px-5 py-2.5 mr-2 mb-2'>Live</button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
