import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const Goback = () => {

    const navigate = useNavigate();

  return (
    <div className='fixed bg-gradient-to-l from-slate-500 to-blue-600 rounded-full w-16 hover:w-36 transition-all h-16 bottom-3 left-14 cursor-pointer p-2 group' onClick={() => navigate(-1)}>
          <div className='rounded-full p-2 shadow-lg absolute left-2 bg-gradient-to-l from-slate-400 to-blue-600 w-12 h-12 flex justify-center items-center'>
            <FontAwesomeIcon icon={faAngleDoubleLeft} className='text-white text-lg' />
          </div>
          <div className='text-white p-2 text-lg absolute top-0 right-2 opacity-0 w-full h-full flex items-center group-hover:opacity-100 delay-30 transition-opacity'>رجوع</div>
      </div>
  )
}

export default Goback