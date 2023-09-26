import React from 'react'

function Academy({level, title, gpa, from, to }) {
  return (
    <div>
        <div>
            <div className='text-lg'>
                <h3 className='py-3'>{level}</h3>
                <h4 className='text-xl font-bold py-3'>{title}</h4>
                <ul className='py-2'>
                   <li>GPA : {gpa}</li>
                   <li>From : {from}</li>
                   <li>TO : {to}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Academy