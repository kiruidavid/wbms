import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import './billingform.scss'

function BillingForm({client, closeBillingForm, addBillings}) {  
    const [firstName, setFirstName] = useState(client.firstName)
    const [readingDate, setReadingDate] = useState(new Date().toLocaleDateString()) 
    const [previousReading, setPreviousReading] = useState(0)
    const [currentReading, setCurrentReading] = useState(0)   
    const [cubicRate, setCubicRate] = useState(0)  
    const [dueDate, setDueDate] = useState("dd/MM/YY") 
    const [total, setTotal] = useState(0) 
    const [status, setStatus] = useState('pending')  
    const navigate = useNavigate()

    function handlePrevReading(e) {
        setPreviousReading(e.target.value) 
        let usage = currentReading - (e.target.value)
        setTotal(usage * cubicRate)
    } 
    function handleCurrentReading(e) {
        setCurrentReading(e.target.value) 
        let usage = (e.target.value) - previousReading
        setTotal(usage * cubicRate)
    } 
    function handleCubicRate(e) {
        setCubicRate(parseFloat(e.target.value)) 
        let usage = currentReading - previousReading
        setTotal(usage * parseFloat(e.target.value))
    } 
    function handleSubmit(e) {
        e.preventDefault() 
        const new_billing = {
            firstName, 
            readingDate, 
            previousReading, 
            currentReading, 
            cubicRate, 
            dueDate, 
            total, 
            status
        } 
       addBillings(new_billing) 
       navigate('/billing-list')
    }

  return (
    <div className='form-area'> 
     
    <form onSubmit={handleSubmit}> 
    <h1>Create Billing</h1>
  <div className="form-group">
    <label >First Name</label>
    <input type="text" className="form-control"  
      value={client.firstName}
   
     />
   
  </div>
  <div className="form-group">
    <label>Reading Date</label>
    <input type="date" 
       className="form-control"  
       onChange={(e) => setReadingDate(e.target.value)}
       placeholder='enter date'/>
  </div> 
  <div className="form-group">
    <label>Previous Reading</label>
    <input type="number" 
        className="form-control" 
        placeholder="Enter previous reading" 
        onChange={handlePrevReading}
        />
  </div> 
  
  <div className="form-group">
    <label>Current Reading</label>
    <input type="text" 
           className="form-control" 
            placeholder="Enter current reading"  
            onChange={handleCurrentReading}
            />
  </div>  
   
  <div className="form-group">
    <label>Rate per cubic meter</label>
    <input type="text" 
            className="form-control" 
            placeholder="Enter rate per cubic meter"  
            onChange={handleCubicRate}
            />
  </div>   
  <div className="form-group">
    <label>Due Date</label>
    <input type="date" 
       className="form-control"  
       placeholder='enter date' 
       onChange={(e) => setDueDate(e.target.value)}/>
  </div> 
  <div className="form-group">
    <label>Total</label>
    <input type="text" 
            className="form-control" 
            placeholder="Enter rate per cubic meter"  
            value={total < 0 ? 0 : total}
            />
  </div> 
 <div className="form-group"> 
 <label>Status</label> 
 <select className="form-select" onChange={(e) => setStatus(e.target.value)}>
  
  <option value="pending">Pending</option>
  <option value="paid">Paid</option>
 
</select>

 </div> 
 <div className='btn-row'>
 <button type="submit" className="btn btn-primary">Submit</button> 
 <button onClick={closeBillingForm}  className="btn btn-danger" >Cancel</button>
 </div>
  
</form> 
 </div>
  )
}

export default BillingForm