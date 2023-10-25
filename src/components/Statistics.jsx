import { faBoxesStacked, faChartColumn, faChartLine, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BestSellers from './BestSellers'
import Statistic from './Statistic';

const Statistics = () => {
  return (
    <div>
        <div className='mb-10'>
            <div>
                <h2 className='font-bold text-2xl'>مبيعات اليوم</h2>
                <h3 className='text-gray-600 text-sm'>تلخيص المبيعات</h3>
            </div>
            <div className='mt-4 grid grid-cols-5 gap-5'>
                <Statistic 
                        icon={faBoxesStacked}
                        endCount={100}
                        title='عدد الاصناف'
                        bg='bg-[#c6fbcb]'
                        altBg='bg-[#9ffea8]'
                />
                 <Statistic 
                        icon={faUserPlus}
                        endCount={18}
                        title='عدد الموردين'
                        bg='bg-[#a6f4e3]'
                        altBg='bg-[#7ff0d8]'
                />
                 <Statistic 
                        icon={faUserGroup}
                        endCount={30}
                        title='عدد العملاء'
                        bg='bg-[#ddd0f0]'
                        altBg='bg-[#cfbaf0]'
                />
                 <Statistic 
                        icon={faChartLine}
                        endCount={500}
                        title='اكثر المنتجات مبيعا'
                        bg='bg-[#fae0e1]'
                        altBg='bg-[#ffcbcf]'
                />
                 <Statistic 
                        icon={faChartColumn}
                        endCount={50}
                        title='اقل المنتجات مبيعا'
                        bg='bg-[#a4ebf9]'
                        altBg='bg-[#48cae4]'
                />
            </div>
        </div>
        <div className='flex justify-between items-center gap-5'>
            <BestSellers />
            <BestSellers />
        </div>
    </div>
  )
}

export default Statistics