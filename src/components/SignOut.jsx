import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationButton from './ConfirmationButton';

const SignOut = ({user}) => {
    
  const [show , setShow] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {setShow(() => !show)}
  const handleConfirm = () => {
            localStorage.clear()
            navigate('/')
        }
  const handleCancel = () => {setShow(() => false)}

  return (
    <div className='flex justify-center items-center gap-2'>
        <h2>مرحبا {user} ,</h2>
        <FontAwesomeIcon 
            icon={faSignOut} 
            className='rotate-180 text-main text-xl font-light cursor-pointer' 
            onClick={logOut}
        />
        {show && <ConfirmationButton title='هل تريد تسجيل الخروج؟' confirm={handleConfirm} cancel={handleCancel} />}
    </div>
  )
}

export default SignOut