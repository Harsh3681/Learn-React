import { Typography } from "@mui/material";
import { countState } from "../storeForRecoil/atoms/myAtom";
import { useRecoilValue } from "recoil";

const CountComponent = () =>{
  const count = useRecoilValue(countState); //use👉 "useRecoilValue" just for value becz we need👉 "{count}" not requ funt to perform operation. to show on page instead of 👉 "useSetRecoilState"
    return (
      <>
        <Typography variant="h5" style={{display:'flex',justifyContent: 'center'}}>
            {count}
        </Typography>
      </>
    )
}

export default CountComponent;

