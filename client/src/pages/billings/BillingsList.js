import React from 'react' 
import Sidebar from '../../components/navbar/Navbar' 
import './billingList.scss'

function BillingsList({billings}) {
  return (
    <div className='billings-container'>
    <Sidebar/> 
    <div className='billings-table'> 
    
     <div className='heading'>
        <h2>Billings List</h2> 
       
      </div>  
      
      
     <table className="table table-striped">
<thead>
<tr>

  
  <th scope="col">First Name</th>
  <th scope='col'>Reading Date</th>
  <th scope="col">Previous Reading</th> 
  <th scope="col">Current Reading</th>  
  <th scope="col">Cubic Rate</th> 
  <th scope="col">Due Date</th>
  <th scope="col">Total Amount</th> 
  <th scope="col">Status</th>
  

</tr>
</thead>
<tbody> 


 { 
  billings.map((billing) => (
    <tr>
        <td>{billing.firstName}</td> 
        <td>{billing.readingDate}</td> 
        <td>{billing.previousReading}</td> 
        <td>{billing.currentReading}</td> 
        <td>{billing.cubicRate}</td> 
        <td>{billing.dueDate}</td>  
        <td>{billing.total}</td>
        <td className={billing.status == 'pending' ? 'btn btn-danger' : 'btn btn-success'}>{billing.status}</td>
    </tr>
  ))
   
 }
 

</tbody>


</table>

    </div>
</div>
  )
}

export default BillingsList