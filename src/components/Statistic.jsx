import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CountUp from 'react-countup';
import imgBg from '../assets/bgblue.png'

const Statistic = ({icon ,endCount ,title,bg ,altBg}) => {
  return (
    <div className={`rounded-[25px] p-4 relative ${bg} bg-hero-pattern bg-no-repeat bg-contain bg-center`}>
      {/* <div className='absolute w-full h-full'>
           <img src={imgBg} alt='chart' className='h-full object-contain' />
      </div> */}
        {/* <div className={`p-2 text-white text-sm rounded-full w-10 h-10 flex justify-center items-center ${altBg} bg-[rgba(255,255,255,.3)]`}>
        <FontAwesomeIcon icon={icon} />
        </div> */}
        <div className='p-2 text-white'>
            <h3 className='text-2xl font-semibold '><CountUp start={0} end={endCount} duration={2.5} /></h3>
            <h4 className='font-semibold'>{title}</h4>
            {/* <span className='text-xs text-main'>0.5% زيادة من الامس الي اليوم</span> */}
        </div>
    </div>
  )
}

export default Statistic