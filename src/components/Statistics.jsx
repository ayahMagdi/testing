import { faBoxesStacked, faChartColumn, faChartLine, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import BestSellers from './BestSellers'
import Statistic from './Statistic';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-annotation';
import { Pie, PolarArea } from 'react-chartjs-2';
import { Data } from './handlechart/Data';

const Statistics = () => {

    const labels = ['السبت', 'الاحد', 'الاثنين', 'الثلاثاء'];

    
    const dataPie = {
    labels,
    datasets: [
        {
        label: 'الاسبوع الحالي',
        data: Data.map((data) => data.userGain),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'الاسبوع الماضي',
        data: Data.map((data) => data.userGain),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
        label: 'الاسبوع الماضي',
        data: Data.map((data) => data.userGain),
        backgroundColor: '#619bff',
        },
        {
        label: 'الاسبوع الماضي',
        data: Data.map((data) => data.userGain),
        backgroundColor: '#ff7f8b',
        },
    ],
    };

    const dataPieTwo = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            position: 'left',
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div>
        <div className='mb-5'>
            {/* <div>
                <h2 className='font-bold text-2xl'>احصائيات اليوم</h2>
                <h3 className='text-gray-600 text-sm'>تلخيص الاحصائيات</h3>
            </div> */}
            <div className='mt-2 grid grid-cols-5 gap-4'>
                <Statistic 
                        icon={faBoxesStacked}
                        endCount={100}
                        title='عدد الاصناف'
                        bg='bg-[#619bff] shadow-[0_0_35px_0px_rgba(97,155,255,.2)]'
                        altBg='bg-[#9ffea8]'
                />
                 <Statistic 
                        icon={faUserPlus}
                        endCount={18}
                        title='عدد الموردين'
                        bg='bg-[#4c4bac] shadow-[0_0_35px_0px_rgba(76,75,172,.2)]'
                        altBg='bg-[#619bff]'
                />
                 <Statistic 
                        icon={faUserGroup}
                        endCount={30}
                        title='عدد العملاء'
                        bg='bg-[#ff7f8b] shadow-[0_0_35px_0px_rgba(255,127,139,.2)]'
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
            <div className='w-2/4 h-72 bg-white rounded-3xl shadow-[0_0px_71px_2px_rgba(0,0,0,.1)] -mt-8 z-10 flex justify-around items-center pb-5'>
            <PolarArea
                data={dataPieTwo}
                options={{
                    plugins: {
                    title: {
                        display: true,
                        // text: "Users Gained between 2016-2020"
                    },
                    legend: {
                        position: "bottom", // تحديد موضع التسميات بجوار بعضها البعض
                        labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        font: {
                            size: 14,
                        }
                        }
                    }
                    }
                }}
            />
            <Pie
        data={dataPie}
        options={{
            plugins: {
              title: {
                display: true,
              },
              legend: {
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  font: {
                    size: 14,
                  }
                }
              }
            }
          }}
      />
            </div>
        </div>
    </div>
  )
}

export default Statistics