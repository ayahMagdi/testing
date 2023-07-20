
const ModelBtns = ({handlecancel , title}) => {
  return (
    <div className='flex justify-center mt-10 gap-6'>
        <button 
              className='bg-main text-lg text-white rounded-md w-60 py-4 cursor-pointer'
              form='my-form' type="submit"
        >
           {title}
        </button>
        <button 
          className='text-red-500 text-lg border-2 border-red-500 rounded-md w-60 py-4 cursor-pointer'
          onClick={handlecancel}
        >
            الغاء
        </button>
   </div>
  )
}

export default ModelBtns