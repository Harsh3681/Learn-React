import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import './App.css'
import IncreseCount from './RecoilComponents/IncreseCount';
import DecreseCount from './RecoilComponents/DecreseCount';
import CountComponent from './RecoilComponents/CountComponent';
import { RecoilRoot } from 'recoil';
import CheckIsEven from './RecoilComponents/CheckIsEven';

 function RecoilApp() {

  return (
    <>
      <RecoilRoot>
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
              <CheckIsEven /> 

          </Card> 
        </div>
      </RecoilRoot>
      
    </>
  )

}

export default RecoilApp
