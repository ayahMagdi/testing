import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Category = ({icon ,title}) => {
  return (
    <div className='flex justify-center items-center bg-main rounded-md text-white'>
        <div className='text-center py-9 px-6'>
            <FontAwesomeIcon icon={icon} className='text-lg' />
            <h3 className='text-lg pt-2'>{title}</h3>
        </div>
    </div>
  )
}

export default Category