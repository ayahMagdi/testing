import logoImg from '../assets/logo.jpg'
import Form from '../components/Form'

const Login = ({getUser}) => {

  return (
    <div className='flex justify-between h-screen overflow-hidden'>
        <div className="flex justify-center items-center text-center w-7/12">
            <Form getUser={getUser} />
        </div>
        <div className='hidden lg:flex bg-white justify-center items-center relative w-5/12'>
          <div className='absolute w-full h-full bg-main rounded-full scale-x-[1.7] scale-y-[1.4] rotate-90 z-1 -left-36'></div>
          <div className='z-2 relative flex justify-center items-center flex-col'>
            <img src={logoImg} alt='logo' className='w-2/4' />
            <h2 className="text-6xl font-bold text-white text-center mt-4">Logo</h2>
          </div>
        </div>
    </div>
  )
}

export default Login