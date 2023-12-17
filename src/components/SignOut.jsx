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
    <div>
      <div className='flex cursor-pointer gap-3 py-[6px] px-6 font-bold items-center' onClick={logOut}>
        <div>
          <FontAwesomeIcon 
              icon={faSignOut} 
              className='rotate-180 text-white text-xl font-light' 
          />
        </div>
        <h2>تسجيل الخروج </h2>
      </div>
      {show && <ConfirmationButton title='هل تريد تسجيل الخروج؟' confirm={handleConfirm} cancel={handleCancel} />}
    </div>
  )
}

export default SignOut