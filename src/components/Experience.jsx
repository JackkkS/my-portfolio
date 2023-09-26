import React from 'react'
import NavBar from './NavBar'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import experience from './data/experience';
import { useTheme } from './ThemeContext';

function Experience() {

  const { isLightMode, bgColorClass, textClass, bgCrad } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex justifly-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">Experience</h1>
              <div className="cursor-pointer">
                <div className="hidden sm:block">
                <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent>
                    {experience.map((e, idx) => (
                      <div key={idx} className='bg-sky-600 text-white flex w-80 p-6 rounded-lg font-bold border border-white font-mono'>
                        <h3>
                          {e.startdate} - {e.enddate}
                        </h3>
                      </div>
                    ))}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    {experience.map((e, idx) => (
                      <div key={idx} className={`ml-10 rounded-lg p-6 border border-white font-mono ${bgCrad}`}>
                        <h3 className='text-3xl font-bold py-3'>{e.work}</h3>
                        <div className="flex">
                          <h3 className='text-blue-500 text-xl font-bold'>{e.companyname}</h3>
                          <h3 className="pl-3 text-base py-0.5 text-lg">&#8226; {e.typework}</h3>
                        </div>
                        <ul className="list-disc ml-5">
                          <li className="py-3">{e.scope1}</li>
                          <li >{e.scope2}</li>
                        </ul>
                      </div>
                    ))}
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
                </div>
             
              <div className="md:hidden">
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    {experience.map((e, idx) => (
                      <div key={idx} className='bg-sky-600 text-white w-full p-6 rounded-lg font-bold border border-white font-mono'>
                        <h3>
                          {e.startdate} - {e.enddate}
                        </h3>
                      </div>
                    ))}

                    {experience.map((e, idx) => (
                      <div key={idx} className={`mt-5 rounded-lg p-6 border border-white font-mono ${bgCrad}`}>
                        <h3 className='text-3xl font-bold py-3'>{e.work}</h3>
                        <div className="flex">
                          <h3 className='text-blue-500 text-xl font-bold'>{e.companyname}</h3>
                          <h3 className="pl-3 text-base py-0.5 text-lg">&#8226; {e.typework}</h3>
                        </div>
                        <ul className="list-disc ml-5">
                          <li className="py-3">{e.scope1}</li>
                          <li >{e.scope2}</li>
                        </ul>
                      </div>
                    ))}
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience