import { Typography } from "@mui/material";
import { useContext } from "react";
import { SetCountContext } from "../storeForContextAPI/SetCountContext";


function CountComponent(){
    const {count} = useContext(SetCountContext);
    return (
      <>
        <Typography variant="h5" style={{display:'flex',justifyContent: 'center'}}>
            {count}
        </Typography>
      </>
    )
}

export default CountComponent;

