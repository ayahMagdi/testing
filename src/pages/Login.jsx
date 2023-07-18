import logoImg from '../assets/logo.jpg'
import Form from '../components/Form'

const Login = ({getUser}) => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden'>
        <div className="flex justify-center items-center text-center">
            <Form getUser={getUser} />
        </div>
        <div className='hidden lg:flex bg-white justify-center items-center relative'>
          <div className='absolute w-full h-full bg-main rounded-full scale-[1.3] z-1 -left-24'></div>
          <div className='z-2 relative flex justify-center items-center flex-col'>
            <img src={logoImg} alt='logo' className='w-2/4' />
            <h2 className="text-6xl font-bold text-white text-center mt-4">Logo</h2>
          </div>
        </div>
    </div>
  )
}

export default Login