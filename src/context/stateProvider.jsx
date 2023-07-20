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

    const addItem = (code, barcode, name, unit, income, outcome) => {
        setItems([{code,barcode,name,unit,income,outcome} , ...items])
    }
    const deleteItem = (code) => {
        setItems(items.filter(e => e.code !== code))
    }
    const editItem = (code,editedItems) => {
        setItems(items.map(e => e.code === code ? editedItems : e))
    }

    return (
        <StateContext.Provider value={{items , addItem , deleteItem , editItem}}>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)