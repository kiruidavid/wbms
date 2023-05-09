import React, {useState} from 'react' 
import './clientform.scss'

function EditForm({closeEditForm, client, editClients}) {
    const [firstName, setFirstName] = useState(client.firstName) 
  const [lastName, setLastName] = useState(client.lastName) 
  const [phoneNumber, setPhoneNumber] = useState(client.phoneNumber) 
  const [meterCode, setMeterCode] = useState(client.meterCode) 
  const [firstReading, setFirstReading] = useState(client.firstReading) 
  const [status, setStatus] = useState(client.status)  
  const id = client.id 
  const dateCreated = client.dateCreated
 
  
  return ( 
    
     <div className='form-area'> 
     
    <form onSubmit={(e) => { 
      e.preventDefault()
      const edited_client = { 
        id,
        dateCreated,
        firstName, 
        lastName, 
        phoneNumber, 
        meterCode, 
        firstReading, 
        status, 
       
      }   
      editClients(id, edited_client) 
      closeEditForm()
    
    
     
     
      

    }}> 
    <h1>Edit Client</h1>
  <div className="form-group">
    <label >First Name</label>
    <input type="text" className="form-control"  
    placeholder="Enter first name"  
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}/>
   
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" 
       className="form-control"  
       placeholder="Enter last name"  
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}/>
  </div> 
  <div className="form-group">
    <label>Phone Number</label>
    <input type="number" 
        className="form-control" 
        placeholder="Enter phone number "  
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}/>
  </div> 
  
  <div className="form-group">
    <label>Meter Code</label>
    <input type="text" 
           className="form-control" 
            placeholder="Enter meter code "  
            value={meterCode}
            onChange={(e) => setMeterCode(e.target.value)}/>
  </div>  
   
  <div className="form-group">
    <label>First Reading</label>
    <input type="text" 
            className="form-control" 
            placeholder="Enter First Reading"  
            value={firstReading}
            onChange={(e) => setFirstReading(e.target.value)}/>
  </div>  
 <div className="form-group"> 
 <label>Status</label> 
 <select className="form-select" 
 onChange={(e) => setStatus(e.target.value)} 
 value={status}>
 
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
 
</select>

 </div> 
 <div className='btn-row'>
 <button type="submit" className="btn btn-primary">Submit</button> 
 <button onClick={closeEditForm}  className="btn btn-danger" >Cancel</button>
 </div>
  
</form> 
 </div> 
  )
}

export default EditForm