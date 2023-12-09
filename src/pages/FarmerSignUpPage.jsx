import React from 'react'
import FarmerSignup from '../components/FarmerSignUp'
import { AuthProvider } from '../context/AuthContext'
import HomeNavbar from '../components/Navbars/HomeNavbar'
const FarmerSignupPage = () => {
  return (
    <AuthProvider>
      <HomeNavbar/>
      <FarmerSignup />
    </AuthProvider>  
  )
}
export default FarmerSignupPage;