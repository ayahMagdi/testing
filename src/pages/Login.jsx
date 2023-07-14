import logoImg from '../assets/logo.jpg'
import Form from '../components/Form'

const Login = ({getUser}) => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className="flex justify-center items-center text-center">
            <Form getUser={getUser} />
        </div>
        <div className='hidden lg:flex bg-dark justify-center items-center'>
          <div>
            <img src={logoImg} alt='logo' />
            <h2 className="text-6xl font-bold text-white text-center mt-4">Logo</h2>
          </div>
        </div>
    </div>
  )
}

export default Login