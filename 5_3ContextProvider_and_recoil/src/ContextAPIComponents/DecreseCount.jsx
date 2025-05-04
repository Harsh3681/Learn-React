import Button from '@mui/material/Button';
import { useContext } from 'react';
import { SetCountContext } from '../storeForContextAPI/SetCountContext';

const DecreseCount = () =>{
    const {count, setCount} = useContext(SetCountContext);
    return (
        <>
        <div >
            <Button
                size={"larger"} 
                variant="contained" 
                style={{marginTop:10}} 
                color="error" 
                onClick={()=>{setCount(count-1)}}
            >Decrese</Button>
        </div>
        </>
    )
}

export default DecreseCount

