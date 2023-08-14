
const ModelBtns = ({handlecancel , title , cancelTitle ,btnStyle , margin ,handleRegistration ,form}) => {
  return (
    <div className={`flex justify-center gap-6 ${margin}`}>
        <button 
              className={`bg-main text-white rounded-md cursor-pointer ${btnStyle}`}
              form={form} type="submit"
              onClick={handleRegistration}
        >
           {title}
        </button>
        <button 
          className={`text-red-500 border-2 border-red-500 rounded-md cursor-pointer ${btnStyle}`}
          onClick={handlecancel}
        >
            {cancelTitle}
        </button>
   </div>
  )
}

export default ModelBtns