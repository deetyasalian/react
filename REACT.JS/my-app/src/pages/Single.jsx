import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
const Single=()=>{
    return(
        <div className="single">
        <div className="content">
            <img src="https://media.istockphoto.com/id/1199706305/photo/friends-linking-arms-in-unity.jpg?s=1024x1024&w=is&k=20&c=9BpVTL4rlz3fdl-V8vEgqIWyYyCFZOxdg93mkiAAdOg="/>
       
        <div className="user">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        
        <div className="info">
            <span>organizationName</span>
            <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img src={Delete} alt=""/>
        </div>
        </div>
       
     <h1>ullamco laboris nisi ut aliquip ex  </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p>
        </div>
        <Menu/>
        </div>
    )
}

export default Single