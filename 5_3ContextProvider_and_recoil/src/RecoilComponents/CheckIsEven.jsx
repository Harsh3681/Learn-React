import { Typography } from "@mui/material";
import { countState } from "../storeForRecoil/atoms/myAtom";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { EvenSelector } from "../storeForRecoil/selectors/mySelector";

const CheckIsEven = () =>{
    // const count = useRecoilValue(countState); //use👉 "useRecoilValue" just for value becz we need👉 "{count}" not requ funt to perform operation. to show on page instead of 👉 "useSetRecoilState"
   
    // const isEven = useMemo(()=>{ // useMemo only run here when count value change i.e is main work of useMemo
      
    //   return count%2===0;  // this line only run when [count] dependency will changes

    // },[count]) // count is dependency

//            👉👉 Or by "Selector" 👇

    const isEven = useRecoilValue(EvenSelector);

    return (
      <>
        <Typography variant="h5" style={{display:'flex',justifyContent: 'center'}}>
            {
              isEven ? "Even" : null  // 7.2 video cohort 2.0
            }
        </Typography>
      </>
    )
}
export default CheckIsEven;

