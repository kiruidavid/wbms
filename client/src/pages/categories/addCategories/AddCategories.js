import React from 'react'
import Sidebar from '../../../components/navbar/Navbar' 
import './addcategories.scss'

function AddCategories() {
  return (
    <div className='add-category'> 
      <Sidebar/> 
       <div className='form-area'>
        <h1>Add Category</h1> 
        <form>
        <div className="form-group">
         <label >First Name</label>
         <input type="text" className="form-control"  placeholder="Enter email"/>
   
         </div>  
         <div className="form-group">
         <label >First Name</label>
         <input type="text" className="form-control"  placeholder="Enter email"/>
   
         </div>  
         <button type="submit" className="btn btn-primary">Submit</button>

        </form>
       </div>

    </div>
  )
}

export default AddCategories