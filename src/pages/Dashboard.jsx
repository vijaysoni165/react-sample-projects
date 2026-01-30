import { LogOut } from 'lucide-react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'

const Logout = () =>{
// window.location.href = "/LoginPage";
  Navigate("/LoginPage");
}

function Dashboard() {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You are successfully logged in!</p>
      <button  onClick={Logout} style={{float:'right'}}>Log Out</button>
    </div>
  )
}

export default Dashboard
