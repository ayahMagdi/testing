import { faBoxesStacked, faChartColumn, faChartLine, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useEffect, useRef } from 'react'
import BestSellers from './BestSellers'
import Statistic from './Statistic';
// import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-annotation';
// import { Pie, PolarArea } from 'react-chartjs-2';
import { Data } from './handlechart/Data';
import { useStateValue } from '../context/stateProvider';
import { useEffect, useState } from 'react';

const Statistics = () => {

    const { stores , clientBalance } = useStateValue();
    const [mostWantedItems, setMostWantedItems] = useState([]);
    const [clients, setClients] = useState([]);
    const [progressBarsItems, setProgressBarsItems] = useState([]);
    const [progressBarsClients, setProgressBarsClients] = useState([]);

    const tableColors = [
      {
        progressBg: '#5047cf40',
        progress: '#606ae4eb',
        percentageBg: '#1846cd17',
      },
      {
        progressBg: '#f299ec87',
        progress: '#cd18c0eb',
        percentageBg: '#cd18c017',
      },
      {
        progressBg: '#e99a4b4a',
        progress: '#e99a4beb',
        percentageBg: '#e2862a3b'
      },
      {
        progressBg: '#9fc8ef4f',
        progress: '#a2d2ff',
        percentageBg: '#a2d2ff38',
      },
      {
        progressBg: '#ffafcc4f',
        progress: '#ffafcc',
        percentageBg: '#ffafcc5c'
      },
    ]
  
    useEffect(() => {
      const getFirstItem = stores?.reduce((cur, acc) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getSecondItem = stores?.filter(e => e !== getFirstItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getThirdItem = stores?.filter(e => e !== getFirstItem && e !== getSecondItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getForthItem = stores?.filter(e => e !== getFirstItem && e !== getSecondItem && e !== getThirdItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getFirstClient = clientBalance?.reduce((cur, acc) => parseInt(acc.total) > parseInt(cur.total) ? acc : cur)
      const getSecondClient = clientBalance?.filter(e => e !== getFirstClient).reduce((acc, cur) => parseInt(acc.total) > parseInt(cur.total) ? acc : cur)
      const getThirdClient = clientBalance?.filter(e => e !== getFirstClient && e !== getSecondClient).reduce((acc, cur) => parseInt(acc.total) > parseInt(cur.total) ? acc : cur)
      const getForthClient = clientBalance?.filter(e => e !== getFirstClient && e !== getSecondClient && e !== getThirdClient).reduce((acc, cur) => parseInt(acc.total) > parseInt(cur.total) ? acc : cur)
      
       setMostWantedItems([{...getFirstItem} , {...getSecondItem} , {...getThirdItem} , {...getForthItem} ])
       setClients([{...getFirstClient} , {...getSecondClient} , {...getThirdClient} , {...getForthClient} ])
  
      const productSales = [getFirstItem?.soldqty, getSecondItem?.soldqty, getThirdItem?.soldqty , getForthItem?.soldqty];
      const totalSales = productSales?.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
      const cleintOrders = [getFirstClient?.total, getSecondClient?.total, getThirdClient?.total ,  getForthClient?.total ];
      const totalOrders = cleintOrders?.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
  
      const productPercentages = productSales.map((sales) => (sales / totalSales) * 100);
      const ClientPercentages = cleintOrders.map((sales) => (sales / totalOrders) * 100);
  
      const progressBarData = [
        { id: 1, mainValue: productPercentages[0] || 0, progress: 0 },
        { id: 2, mainValue: productPercentages[1] || 0, progress: 0 },
        { id: 3, mainValue: productPercentages[2] || 0, progress: 0 },
        { id: 4, mainValue: productPercentages[3] || 0, progress: 0 },
      ];
      const progressBarDataOrders = [
        { id: 1, mainValue: ClientPercentages[0] || 0, progress: 0 },
        { id: 2, mainValue: ClientPercentages[1] || 0, progress: 0 },
        { id: 3, mainValue: ClientPercentages[2] || 0, progress: 0 },
        { id: 4, mainValue: ClientPercentages[3] || 0, progress: 0 },
      ];
      
      setProgressBarsItems(progressBarData);
      setProgressBarsClients(progressBarDataOrders);
      
      const interval = setInterval(() => {
        setProgressBarsItems((prevProgressBars) =>
          prevProgressBars.map((bar) => {
            const step = bar.mainValue / 100;
            const newProgress = bar.progress + step;
      
            if (newProgress >= bar.mainValue) {
              clearInterval(interval);
              return { ...bar, progress: bar.mainValue };
            }
            return { ...bar, progress: newProgress };
          })
        );
        setProgressBarsClients((prevProgressBars) =>
          prevProgressBars.map((bar) => {
            const step = bar.mainValue / 100;
            const newProgress = bar.progress + step;
      
            if (newProgress >= bar.mainValue) {
              clearInterval(interval);
              return { ...bar, progress: bar.mainValue };
            }
            return { ...bar, progress: newProgress };
          })
        );
      }, 10);
  
      return () => clearInterval(interval);
    }, [stores , clientBalance]);

  return (
    <div>
        <div className='mb-5'>
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
                        //  #fae0e1
                        bg='bg-[#f8ddde] shadow-[0_0_35px_0px_rgba(229,127,131,.2)]'
                        altBg='bg-[#ffcbcf]'
                />
                 <Statistic 
                        icon={faChartColumn}
                        endCount={50}
                        title='اقل المنتجات مبيعا'
                        // #a4ebf9
                        bg='bg-[#89e0f2] shadow-[0_0_35px_0px_rgba(65,213,244,.2)]'
                        altBg='bg-[#48cae4]'
                />
            </div>
        </div>
        <div className='flex justify-between items-center gap-5'>
            <BestSellers title='المنتجات الاكثر طلبا' rowName='المنتج' mostWantedItems={mostWantedItems} tableColors={tableColors} progressBars={progressBarsItems} />
            <BestSellers title='العملاء المميزين' rowName='العميل' mostWantedItems={clients} tableColors={tableColors} progressBars={progressBarsClients} />
            {/* <div className='w-2/4 h-72 bg-white rounded-3xl shadow-[0_0px_71px_2px_rgba(0,0,0,.1)] -mt-8 z-10 flex justify-around items-center pb-5'>
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
            </div> */}
        </div>
    </div>
  )
}

export default Statistics