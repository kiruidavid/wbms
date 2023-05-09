import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home'; 
import ClientList from './pages/clients/ClientList'; 
import ClientForm from './pages/clients/addClients/ClientForm'; 
import CategoryList from './pages/categories/CategoryList'; 
import AddCategories from './pages/categories/addCategories/AddCategories'; 
import { ClientProvider } from './context/clients/Client';
import './App.css';
import { useEffect, useState } from 'react';
import BillingsList from './pages/billings/BillingsList';



function App() { 
  const [clients, setClients] = useState([]) 
  const [billings, setBillings] = useState([])
  function addClients(client){
    setClients([...clients, client])
  }   
  function editClients(id, data){
    setClients(clients.map((client) => client.id === id ? data : client))
  } 
  function deleteClient(id){
    setClients(clients.filter((client) => client.id !== id))
  } 
  function addBillings(billing){
    setBillings([...billings, billing])
  }
 
  
  return (
    <div className="App">  
    
    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/clients-list' element={<ClientList clients={clients} editClients={editClients}  addClients={addClients} deleteClient={deleteClient} addBillings={addBillings}/>}/> 
          <Route path='/billing-list' element={<BillingsList billings={billings}  />}/> 
          <Route path='/category-list' element={<CategoryList/>}/> 
          <Route path='/add-category' element={<AddCategories/>}/>
        </Routes>
      </Router> 
     
    
    </div>
  );
}

export default App;
