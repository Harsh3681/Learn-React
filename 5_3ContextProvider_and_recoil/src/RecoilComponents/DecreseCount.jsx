import Button from '@mui/material/Button';
import { useSetRecoilState } from 'recoil';
import { countState } from '../storeForRecoil/atoms/myAtom';

const DecreseCount = () =>{
    const setCount = useSetRecoilState(countState);
    return(
        <>
        <div >
            <Button
                size={"larger"} 
                variant="contained" 
                style={{marginTop:10}} 
                color="error" 
                onClick={()=>{setCount((existingCount) => existingCount - 1)}}
            >Decrese</Button>
        </div>
        </>
    )
}

export default DecreseCount

