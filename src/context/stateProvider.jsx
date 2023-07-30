import { createContext , useContext, useState } from "react";
import { faBusinessTime, faEdit, faMoneyCheckAlt, faPeopleGroup, faSackDollar, faStore, faUsers } from '@fortawesome/free-solid-svg-icons'

export const StateContext = createContext(null)

export const StateProvider = (props) => {

    const [items , setItems] = useState([
        {code: "1111111" , barcode: "123456789" , name: "لابتوب" ,unit:"قطعه" ,income: "500" , outcome: "600"},
        {code: "2222222" , barcode: "123456789" , name: "موبايل" ,unit:"قطعه" ,income: "500" , outcome: "600"},
        {code: "3333333" , barcode: "123456789" , name: "موبايل" ,unit:"قطعه" ,income: "500" , outcome: "600"},
        {code: "4444444" , barcode: "123456789" , name: "موبايل" ,unit:"قطعه" ,income: "500" , outcome: "600"},
        {code: "5555555" , barcode: "123456789" , name: "موبايل" ,unit:"قطعه" ,income: "500" , outcome: "600"},
        {code: "6666666" , barcode: "123456789" , name: "موبايل" ,unit:"قطعه" ,income: "500" , outcome: "600"},
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
        {code: "1111111" , name: "هند مجدي" , phone:"01020202020" ,address: "مصر محافظة الشرقية"},
        {code: "666666" , name: "بسمة مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "555555" , name: "هبة مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "444444" , name: "ايه مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "222222" , name: "رنا عبدالعزيز" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "333333" , name: "اسراء فكري" , phone:"01020202020",address: "مصر محافظة الشرقية"},
    ])
    const [categorys , setCategorys] = useState([
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'الموردين' , icon: faUsers , url: '/allsuppliers'},
        {title: 'العملاء' , icon: faPeopleGroup , url: '/allclients'},
        {title: 'المشتريات' , icon: faSackDollar , url: '/purchases'},
        {title: 'الحسابات' , icon: faMoneyCheckAlt},
        {title: 'المخزن' , icon: faStore , url: '/store'},
        {title: 'الواردات' , icon: faBusinessTime},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
        {title: 'المنتجات' , icon: faEdit , url: '/allproducts'},
    ])
    const [purchases , setPurchases] = useState([
        {itemCode: "11111110" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111111" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111112" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111113" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111114" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111115" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111116" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
        {itemCode: "11111117" , itemName: "لابتوب" ,unit:"قطعه" , qty: "50",price: "500"},
    ])
    const [store , setStore] = useState([
        {code: "1" , name: "لابتوب" , unit: "قطع" ,income:"2000" ,outcome: "500" ,avlqty:"60",soldqty: "11",store: "", total: ""},
        {code: "2" , name: "لابتوب" , unit: "قطع" ,income:"1000" ,outcome: "500" ,avlqty:"40",soldqty: "22",store: "", total: ""},
        {code: "3" , name: "لابتوب" , unit: "قطع" ,income:"500" ,outcome: "500" ,avlqty:"92",soldqty: "20",store: "", total: ""},
        {code: "4" , name: "لابتوب" , unit: "قطع" ,income:"4000" ,outcome: "500" ,avlqty:"55",soldqty: "40",store: "", total: ""},
        {code: "5" , name: "لابتوب" , unit: "قطع" ,income:"8000" ,outcome: "500" ,avlqty:"78",soldqty: "60",store: "", total: ""},
        {code: "6" , name: "لابتوب" , unit: "قطع" ,income:"7000" ,outcome: "500" ,avlqty:"60",soldqty: "0",store: "", total: ""},
        {code: "7" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"25",soldqty: "7",store: "", total: ""},
        {code: "8" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"79",soldqty: "50",store: "", total: ""},
        {code: "9" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"90",soldqty: "40",store: "", total: ""},
        {code: "10" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"300",soldqty: "200",store: "", total: ""},
        {code: "11" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"240",soldqty: "100",store: "", total: ""},
        {code: "12" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"100",soldqty: "20",store: "", total: ""},
        {code: "13" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"190",soldqty: "20",store: "", total: ""},
        {code: "14" , name: "لابتوب" , unit: "قطع" ,income:"200" ,outcome: "500" ,avlqty:"250",soldqty: "20",store: "", total: ""},
    ])

    const addItem = (code, barcode, name, unit, income, outcome) => {
        setItems([{code,barcode,name,unit,income,outcome} , ...items])
    }

    const addSupplier = (code, name , phone) => {
        setSuppliers([{code, name , phone} , ...suppliers])
    }

    const addClient = (code, name , phone , address) => {
        setClients([{code, name , phone , address} , ...clients])
    }
    const addPurchases = (itemCode,itemName ,unit ,qty ,price) => {
        setPurchases([{itemCode,itemName,unit ,qty ,price} , ...purchases])
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

    const editStore = (arr) => {
       setStore(store.map(e => e.code === arr.itemCode? {...e , avlqty: parseInt(e.avlqty) + parseInt(arr.qty)}  : e))
    }

    return (
        <StateContext.Provider value={
            {items,addItem,deleteItem, editItem , suppliers , addSupplier , deleteSupplier ,editSupplier ,clients , addClient , deleteClient , editClient , categorys ,purchases,addPurchases,deletePurchases,editPurchases ,store ,editStore}
         }>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)