import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/stateProvider';

const BestSellers = () => {
    const { stores } = useStateValue();
    const [mostWantedItems, setMostWantedItems] = useState([]);
    const [progressBars, setProgressBars] = useState([]);

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
    ]
  
    useEffect(() => {
      const getFirstItem = stores?.reduce((cur, acc) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getSecondItem = stores?.filter(e => e !== getFirstItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      const getThirdItem = stores?.filter(e => e !== getFirstItem && e !== getSecondItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      
       setMostWantedItems([{...getFirstItem} , {...getSecondItem} , {...getThirdItem}])
  
      const productSales = [getFirstItem?.soldqty, getSecondItem?.soldqty, getThirdItem?.soldqty];
      const totalSales = productSales?.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
  
      const productPercentages = productSales.map((sales) => (sales / totalSales) * 100);
  
      const progressBarData = [
        { id: 1, mainValue: productPercentages[0] || 0, progress: 0 },
        { id: 2, mainValue: productPercentages[1] || 0, progress: 0 },
        { id: 3, mainValue: productPercentages[2] || 0, progress: 0 },
      ];
      
      setProgressBars(progressBarData);
      
      const interval = setInterval(() => {
        setProgressBars((prevProgressBars) =>
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
    }, [stores]);
    
  return (
    <div className='w-2/4'>
        <h3 className='font-bold text-lg'>المنتجات الاكثر طلبا</h3>
        <table className="table-auto w-full text-center mt-3" style={{borderCollapse: 'collapse'}}>
                <thead className="text-gray-400">
                    <tr className='border-b border-slate-100'>
                        <th scope="col" className="px-6 py-3 text-sm">#</th>
                        <th scope="col" className="px-6 py-3 text-sm">اسم المنتج</th>
                        <th scope="col" className="px-6 py-3 text-sm">الطلبات</th>
                        <th scope="col" className="px-6 py-3 text-sm">البيع</th>
                    </tr>
                </thead>
                <tbody>
                  {mostWantedItems?.map((e , i) => (
                    <tr className='border-b border-slate-100' key={i}>
                      <td className="px-6 py-3 text-sm">0{i + 1}</td>
                      <td className="px-6 py-3 text-sm">{e.name}</td>
                      <td className="px-6 py-3 w-6/12">
                        <div className={`w-full bg-[${tableColors[i].progressBg}] rounded-full h-1 relative`}>
                            <div className={`bg-[${tableColors[i].progress}] h-1 rounded-full absolute left-0`} style={{width: `${progressBars[i]?.progress}%`}}></div>
                          </div>
                      </td>
                      <td className="px-6 py-3 text-sm">
                          <div className={`rounded-md border bg-[${tableColors[i].percentageBg}] border-[${tableColors[i].progress}] px-2 py-1`}>{Math.round(progressBars[i]?.progress)}%</div>
                      </td>
                    </tr>
                  ))}
                    {/* <tr className='border-b border-slate-100'>
                        <td className="px-6 py-3 text-sm">01</td>
                        <td className="px-6 py-3 text-sm"> 
                            لاب توب
                        </td>
                        <td className="px-6 py-3 w-6/12">
                           <div class="w-full bg-[#5047cf40] rounded-full h-1 relative">
                              <div class="bg-[#606ae4eb] h-1 rounded-full w-3/5 absolute left-0"></div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <div className='rounded-md border bg-[#1846cd17] border-[#606ae4eb] px-2 py-1'>45%</div>
                        </td>
                    </tr>
                    <tr className='border-b border-slate-100'>
                        <td className="px-6 py-3 text-sm">01</td>
                        <td className="px-6 py-3 text-sm"> 
                            لاب توب
                        </td>
                        <td className="px-6 py-3 w-6/12">
                           <div class="w-full bg-[#f299ec87] rounded-full h-1 relative">
                              <div class={`bg-[#cd18c0eb] h-1 rounded-full absolute left-0`} style={{width: `${progressBars[0]?.progress}%`}} ></div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <div className='rounded-md border bg-[#cd18c017] border-[#cd18c0eb] px-2 py-1'>{Math.round(progressBars[0]?.progress)}%</div>
                        </td>
                    </tr>
                    <tr className='border-b border-slate-100'>
                        <td className="px-6 py-3 text-sm">01</td>
                        <td className="px-6 py-3 text-sm"> 
                            لاب توب
                        </td>
                        <td className="px-6 py-3 w-6/12">
                           <div class="w-full bg-[#e99a4b4a] rounded-full h-1 relative">
                              <div class="bg-[#e99a4beb] h-1 rounded-full w-1/5 absolute left-0"></div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <div className='rounded-md border bg-[#e2862a3b] border-[#e99a4beb] px-2 py-1'>25%</div>
                        </td>
                    </tr> */}
                </tbody>
        </table>
    </div>
  )
}

export default BestSellers