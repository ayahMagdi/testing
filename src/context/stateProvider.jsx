import { createContext , useContext, useState } from "react";
import { faBalanceScaleLeft, faBold, faBusinessTime, faClipboardCheck, faClipboardList, faEdit, faMoneyCheckAlt, faPeopleGroup, faSackDollar, faStore, faUsers } from '@fortawesome/free-solid-svg-icons'

export const StateContext = createContext(null)

export const StateProvider = (props) => {

    const [items , setItems] = useState([
        {code: "1" , name: "لابتوب" , unit: "قطع" ,income:"2000" ,outcome: "5000"},
        {code: "2" , name: "موبايل" , unit: "قطع" ,income:"1000" ,outcome: "5000"},
        {code: "3" , name: "تابلت" , unit: "قطع" ,income:"500" ,outcome: "500"},
        {code: "4" , name: "ايفون" , unit: "قطع" ,income:"4000" ,outcome: "5500"},
        {code: "5" , name: "شامبو" , unit: "قطع" ,income:"8000" ,outcome: "9500"},
        {code: "6" , name: "بلسم" , unit: "قطع" ,income:"400" ,outcome: "500"},
        {code: "7" , name: "هيدفون" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "8" , name: "صن بلوك" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "9" , name: "زيت" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "10" , name: "حمام كريم" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "11" , name: "غسول" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "12" , name: "مرطب" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "13" , name: "جل صبار" , unit: "قطع" ,income:"200" ,outcome: "500"},
        {code: "14" , name: "سيروم" , unit: "قطع" ,income:"200" ,outcome: "500"},
    ])
    const [suppliers , setSuppliers] = useState([
        {code: "1" , name: "هند مجدي" , phone:"01020202020"},
        {code: "2" , name: "بسمة مجدي" , phone:"01020202020"},
        {code: "3" , name: "هبة مجدي" , phone:"01020202020"},
        {code: "4" , name: "رنا عبدالعزيز" , phone:"01020202020"},
        {code: "5" , name: "ميار خالد" , phone:"01020202020"},
        {code: "6" , name: "ايه مجدي" , phone:"01020202020"},
    ])
    const [clients , setClients] = useState([
        {code: "1" , name: "هند مجدي" , phone:"01020202020" ,address: "مصر محافظة الشرقية"},
        {code: "2" , name: "بسمة مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "3" , name: "هبة مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "4" , name: "ايه مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "5" , name: "رنا عبدالعزيز" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "6" , name: "اسراء فكري" , phone:"01020202020",address: "مصر محافظة الشرقية"},
    ])
    const [categorys , setCategorys] = useState([
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'الموردين' , icon: faUsers , url: '/allsuppliers'},
        {title: 'العملاء' , icon: faPeopleGroup , url: '/allclients'},
        {title: 'المشتريات' , icon: faSackDollar , url: '/purchases'},
        {title: 'المبيعات' , icon: faBalanceScaleLeft , url: '/sales'},
        {title: 'المخزن' , icon: faStore , url: '/store'},
        {title: 'فواتير الداخل' , icon: faClipboardList , url: '/inwardbills'},
        {title: 'فواتير الخارج' , icon: faClipboardCheck , url: '/outwardbills'},
        {title: 'الحسابات' , icon: faMoneyCheckAlt},
        {title: 'الواردات' , icon: faBusinessTime},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
    ])
    const [sales , setSales] = useState([
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111110" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111111" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111112" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111113" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111114" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111115" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111116" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
        // {invoice: '1',date: '20/7/2020', supplierName: 'محمد', supplierCode: '12' ,itemCode: "11111117" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,total: '2000'},
    ])
    const [purchases , setPurchases] = useState([
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111110" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111111" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111112" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111113" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111114" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111115" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111116" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
        // {purchas: '1',date: '20/7/2020', supplierName: 'هند مجدي', supplierCode: '1' ,itemCode: "11111117" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500" ,totalPur: '25000'},
    ])
    const [stores , setStores] = useState([
        {code: "1" , name: "لابتوب" , unit: "قطع" ,income:"2000" ,outcome: "5000" ,avlqty:"60",soldqty: "11",store: "", total: ""},
        {code: "2" , name: "موبايل" , unit: "قطع" ,income:"1000" ,outcome: "5000" ,avlqty:"40",soldqty: "22",store: "", total: ""},
        {code: "3" , name: "تابلت" , unit: "قطع" ,income:"500" ,outcome: "500" ,avlqty:"92",soldqty: "20",store: "", total: ""},
        {code: "4" , name: "ايفون" , unit: "قطع" ,income:"4000" ,outcome: "5500" ,avlqty:"55",soldqty: "40",store: "", total: ""},
        {code: "5" , name: "شامبو" , unit: "قطع" ,income:"8000" ,outcome: "9500" ,avlqty:"78",soldqty: "60",store: "", total: ""},
        {code: "6" , name: "بلسم" , unit: "قطع" ,income:"400" ,outcome: "500",avlqty:"60",soldqty: "0",store: "", total: ""},
        {code: "7" , name: "هيدفون" , unit: "قطع" ,income:"200" ,outcome: "500",avlqty:"25",soldqty: "7",store: "", total: ""},
        {code: "8" , name: "صن بلوك" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"79",soldqty: "50",store: "", total: ""},
        {code: "9" , name: "زيت" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"90",soldqty: "40",store: "", total: ""},
        {code: "10" , name: "حمام كريم" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"300",soldqty: "200",store: "", total: ""},
        {code: "11" , name: "غسول" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"240",soldqty: "100",store: "", total: ""},
        {code: "12" , name: "مرطب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"100",soldqty: "20",store: "", total: ""},
        {code: "13" , name: "جل صبار" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"190",soldqty: "20",store: "", total: ""},
        {code: "14" , name: "سيروم" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"250",soldqty: "20",store: "", total: ""},
    ])
    const [inwardBills , setInwardBills] = useState([
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 1 , itemName: 'شامبو', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 12 , itemName: 'بلسم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 15 , itemName: 'حمام كريم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '2' , date: '31/4/2020' , supplierCode: 5 , supplierName: 'بسمه' ,itemCode: 5 , itemName: 'زيت', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '2' , date: '31/4/2020' , supplierCode: 5 , supplierName: 'بسمه' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 10 , itemName: 'مرطب', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 7 , itemName: 'صن بلوك', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 11 , itemName: 'فاونديشن', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 15 , itemName: 'صبغة', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 17 , itemName: 'شادو', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 20 , itemName: 'ماسكرا', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '5' , date: '30/4/2020' , supplierCode: 12 , supplierName: 'اسراء' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '5' , date: '30/4/2020' , supplierCode: 12 , supplierName: 'اسراء' ,itemCode: 9 , itemName: 'مخمرية', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
    ])
    const [outwardBills , setOutwardBills] = useState([
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 1 , itemName: 'شامبو', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 12 , itemName: 'بلسم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '1' , date: '30/4/2020' , supplierCode: 1 , supplierName: 'هند' ,itemCode: 15 , itemName: 'حمام كريم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '2' , date: '31/4/2020' , supplierCode: 5 , supplierName: 'بسمه' ,itemCode: 5 , itemName: 'زيت', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '2' , date: '31/4/2020' , supplierCode: 5 , supplierName: 'بسمه' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 10 , itemName: 'مرطب', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 7 , itemName: 'صن بلوك', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '3' , date: '32/4/2020' , supplierCode: 3 , supplierName: 'رنا' ,itemCode: 11 , itemName: 'فاونديشن', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 15 , itemName: 'صبغة', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 17 , itemName: 'شادو', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 20 , itemName: 'ماسكرا', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '4' , date: '32/4/2020' , supplierCode: 5 , supplierName: 'ايه' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '5' , date: '30/4/2020' , supplierCode: 12 , supplierName: 'اسراء' ,itemCode: 9 , itemName: 'سيروم', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
        {invoice: '5' , date: '30/4/2020' , supplierCode: 12 , supplierName: 'اسراء' ,itemCode: 9 , itemName: 'مخمرية', unit: 'قطع' ,price: 200 ,qty: 20 ,total: 2000,totalbill: 6000,discount: 30,totalwd: 2000,reduction: 100,remaining: 3000},
    ])

    const addItem = (code ,name, unit, income, outcome) => {
        setItems([{code,name,unit,income,outcome} , ...items])
    }
    const addInwardBills = (invoice ,date, supplierCode, supplierName, itemCode , itemName , unit ,price ,qty , total , totalbill ,discount,totalwd,reduction,remaining) => {
        setInwardBills((oldvalues) => [{invoice ,date, supplierCode, supplierName, itemCode , itemName , unit ,price ,qty , total , totalbill ,discount,totalwd,reduction,remaining}, ...oldvalues])
    }
    const addOutwardBills = (invoice ,date, supplierCode, supplierName, itemCode , itemName , unit ,price ,qty , total , totalbill ,discount,totalwd,reduction,remaining) => {
        setOutwardBills((oldvalues) => [{invoice ,date, supplierCode, supplierName, itemCode , itemName , unit ,price ,qty , total , totalbill ,discount,totalwd,reduction,remaining}, ...oldvalues])
    }
    const addSupplier = (code, name , phone) => {
        setSuppliers([{code, name , phone} , ...suppliers])
    }

    const addClient = (code, name , phone , address) => {
        setClients([{code, name , phone , address} , ...clients])
    }
    const addPurchases = (invoice ,date , supplierName , supplierCode ,itemCode,itemName ,unit ,qty ,price,total) => {
        setPurchases([{invoice ,date , supplierName , supplierCode ,itemCode,itemName,unit ,qty ,price,total} , ...purchases])
    }
    const addSales = (invoice ,date , supplierName , supplierCode ,itemCode,itemName ,unit ,qty ,price ,total) => {
        setSales([{invoice ,date , supplierName , supplierCode ,itemCode,itemName,unit ,qty ,price ,total} , ...sales])
    }
    
    const deleteItem = (code) => {
        setItems(items.filter(e => e.code !== code))
    }
    const deleteSupplier = (code) => {
        setSuppliers(suppliers.filter(e => e.code !== code))
    }
    const deleteClient = (code) => {
        setClients(clients.filter(e => e.code !== code))
    }
    const deletePurchases = (code) => {
        setPurchases(purchases.filter(e => e.itemCode !== code))
    }
    const deleteSales = (code) => {
        setSales(sales.filter(e => e.itemCode !== code))
    }

    const editItem = (code,editedItems) => {
        setItems(items.map(e => e.code === code ? editedItems : e))
    }
    const editSupplier = (code,editedSuppliers) => {
        setSuppliers(suppliers.map(e => e.code === code ? editedSuppliers : e))
    }
    const editClient = (code,editedClients) => {
        setClients(clients.map(e => e.code === code ? editedClients : e))
    }
    const editPurchases = (code,editedPurchases) => {
        setPurchases(purchases.map(e => e.itemCode === code ? editedPurchases : e))
    }
    const editSales = (code,editedSales) => {
        setSales(sales.map(e => e.itemCode === code ? editedSales : e))
    }
    const addToStore = (code , name , unit ,income ,outcome,avlqty,soldqty,store, total) => {
         setStores((oldvalues) => [{code , name , unit ,income ,outcome,avlqty,soldqty,store, total} , ...oldvalues])
    }

    const editStores = (arr) => {
        setStores((oldvalues) => oldvalues.map(e => e.code === arr.itemCode ? { ...e, avlqty: parseInt(e.avlqty) + parseInt(arr.qty) } : e))
      };

    const deleteFromStore = (arr) => {
        setStores((oldvalues) => oldvalues.map(e => e.code === arr.itemCode ? {...e , soldqty: parseInt(e.soldqty) + parseInt(arr.qty)} : e))
    }

    return (
        <StateContext.Provider value={
            {items,addItem,deleteItem, editItem , suppliers,outwardBills,addOutwardBills, addSupplier , deleteSupplier,setSales ,editSupplier ,clients , addClient , deleteClient , editClient , categorys ,purchases,setPurchases,addPurchases,deletePurchases,editPurchases,sales,stores ,addToStore,editStores,deleteFromStore ,addSales,deleteSales,editSales ,inwardBills ,addInwardBills ,setStores}
         }>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)