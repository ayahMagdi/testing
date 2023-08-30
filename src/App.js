import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import AddPage from "./pages/AddPage";
import AllproductsPage from "./pages/AllproductsPage";
import EditPage from "./pages/EditPage";
import AllsuppliersPage from "./pages/AllsuppliersPage";
import AddSupplierPage from "./pages/AddSupplierPage";
import EditSupplierPage from "./pages/EditSupplierPage";
import AllClientsPage from "./pages/AllClientsPage";
import AddClientPage from "./pages/AddClientPage";
import EditClientPage from "./pages/EditClientPage";
import PurchasesPage from "./pages/PurchasesPage";
import StorePage from "./pages/StorePage";
import SalesPage from "./pages/SalesPage";
import InwardBills from "./pages/InwardBills";
import OutwardBills from "./pages/OutwardBills";
import SupplierBills from "./pages/SupplierBills";
import ClientBills from "./pages/ClientBills";
import InventoryIncome from "./pages/InventoryIncome";
import InventoryOutcome from "./pages/InventoryOutcome";
import SupplierBalance from "./pages/SupplierBalance";
import ClientBalance from "./pages/ClientBalance";
import SupplierReduction from "./pages/SupplierReduction";
import ClientReduction from "./pages/ClientReduction";
import Suppliers from "./pages/Suppliers";
import Clients from "./pages/Clients";
import Store from "./pages/Store";

function App() {

  const [record , setRecord] = useState('')
  const [supplier , setSupplier] = useState('')
  const [client , setClient] = useState('')
  const [search , setSearch] = useState('')
  const [addItemMsg , setAddItemMsg] = useState(false)
  const [editItemMsg , setEditItemMsg] = useState(false)
  const [addSupplierMsg , setAddSupplierMsg] = useState(false)
  const [editSupplierMsg , setEditSupplierMsg] = useState(false)
  const [addClientMsg , setAddClientMsg] = useState(false)
  const [editClientMsg , setEditClientMsg] = useState(false)
  const [recordReduction , setRecordReduction] = useState('')
  const [recordReductionClient , setRecordReductionClient] = useState('')

  const getRecord = (record) => {
    setRecord(record)
  }
  const getSupplier = (supplier) => {
    setSupplier(supplier)
  }
  const getClient = (client) => {
    setClient(client)
  }
  const searchItem = (search) => {
    setSearch(search)
  }
  const isAddedItem = (added) => {
    setAddItemMsg(added)
  }
  const isAddedSupplier = (added) => {
    setAddSupplierMsg(added)
  }
  const isAddedClient = (added) => {
    setAddClientMsg(added)
  }
  const isEditedItem = (edited) => {
    setEditItemMsg(edited)
  }
  const isEditedSupplier = (edited) => {
    setEditSupplierMsg(edited)
  }
  const isEditedClient = (edited) => {
    setEditClientMsg(edited)
  }

  const getRecordReduction = (recordReduction) => {
    setRecordReduction(recordReduction)
  }
  const getRecordReductionClient = (recordReductionClient) => {
    setRecordReductionClient(recordReductionClient)
  }

  useEffect(() => {
    setTimeout(() => {
      addSupplierMsg && setAddSupplierMsg(false)
      editSupplierMsg && setEditSupplierMsg(false)
      addClientMsg && setAddClientMsg(false)
      editClientMsg && setEditClientMsg(false)
      addItemMsg && setAddItemMsg(false)
      editItemMsg && setEditItemMsg(false)
    } , 3000)
  })

  return (
    <div className="App">
      <Routes>
         <Route exact path="/" element={<Login />} />
         <Route path="/homepage" element={<Homepage searchItem={searchItem} search={search}  />} />
         <Route path="/homepage/storepage/allproducts" element={<AllproductsPage getRecord={getRecord} searchItem={searchItem} search={search} addMsg={addItemMsg} editMsg={editItemMsg} />} />
         <Route path="/homepage/suppliers" element={<Suppliers getRecord={getRecord} searchItem={searchItem} search={search} addMsg={addItemMsg} editMsg={editItemMsg} />} />
         <Route path="/homepage/clients" element={<Clients getRecord={getRecord} searchItem={searchItem} search={search} addMsg={addItemMsg} editMsg={editItemMsg} />} />
         <Route path="/homepage/storepage" element={<Store getRecord={getRecord} searchItem={searchItem} search={search} addMsg={addItemMsg} editMsg={editItemMsg} />} />
         <Route path="/homepage/suppliers/allsuppliers" element={<AllsuppliersPage getSupplier={getSupplier} searchItem={searchItem} search={search} addMsg={addSupplierMsg} editMsg={editSupplierMsg} />} />
         <Route path="/homepage/clients/allclients" element={<AllClientsPage getClient={getClient} searchItem={searchItem} search={search} addMsg={addClientMsg} editMsg={editClientMsg} />} />
         <Route path="/homepage/storepage/allproducts/addproduct" element={<AddPage isAdded={isAddedItem} />} />
         <Route path="/homepage/suppliers/allsuppliers/addSupplier" element={<AddSupplierPage isAdded={isAddedSupplier} />} />
         <Route path="/homepage/clients/allclients/addClient" element={<AddClientPage isAdded={isAddedClient} />} />
         <Route path="/homepage/storepage/allproducts/editproduct" element={<EditPage record={record} isEdited={isEditedItem} />} />
         <Route path="/homepage/suppliers/allsuppliers/editSupplier" element={<EditSupplierPage supplier={supplier} isEdited={isEditedSupplier} />} />
         <Route path="/homepage/clients/allclients/editClient" element={<EditClientPage client={client} isEdited={isEditedClient} />} />
         <Route path="/purchases" element={<PurchasesPage searchItem={searchItem} />} />
         <Route path="/sales" element={<SalesPage searchItem={searchItem} />} />
         <Route path="/homepage/storepage/store" element={<StorePage searchItem={searchItem} search={search} />} />
         <Route path="/inwardbills" element={<InwardBills />} />
         <Route path="/outwardbills" element={<OutwardBills />} />
         <Route path="/supplierbills" element={<SupplierBills searchItem={searchItem} search={search} />} />
         <Route path="/clientbills" element={<ClientBills searchItem={searchItem} search={search} />} />
         <Route path="/inventoryincome" element={<InventoryIncome />} />
         <Route path="/inventoryoutcome" element={<InventoryOutcome />} />
         <Route path="/supplierbalance" element={<SupplierBalance searchItem={searchItem} search={search} getRecordReduction={getRecordReduction} />} />
         <Route path="/clientbalance" element={<ClientBalance searchItem={searchItem} search={search} getRecordReduction={getRecordReductionClient} />} />
         <Route path="/supplierreduction" element={<SupplierReduction recordReduction={recordReduction} />} />
         <Route path="/clientreduction" element={<ClientReduction recordReduction={recordReductionClient} />} />
      </Routes>
    </div>
  );
}

export default App;
