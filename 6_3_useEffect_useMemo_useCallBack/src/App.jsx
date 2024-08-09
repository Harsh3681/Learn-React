import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import MyuseEffect from './Components/1_My_useEffect_hook'
import MyuseMemo from './Components/2_use_Memo_hook';
import MyuseCallback from './Components/2_use_Callback_hook';

function App() {


  return (
    <>
      <div className='d-flex mt-5' style={{"justifyContent":"center","alignItems":"center", "flexDirection":"column"}}>
        <MyuseEffect />
        <MyuseMemo />
        <MyuseCallback />
      </div>
          
      
    </>
  )
}

export default App

