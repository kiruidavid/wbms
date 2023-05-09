import React, { useState, useContext } from 'react' 
import { ClientContext } from '../../../context/clients/Client'
import { v4 } from 'uuid'

import './clientform.scss'
import { useNavigate } from 'react-router-dom'

function ClientForm({addClients, closeAddForm}) { 
  const [firstName, setFirstName] = useState("") 
  const [lastName, setLastName] = useState("") 
  const [phoneNumber, setPhoneNumber] = useState("") 
  const [meterCode, setMeterCode] = useState("") 
  const [firstReading, setFirstReading] = useState("") 
  const [status, setStatus] = useState("active") 
  const dateCreated = new Date().toLocaleDateString()  

  
  return ( 
    
     <div className='form-area'>  
     
     
    <form onSubmit={(e) => { 
      e.preventDefault()
      const new_client = { 
        id: v4(),
        firstName, 
        lastName, 
        phoneNumber, 
        meterCode, 
        firstReading, 
        status, 
        dateCreated
      } 
      addClients(new_client)    
      closeAddForm()
     
      

    }}>  
    <h1>Add Client</h1>
     
   
  <div className="form-group"> 
    
    <label >First Name</label>
    <input type="text" className="form-control"  
    placeholder="Enter first name" 
    onChange={(e) => setFirstName(e.target.value)}/>
   
 
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" 
       className="form-control"  
       placeholder="Enter last name" 
       onChange={(e) => setLastName(e.target.value)}/>
  </div>   
  
 
  
  <div className="form-group">
    <label>Phone Number</label>
    <input type="number" 
        className="form-control" 
        placeholder="Enter phone number " 
        onChange={(e) => setPhoneNumber(e.target.value)}/>
  </div>  
 
 
  <div className="form-group">
    <label>Meter Code</label>
    <input type="text" 
           className="form-control" 
            placeholder="Enter meter code " 
            onChange={(e) => setMeterCode(e.target.value)}/> 
  </div>
    
  
   
  <div className="form-group">
    <label>First Reading</label>
    <input type="text" 
            className="form-control" 
            placeholder="Enter First Reading" 
            onChange={(e) => setFirstReading(e.target.value)}/>
  </div>  
 <div className="form-group"> 
 <label>Status</label> 
 <select className="form-select" onChange={(e) => setStatus(e.target.value)}>
  
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
 
</select>

 </div> 
 <div className='btn-row'>
 <button type="submit" className="btn btn-primary">Submit</button> 
 <button onClick={closeAddForm}  className="btn btn-danger" >Cancel</button>
 </div>
  
</form> 
 </div> 


  )
}

export default ClientForm