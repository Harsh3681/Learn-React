
import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { countState } from "../storeForRecoil/atoms/myAtom";

// useSetRecoilState 👈 to understand video no 5.3 Harkirat folder in laptop time --> 19.30

const IncreseCount = () =>{
  const setCount = useSetRecoilState(countState); // "useSetRecoilState"👈 Returns a "setter 👉"function"" i.e 👉"setCount" here, for updating "Recoil state"
    return (
      <>
        <div>
          <Button
              size={"larger"} 
              variant="contained" 
              style={{marginTop:10}} 
              onClick={()=>{setCount((existingCount) => existingCount + 1)}}
          >Increse</Button>
        </div>
      </>
    )
}

export default IncreseCount