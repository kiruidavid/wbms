import React from 'react'
import Sidebar from '../../components/navbar/Navbar'  
import { Link } from 'react-router-dom'
import './categorylist.scss'

function CategoryList() {
  return (
    <div className='category-container'> 
      <Sidebar/> 
      <div className='category-table'> 
      <div className='heading'>
        <h2>List of Category</h2> 
        <button><Link to='/add-category' ><span>Add Category</span></Link></button>
      </div>
     <table className="table table-striped">
<thead>
<tr>
  
  <th scope="col">Date Created</th>
  <th scope="col">Code</th>
  <th scope="col">Name</th> 
  <th scope="col">Status</th> 
  

</tr>
</thead>
<tbody> 


 
 

</tbody>


</table>


      </div>

    </div>
  )
}

export default CategoryList