import { faAdd, faArrowDown, faBoxesPacking, faBoxesStacked, faChartArea, faChartBar, faChevronDown, faChevronUp, faCircleXmark, faCoins, faEdit, faFileAlt, faFileInvoice, faFileLines, faFilePowerpoint, faFilter, faFingerprint, faGears, faGripLinesVertical, faHome, faList, faListDots, faMoneyCheck, faPhoneVolume, faPrint, faRemove, faStar, faStore, faStoreAlt, faStoreSlash, faTrash, faTrashAlt, faUserAltSlash, faUserCheck, faUserGroup, faUserPlus, faUsers, faUsersBetweenLines, faUsersCog, faUsersLine, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from '../assets/730d1b67.png'

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [activeBranch, setActiveBranch] = useState('');
    const [sidebarLinks , setSidebarLinks] = useState([
        {
            title: 'الرئيسية',
            link: '/landingpage',
            icon: faHome,
            active: 'home'
        },
        {
            title: 'المخزن',
            link: '/homepage/storepage/store',
            icon: faStore,
            active: 'store'
        },
        {
            title: 'الاصناف',
            link: '/homepage/storepage/allproducts',
            active: 'items',
            icon: faBoxesStacked,
            branches : [
                {
                    title: 'قائمة الاصناف',
                    active: 'itemsList',
                    link: '/homepage/storepage/allproducts',
                    icon: faList
                },
                {
                    title: 'اضافة صنف جديد',
                    active: 'addItem',
                    link: '/homepage/storepage/allproducts/addproduct',
                    icon: faAdd
                },
                {
                    title: 'تعديل صنف',
                    active: 'editItem',
                    link: '/homepage/storepage/allproducts',
                    icon: faEdit
                },
                {
                    title: 'حذف صنف',
                    active: 'deleteItem',
                    link: '/homepage/storepage/allproducts',
                    icon: faTrashAlt
                },
            ]
        },
        {
            title: 'الموردين',
            link: '',
            icon: faUsers,
            active: 'suppliers',
            branches : [
                {
                    title: 'قائمة الموردين',
                    active: 'suppliersList',
                    link: '/homepage/suppliers/allsuppliers',
                    icon: faUsersBetweenLines
                },
                {
                    title: 'اضافة مورد جديد',
                    active: 'addSupplier',
                    link: '/homepage/suppliers/allsuppliers/addSupplier',
                    icon: faUserPlus
                },
                {
                    title: 'نعديل مورد',
                    active: 'editSupplier',
                    link: '/homepage/suppliers/allsuppliers',
                    icon: faUserCheck
                },
                {
                    title: 'حذف مورد',
                    active: 'deleteSupplier',
                    link: '/homepage/suppliers/allsuppliers',
                    icon: faUserAltSlash
                },
            ]
        },
        {
            title: 'العملاء',
            link: '',
            icon: faUsersLine,
            active: 'clients',
            branches : [
                {
                    title: 'قائمة العملاء',
                    active: 'clinetsList',
                    link: '/homepage/clients/allclients',
                    icon: faUsersBetweenLines
                },
                {
                    title: 'اضافة عميل جديد',
                    active: 'addClient',
                    link: '/homepage/clients/allclients/addClient',
                    icon: faUserPlus
                },
                {
                    title: 'نعديل عميل',
                    active: 'editClient',
                    link: '/homepage/clients/allclients',
                    icon: faUserCheck
                },
                {
                    title: 'حذف عميل',
                    active: 'deleteClient',
                    link: '/homepage/clients/allclients',
                    icon: faUserAltSlash
                },
            ]
        },
        {
            title: 'فاتورة المشتريات',
            link: '/purchases',
            icon: faStar,
            active: 'purchases'
        },
        {
            title: 'فاتورة المبيعات',
            link: '/sales',
            icon: faChartArea,
            active: 'sales'
        },
        {
            title: 'بيانات المشتريات',
            link: '',
            icon: faFileAlt,
            active: 'purchasesInfo',
            branches : [
                {
                    title: 'عرض فواتير المشتريات',
                    active: 'purchasesList',
                    link: '/inwardbills',
                    icon: faFileLines
                },
                {
                    title: 'جرد المشتريات',
                    link: '/inventoryincome',
                    icon: faFilter,
                    active: 'purchasesInventory'
                },
            ]
        },
        {
            title: 'بيانات المبيعات',
            link: '',
            icon: faFileAlt,
            active: 'salesInfo',
            branches : [
                {
                    title: 'عرض فواتير المبيعات',
                    active: 'salesList',
                    link: '/outwardbills',
                    icon: faFileLines
                },
                {
                    title: 'جرد المبيعات',
                    link: '/inventoryoutcome',
                    icon: faFilter,
                    active: 'salesInventory'
                },
            ]
        },
        {
            title: 'طباعة الفواتير',
            link: '', 
            icon: faPrint,
            active: 'invoices',
            branches : [
                {
                    title: 'طباعة فواتير الموردين',
                    active: 'suppliersPrint',
                    link: '/supplierbills',
                    icon: faFileInvoice
                },
                {
                    title: 'طباعة فواتير العملاء',
                    active: 'clientsPrint',
                    link: '/clientbills',
                    icon: faFileInvoice
                },
            ]
        },
        {
            title: 'كشوفات الحسابات',
            link: '',
            icon: faMoneyCheck,
            active: 'bills',
            branches : [
                {
                    title: 'كشف حساب الموردين',
                    active: 'suppliersBills',
                    link: '/supplierbalance',
                    icon: faCoins
                },
                {
                    title: 'كشف حساب العملاء',
                    active: 'clientsBills',
                    link: '/clientbalance',
                    icon: faCoins
                },
            ]
        },
        {
            title: 'المرتجعات',
            link: '',
            icon: faCircleXmark,
            active: 'returns'
        },
        {
            title: 'المصاريف',
            link: '',
            icon: faWallet,
            active: 'expenses'
        },
        {
            title: 'التقارير',
            link: '',
            icon: faChartBar,
            active: 'reports'
        },
        {
            title: 'اعدادات النظام',
            link: '',
            icon: faGears,
            active: 'settings'
        },
        {
            title: 'تواصل معنا',
            link: '',
            icon: faPhoneVolume,
            active: 'contact'
        },
    ])

    const location = useLocation()
    const [getLocation , setGetLocation] = useState({})
    const [stop , setStop] = useState(false)

    const handleClick = (link) => {
        setStop(true) 
        setActiveLink(link);
        // setActiveBranch('')
        setActiveBranch(activeBranch)
    };

    const [targetValue, setTargetValue] = useState("");
    const handleClickBranch = (link) => {
        setActiveBranch(link);
        setTargetValue(link);
    };


    console.log(targetValue)
    console.log(activeBranch)
    console.log(activeLink)
    
    useEffect(() => {

        const checkBranch = activeBranch ? setTargetValue(activeBranch) : setTargetValue('')
        // const checkStop = activeLink ? setStop(true) : setStop(false)

        if(!stop) {
            let checkLocation = sidebarLinks?.find(e => e.link === location.pathname)
            let checkLocationNested = sidebarLinks?.find(e => e.branches?.find(b => b.link === location.pathname))
            let checkLocationNestedLik = checkLocationNested?.branches?.filter(e => e.link === location.pathname)
         setActiveLink(checkLocation ? checkLocation?.active : checkLocationNested?.active)

        //  setActiveBranch(checkLocationNestedLik?.length > 1 ? checkLocationNestedLik?.find(e => e.active === targetValue)?.active : checkLocationNestedLik[0]?.active) 
         console.log(checkLocationNested) 
        }

    },[location])

  return (
    <div className='fixed px-6 top-0 bottom-0 right-0 w-1/5 bg-gradient-to-b from-main to-[rgb(51_159_247)] text-white shadow-3xl h-full'>
        <div className='p-7 flex justify-center rounded-full'>
            <img src={logoImg} alt='logo' className='w-40' />
        </div>
       <div>
        {sidebarLinks?.map(e => (
            <div className='border-b border-[#e5e7eb24] last-of-type:border-none'>
                <div className={`py-1 px-6 font-bold rounded-2xl cursor-pointer ${activeLink === e.active && 'bg-gradient-to-l from-[rgb(250_250_250)] to-[rgb(225_234_238)] transition-all'}`} onClick={() => handleClick(e.active)}>
                    <Link to={e.branches ? '' : e.link} className={`flex justify-between transition-all relative ${activeLink === e.active && 'text-main'}`}>
                        <div className={`flex justify-start items-center gap-3`}>
                            <FontAwesomeIcon icon={e.icon} />
                            <div>{e.title}</div>
                        </div>
                        {e.branches && 
                            <div>
                                <FontAwesomeIcon icon={activeLink === e.active ? faChevronUp : faChevronDown} />
                            </div>
                        } 
                    </Link>
                </div>
                {e.branches && <div className={`py-1 px-7 transition-all ${activeLink === e.active ? 'h-auto opacity-100 block' : 'h-0 opacity-0 hidden'}`}>
                    {e.branches?.map(b => (
                        <div className='border-b border-[#e5e7eb24] cursor-pointer font-bold last-of-type:border-none' onClick={() => handleClickBranch(b.active)}>
                            <Link to={b.link}>
                                <div className={`flex justify-start text-sm items-center transition-all gap-3 rounded-2xl p-2 px-4 ${activeBranch === b.active && 'bg-gradient-to-l from-[rgb(250_250_250)] to-[rgb(225_234_238)] text-main'}`}>
                                    <FontAwesomeIcon icon={b.icon} />
                                    <div>{b.title}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                 </div>}
            </div>
        ))
        }
       </div>
    </div>
  )
}

export default Sidebar