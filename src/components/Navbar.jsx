import logoImg from '../assets/logo2.jpg'
import Search from './Search'
import SignOut from './SignOut'

const Navbar = ({user}) => {
  
  return (
    <nav className='bg-white py-6'>
       <div className='h-20 flex justify-between items-center gap-12'>
            <div>
                <img src={logoImg} alt='logo' className='h-20' />
            </div>
            <div className='shadow-[0px_0px_25px_0px_rgba(0,0,0,.1)] py-3 px-5 rounded-md w-11/12 flex justify-between items-center'>
            <Search />
            <SignOut user={user} />
            </div>
       </div>
    </nav>
  )
}

export default Navbar