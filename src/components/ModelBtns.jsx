
const ModelBtns = ({handlecancel , title , cancelTitle}) => {
  return (
    <div className='flex justify-center mt-10 gap-6'>
        <button 
              className='bg-main text-lg text-white rounded-md w-60 py-3 cursor-pointer'
              form='my-form' type="submit"
        >
           {title}
        </button>
        <button 
          className='text-red-500 text-lg border-2 border-red-500 rounded-md w-60 py-3 cursor-pointer'
          onClick={handlecancel}
        >
            {cancelTitle}
        </button>
   </div>
  )
}

export default ModelBtns