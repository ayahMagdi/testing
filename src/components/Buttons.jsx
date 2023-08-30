import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight , faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const Buttons = ({urlAdd, title}) => {
    const navigate = useNavigate();

  return (
    <div className='my-6  flex justify-start gap-6'>
        <Link to={urlAdd}>
            <div className={`bg-main text-white rounded-md text-center py-4 cursor-pointer w-40`}>
                <FontAwesomeIcon icon={faSquarePlus} className='text-lg' />
                <h3 className='mt-1'>{title}</h3>
            </div>
        </Link>
        <button onClick={() => navigate(-1)}>
            <div className={`bg-white border-2 rounded-md text-center py-4 cursor-pointer w-40 border-main text-main`}>
                <FontAwesomeIcon icon={faArrowTurnRight} className='text-lg' />
                <h3 className='mt-1'>رجوع</h3>
            </div>
        </button>
    </div>
  )
}

export default Buttons