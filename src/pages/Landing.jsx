import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { faEdit, faStore } from "@fortawesome/free-solid-svg-icons"
import Statistics from "../components/Statistics"
import { Data } from "../components/handlechart/Data"
import BarChart from "../components/handlechart/BarChart"

const Landing = () => {

//   const data = {
//     labels: ['Red', 'Orange', 'Blue'],
//     // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//     datasets: [
//         {
//           label: 'Popularity of colours',
//           data: [55, 23, 96],
//           // you can set indiviual colors for each bar
//           backgroundColor: [
//             'rgba(255, 255, 255, 0.6)',
//             'rgba(255, 255, 255, 0.6)',
//             'rgba(255, 255, 255, 0.6)'
//           ],
//           borderWidth: 1,
//         }
//     ]
// }

// const [chartData, setChartData] = useState({
//   labels: Data.map((data) => data.year), 
//   datasets: [
//     {
//       label: "Users Gained ",
//       data: Data.map((data) => data.userGain),
//       backgroundColor: [
//         "rgba(75,192,192,1)",
//         "&quot;#ecf0f1",
//         "#50AF95",
//         "#f3ba2f",
//         "#2a71d0"
//       ],
//       borderColor: "black",
//       borderWidth: 2
//     }
//   ]
// });

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
           <Sidebar />
        </div>
        <div className="w-4/5 pl-8">
          <div className="">

          <BarChart />
          </div>
           {/* <div className="w-full mt-5 mb-3 text-white text-lg flex items-center justify-start p-4 border rounded-md bg-gradient-to-l from-main to-[rgb(98,172,232)]">
             <div className=" overflow-hidden whitespace-nowrap w-full">
               <p className="animate-[wiggle_10s_linear_infinite] text-3xl relative inline-block font-extrabold">مرحبا بكم في المتجر الذكي</p>
             </div>
           </div> */}
           <Statistics />
        </div>
      </div>
    </div>
  )
}

export default Landing