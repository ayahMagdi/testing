import React from 'react'
import Category from './Category'
import { faBusinessTime, faEdit, faMoneyCheckAlt, faSackDollar, faStore } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
    <div className='bg-white grid grid-cols-5 gap-5 justify-between items-center mt-4 cursor-pointer'>
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faMoneyCheckAlt} title='الحسابات' />
        <Category icon={faStore} title='المخزن' />
        <Category icon={faSackDollar} title='المبيعات' />
        <Category icon={faBusinessTime} title='الواردات' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
        <Category icon={faEdit} title='اضافة منتج جديد' />
    </div>
  )
}

export default Content