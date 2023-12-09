import React from 'react'
import { AuthProvider } from '../context/AuthContext'
import HomeNavbar from '../components/Navbars/HomeNavbar'
import FarmerLogin from '../components/FarmerLogin'
const FarmerLoginPage= () => {
  return (
    <AuthProvider>
      <HomeNavbar/>
      <FarmerLogin/>
    </AuthProvider>  
  )
}
export default FarmerLoginPage; 