// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CountUp from 'react-countup';
// import imgBg from '../assets/bgblue.png'

const Statistic = ({icon ,endCount ,title,bg ,altBg}) => {
  return (
    <div className={`rounded-[25px] p-4 ${bg} bg-hero-pattern bg-no-repeat bg-contain bg-center`}>
        <div className='p-2 text-white'>
            <h3 className='text-2xl font-semibold '><CountUp start={0} end={endCount} duration={2.5} /></h3>
            <h4 className='font-semibold'>{title}</h4>
            {/* <span className='text-xs text-main'>0.5% زيادة من الامس الي اليوم</span> */}
        </div>
    </div>
  )
}

export default Statistic