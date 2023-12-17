import React from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight , faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const Buttons = ({urlAdd, title , addState , cancelState , branch}) => {
    const navigate = useNavigate();
    const locatin = useLocation()
    const initial_url = locatin.pathname.split('/')

    const handleAdd = (e) => {
        localStorage.setItem('branch' , branch)
    }
    
  return (
    <div className='flex justify-start gap-4 my-5'>
        <Link to={urlAdd} onClick={handleAdd}>
            <div className={`bg-main text-white rounded-md text-center py-4 cursor-pointer w-32`}>
                <FontAwesomeIcon icon={faSquarePlus} />
                <h3 className='mt-1'>{title}</h3>
            </div>
        </Link>
        <button onClick={() => navigate(`/${initial_url.slice(1 , -1).join('/')}`)}>
            <div className={`bg-white border-2 rounded-md text-center py-4 cursor-pointer w-32 border-main text-main`}>
                <FontAwesomeIcon icon={faArrowTurnRight} className='text-sm' />
                <h3 className='mt-1'>رجوع</h3>
            </div>
        </button>
    </div>
  )
}

export default Buttons