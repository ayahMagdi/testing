import React from 'react'
import Category from './Category'
import { faBusinessTime, faEdit, faMoneyCheckAlt, faPeopleGroup, faSackDollar, faStore, faUsers } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
    <div className='bg-white grid grid-cols-5 gap-5 justify-between items-center mt-4 cursor-pointer'>
        <Category icon={faEdit} title='اضافة منتج جديد' url='/allproducts' />
        <Category icon={faUsers} title='الموردين' url='/allsuppliers' />
        <Category icon={faPeopleGroup} title='العملاء' url='/allclients' />
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
    </div>
  )
}

export default Content