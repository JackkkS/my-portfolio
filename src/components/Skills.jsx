import React from 'react'
import NavBar from './NavBar'
import skills from './data/skill'
import { useTheme } from './ThemeContext';

const lanAndDBSkills = skills.filter((skill) => {
  return skill.category === 'Programming Language' || skill.category === 'Database';
});const frameSkils = skills.filter((skill)=> skill.category === 'Framework')
const toots = skills.filter((skill)=> skill.category === 'Tools')


function Skills() {

  const { isLightMode ,bgColorClass, textClass } = useTheme();

  return (
    <div>
        <NavBar />
        <div className={`min-h-screen flex justifly-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">Skills</h1>
            <h2 className='text-2xl md:text-3xl text-center py-5'>This is my skills</h2>
            <h3 className='text-2xl md:text-3xl text-center py-14'>Languages & Databases</h3>
            <div className="flex justify-center">
              {lanAndDBSkills.map((sk, idx)=>(
                <div key={idx} className="text-center text-xl p-3">
                  <img  className="w-30 h-20 mb-4 cursor-pointer" src={sk.image} alt={sk.name} />
                  <h3>{sk.name}</h3>
                </div>
              ))}
            </div>
            <h3 className='text-2xl md:text-3xl text-center py-14'>Frameworks & Technologies</h3>
            <div className="flex justify-center">
              {frameSkils.map((sk, idx)=>(
                <div key={idx} className="text-center text-xl px-3">
                  <img className="w-30 h-20 mx-auto mb-4 cursor-pointer" src={sk.image} alt={sk.name} />
                  <h3>{sk.name}</h3>
                </div>
              ))}
            </div>
            <h3 className='text-2xl md:text-3xl text-center py-14'>Tools & Platforms</h3>
            <div className="flex justify-center">
              {toots.map((sk, idx)=>(
                <div key={idx} className="text-center pb-12 text-xl px-3">
                  <img className="w-30 h-20 mx-auto mb-4 cursor-pointer" src={sk.image} alt={sk.name} />
                  <h3>{sk.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills