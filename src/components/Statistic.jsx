import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CountUp from 'react-countup';

const Statistic = ({icon ,endCount ,title,bg ,altBg}) => {
  return (
    <div className={`rounded-md p-4 py-6 ${bg}`}>
        <div className={`p-2 text-white text-sm rounded-full w-10 h-10 flex justify-center items-center ${altBg}`}>
        <FontAwesomeIcon icon={icon} />
        </div>
        <div className='p-2'>
            <h3 className='text-2xl font-semibold '><CountUp start={0} end={endCount} duration={2.5} /></h3>
            <h4 className='font-semibold'>{title}</h4>
            <span className='text-xs text-main'>0.5% زيادة من الامس الي اليوم</span>
        </div>
    </div>
  )
}

export default Statistic