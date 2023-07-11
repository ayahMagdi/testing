import logoImg from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const userRef = useRef()
  const navigate = useNavigate();
  const [success , setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  } , [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(true)
    navigate('/homepage')
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className="flex justify-center items-center text-center">
            <form onSubmit={handleSubmit} className='px-4 w-8/12'>
                <h2 className="text-main font-bold text-4xl mb-2">مرحبا بكم في المتجر الذكي</h2>
                <h3 className="text-gray-400 text-lg mb-6">سعداء برؤيتكم مرة اخري</h3>
                <div className="mb-4 relative">
                    <div className="text-main font-lg absolute top-4 px-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input 
                        name="username" 
                        type="text"
                        ref={userRef} 
                        placeholder="اسم المستخدم" 
                        autoComplete='off'
                        required
                        className="bg-gray-200 w-full p-4 px-10 rounded-lg focus:outline-main" 
                    />
                </div>
                <div className="mb-2 relative">
                    <div className="text-main font-lg absolute top-4 px-4">
                       <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input 
                        name="password" 
                        type="password" 
                        required
                        placeholder="كلمة المرور" 
                        className="bg-gray-200 w-full p-4 pr-10 rounded-lg focus:outline-main" 
                    />
                </div>
                <h3 className='text-gray-400 mb-6 text-right cursor-pointer'>هل نسيت كلمة المرور؟</h3>
                <button className="bg-main w-full p-4 rounded-lg text-white text-lg hover:bg-hover transition-all">
                    تسجيل الدخول
                </button>
            </form>
        </div>
        <div className='hidden lg:flex bg-black justify-center items-center'>
          <div>
            <img src={logoImg} alt='logo' />
            <h2 className="text-6xl font-bold text-main text-center mt-4">Logo</h2>
          </div>
        </div>
    </div>
  )
}

export default Login