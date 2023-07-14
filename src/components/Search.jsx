import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='relative w-10/12'>
        <input 
            className='w-full p-4 border border-main rounded-md focus:outline-none' 
            type='search' 
            placeholder='ابحث برقم الطلب , اسم المنتج , اسم الموظف' 
        />
        <div className='absolute cursor-pointer left-0 w-20 top-0 bg-main h-full text-2xl rounded-l text-white flex justify-center items-center'>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    </div>
  )
}

export default Search