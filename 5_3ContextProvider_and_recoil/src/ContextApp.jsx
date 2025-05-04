import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import './App.css'
import { useState, createContext, useContext } from 'react';
import IncreseCount from './ContextAPIComponents/IncreseCount';
import DecreseCount from './ContextAPIComponents/DecreseCount';
import CountComponent from './ContextAPIComponents/CountComponent';
import { SetCountContext } from "./storeForContextAPI/SetCountContext";

function ContextApp() {

  const [count, setCount] = useState(0);

  return (
    <>
      <SetCountContext.Provider value={{
        count : count,
        setCount : setCount
      }}>
        <div className={"forCard"}>
          <Card variant={"outlined"} className={"insideCard"}>
            
            <Typography variant="h5" style={{display:'flex',justifyContent: 'center'}}>
                Counter App
            </Typography>

            <div className={"forMyButton"}>

              <IncreseCount />  {/* 👈👈 here both are Componet look how we define below */}
              <DecreseCount />

            </div>
              
              <CountComponent />

          </Card> 
        </div>
        </SetCountContext.Provider>
    </>
  )

}

export default ContextApp
