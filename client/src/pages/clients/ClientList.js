import React, {useContext, useState} from 'react' 
import Navbar from '../../components/navbar/Navbar'  
import { ClientContext } from '../../context/clients/Client'
import {FaUsers} from 'react-icons/fa'
import './clientList.scss'
import ClientForm from './addClients/ClientForm'
import EditForm from './addClients/EditForm'
import BillingForm from '../billings/BillingForm'
function ClientList({addClients,clients, editClients, deleteClient, addBillings}) {  
  const [addClientModal, setAddClientModal] = useState(false)  
  const [editClientModal, setEditClientModal] = useState(false) 
  const [billingClientModal, setBillingClientModal] = useState(false)

  function openAddForm(){
    setAddClientModal(true)
  } 
  function closeAddForm(){
    setAddClientModal(false)
  } 
  function openEditForm(){
    setEditClientModal(true)
  } 
  function closeEditForm(){
    setEditClientModal(false)
  }  
  function openBillingForm(){
    setBillingClientModal(true)
  } 
  function closeBillingForm(){
    setBillingClientModal(false)
  }   
  
 
  return (
    <>
    <Navbar/> 
    <div className='clients-table'> 
    
     <div className='heading'>
        <h2><FaUsers/>List of Clients</h2> 
        <button type="button" class="btn btn-primary" onClick={openAddForm}>
        Add Client
</button>
      </div>  
      {addClientModal && <ClientForm addClients={addClients} closeAddForm={closeAddForm}/>} 
      
      <div> 
      <form className="form-inline">
    <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
      </div>
     <table className="table table-striped">
<thead>
<tr>
<th scope="col">ID</th>
  <th scope="col">Date Created</th>
  <th scope="col">First Name</th>
  <th scope="col">Phone Number</th> 
  <th scope="col">Meter Code</th> 
  <th scope="col">Status</th> 
  

</tr>
</thead>
<tbody> 


 { 
 
   clients.map((client) => (
    <tr> 
      <td>{client.id}</td>
      <td>{client.dateCreated}</td> 
      <td>{client.firstName}</td> 
      <td>{client.phoneNumber}</td> 
      <td>{client.meterCode}</td>  
      <td>{client.status}</td>
      <button onClick={openEditForm}>Update</button> 
      {editClientModal && <EditForm  client={client} editClients={editClients} closeEditForm={closeEditForm}/>}
      <button onClick={() => deleteClient(client.id)}>Delete</button> 
      <button onClick={openBillingForm}>Make Billing</button> 
      {billingClientModal && <BillingForm client={client} addBillings={addBillings} closeBillingForm={closeBillingForm}/>}
    </tr>
   ))
 }
 

</tbody>


</table>

    </div>
</>
  )
}

export default ClientList