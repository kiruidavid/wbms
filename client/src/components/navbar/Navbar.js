import React from 'react' 
import { Link } from 'react-router-dom'  
import {FaHandHoldingWater, FaUsers, FaMoneyCheck} from 'react-icons/fa'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'> 
       
        <div className='nav-logo'><span><FaHandHoldingWater/>WBS</span></div>

      
       <hr/>
       <div >
        <ul className='nav-links'> 
         
            
           
           
          
           
         
            <li className='nav-item'><Link to='/clients-list'><span><FaUsers/>List of Clients</span></Link></li> 
           
            <li className='nav-item'><Link to='/billing-list' ><span><FaMoneyCheck/>Billings</span></Link></li> 
             
            <li className='nav-item'><Link to='/category-list' ><span>List of Category</span></Link></li>
            
           
           
       </ul>

       </div> 
   

      
        
    </div>
  )
}

export default Navbar