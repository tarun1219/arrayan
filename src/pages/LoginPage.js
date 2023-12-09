import React from 'react'
import Login from '../components/Login'
import { AuthProvider } from '../context/AuthContext'
import HomeNavbar from '../components/Navbars/HomeNavbar'
const LoginPage= () => {
  return (
    <AuthProvider>
      <HomeNavbar/>
      <Login/>
    </AuthProvider>  
  )
}
export default LoginPage; 