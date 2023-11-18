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
      // const getFourItem = stores?.filter(e => e !== getFirstItem && e !== getSecondItem && e !== getThirdItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      // const getFiveItem = stores?.filter(e => e !== getFirstItem && e !== getSecondItem && e !== getThirdItem && e !== getFourItem).reduce((acc, cur) => parseInt(acc.soldqty) > parseInt(cur.soldqty) ? acc : cur)
      
       setMostWantedItems([{...getFirstItem} , {...getSecondItem} , {...getThirdItem} ])
  
      const productSales = [getFirstItem?.soldqty, getSecondItem?.soldqty, getThirdItem?.soldqty];
      const totalSales = productSales?.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
  
      const productPercentages = productSales.map((sales) => (sales / totalSales) * 100);
  
      const progressBarData = [
        { id: 1, mainValue: productPercentages[0] || 0, progress: 0 },
        { id: 2, mainValue: productPercentages[1] || 0, progress: 0 },
        { id: 3, mainValue: productPercentages[2] || 0, progress: 0 },
        // { id: 4, mainValue: productPercentages[3] || 0, progress: 0 },
        // { id: 5, mainValue: productPercentages[4] || 0, progress: 0 },
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
                  {mostWantedItems?.map((e, i) => (
                    <tr className="border-b border-slate-100 last-of-type:border-0" key={`item-${i}`}>
                      <td className="px-6 py-3 text-sm">{`0${i + 1}`}</td>
                      <td className="px-6 py-3 text-sm">{e.name}</td>
                      <td className="px-6 py-3 w-6/12">
                        <div className="w-full rounded-full h-1 relative" style={{ backgroundColor: tableColors[i].progressBg }}>
                          <div className="h-1 rounded-full absolute left-0" style={{ width: `${progressBars[i]?.progress}%`, backgroundColor: tableColors[i].progress }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm">
                        <div className="rounded-md border px-2 py-1" style={{ backgroundColor: tableColors[i].percentageBg, borderColor: tableColors[i].progress }}>{Math.round(progressBars[i]?.progress)}%</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
        </table>
    </div>
  )
}

export default BestSellers