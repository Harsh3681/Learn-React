import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import MyuseEffect from './Components/1_My_useEffect_hook'
import MyuseMemo from './Components/2_use_Memo_hook';

function App() {

  const [getActive, setActive] = useState("Home");

  return (
    <>
      <div className='d-flex mt-5' style={{"justifyContent":"center","alignItems":"center", "flexDirection":"column"}}>
        <MyuseEffect />
        <MyuseMemo />
      </div>
          
      
    </>
  )
}

export default App

