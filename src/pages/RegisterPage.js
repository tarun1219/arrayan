import React from 'react'
import UserSignUp from '../components/UserSignUp'
import { AuthProvider } from '../context/AuthContext'
import HomeNavbar from '../components/Navbars/HomeNavbar'
const RegisterPage = () => {
  return (
    <AuthProvider>
      <HomeNavbar/>
      <UserSignUp/>
    </AuthProvider>  
  )
}
export default RegisterPage; 