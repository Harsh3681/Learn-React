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
        {/* <div className="Top_Bottom"> */}
          <AppSideBar getActive={getActive} setActive={setActive} />
          
          <div className="my-container">
            <AppHeader/>
            {getActive==="Home" ? <UserPostsList className="container row"/> : <div style={{"display": "flex", "justify-content": "center", "align-items": "center"}}><CreatePost /></div>}
            {/* <AppFooter /> */}
          </div>
        {/* </div> */}
      </SocialAppContextProvider>   
      
    </>
  )
}

export default App

