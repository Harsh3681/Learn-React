
import { Button } from "@mui/material";
import { useContext } from "react";
import { SetCountContext } from "../storeForContextAPI/SetCountContext";


const IncreseCount = () =>{
    const {count, setCount} = useContext(SetCountContext);
    return (
      <>
        <div>
          <Button
              size={"larger"} 
              variant="contained" 
              style={{marginTop:10}} 
              onClick={()=>{setCount(count+1)}}
          >Increse</Button>
        </div>
      </>
    )
}

export default IncreseCount