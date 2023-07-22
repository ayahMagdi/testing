import { createContext , useContext, useState } from "react";

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
        {code: "1111111" , name: "هند مجدي" , phone:"01020202020"},
        {code: "666666" , name: "هند مجدي" , phone:"01020202020"},
        {code: "555555" , name: "هند مجدي" , phone:"01020202020"},
        {code: "444444" , name: "هند مجدي" , phone:"01020202020"},
        {code: "222222" , name: "هند مجدي" , phone:"01020202020"},
        {code: "333333" , name: "هند مجدي" , phone:"01020202020"},
    ])
    const [clients , setClients] = useState([
        {code: "1111111" , name: "هند مجدي" , phone:"01020202020" ,address: "مصر محافظة الشرقية"},
        {code: "666666" , name: "هند مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "555555" , name: "هند مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "444444" , name: "هند مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "222222" , name: "هند مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
        {code: "333333" , name: "هند مجدي" , phone:"01020202020",address: "مصر محافظة الشرقية"},
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

    const deleteItem = (code) => {
        setItems(items.filter(e => e.code !== code))
    }

    const deleteSupplier = (code) => {
        setSuppliers(suppliers.filter(e => e.code !== code))
    }

    const deleteClient = (code) => {
        setClients(clients.filter(e => e.code !== code))
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

    return (
        <StateContext.Provider value={{items , addItem , deleteItem , editItem , suppliers , addSupplier , deleteSupplier ,editSupplier ,clients , addClient , deleteClient , editClient}}>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)