import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppHeader from '../Components/Header'
import AppSideBar from '../Components/SideBar'
import AppFooter from '../Components/Footer'
import SocialAppContextProvider from '../Store/User_Post_Store'
import {Outlet} from "react-router-dom"

function App() {

  // const [getActive, setActive] = useState("/");

  return (
    <>
      <SocialAppContextProvider>
     
        <AppSideBar />
        <AppHeader/>
        <Outlet />   {/* Here Outlet for "covering Path" see in "main.jsx"  */}
        {/* <AppFooter /> */}
      </SocialAppContextProvider>    
      
    </>
  )
}

export default App

