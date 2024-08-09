import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppHeader from './Components/Header'
import AppSideBar from './Components/SideBar'
import AppFooter from './Components/Footer'
import UserPostsList from './Components/PostList'
import CreatePost from './Components/CreatePosts'
import SocialAppContextProvider from './Store/User_Post_Store'

function App() {

  const [getActive, setActive] = useState("Home");

  return (
    <>
      <SocialAppContextProvider>
     
        <AppSideBar getActive={getActive} setActive={setActive} />
        <AppHeader/>

        {getActive==="Home" ? <UserPostsList /> : <CreatePost />}
          
        {/* <AppFooter /> */}
  
        
       
      </SocialAppContextProvider>   
      
    </>
  )
}

export default App

