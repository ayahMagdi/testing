import React, { useState } from 'react'

const Homepage = () => {
  
    const [show , setShow] = useState(true)

    setTimeout(() => {setShow(false)} , 3000)


  return (
    <div>
        <div 
          className={`${!show ? 'hidden' : ''} transition-all fixed top-0 right-0 w-1/4 p-4 border border-green-400 rounded-lg bg-green-50 m-4 shadow-md text-gray-700`}>
           <span className='font-bold text-lg mr-1 uppercase'>نجح:</span> تم تسجيل الدخول!
       </div>
    </div>
  )
}

export default Homepage