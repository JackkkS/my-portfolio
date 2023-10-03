import React from 'react'
import NavBar from './NavBar'
import '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from './ThemeContext';

//Components
import Academy from './Academy';

function Education() {

  const { isLightMode ,bgColorClass, textClass, bgCrad } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex justifly-center font-mono ${isLightMode}? ${bgColorClass} ${textClass}`}>
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 text-center">Education</h1>
            <div className="cursor-pointer">
              <Timeline position="alternate-reverse">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className={`p-6 rounded-lg font-mono ${bgCrad}`}>
                      <Academy level="University" title="Rajamangala University of Technology Krungthep." major="Information And Technology" gpa="3.06" from="2019" to="2023"/>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className={`p-6 rounded-lg font-mono ${bgCrad}`}>
                      <Academy level="High School" title="Samutprakarn School" gpa="3.04" from="2016" to="2019"/>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education