import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import { faEdit, faStore } from "@fortawesome/free-solid-svg-icons"
import Statistics from "../components/Statistics"
import { Data } from "../components/handlechart/Data"
import BarChart from "../components/handlechart/BarChart"
import axios from "axios";

const Landing = () => {

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
           <Statistics />
        </div>
      </div>
    </div>
  )
}

export default Landing