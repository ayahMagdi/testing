import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationButton from './ConfirmationButton';

const SignOut = () => {
    
  const [show , setShow] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {setShow(() => !show)}
  const handleConfirm = () => {
            navigate('/')
        }
  const handleCancel = () => {setShow(() => false)}

  return (
    <div className='p-4 flex justify-end'>
      <div className='w-12 h-12 bg-[rgba(255,255,255,.3)] rounded-full flex justify-center transition-all items-center hover:bg-white'>
        <FontAwesomeIcon 
            icon={faSignOut} 
            className='rotate-180 text-white text-xl font-light cursor-pointer transition-all hover:text-main' 
            onClick={logOut}
        />
      </div>
        {/* <h2>تسجيل الخروج </h2> */}
        {show && <ConfirmationButton title='هل تريد تسجيل الخروج؟' confirm={handleConfirm} cancel={handleCancel} />}
    </div>
  )
}

export default SignOut