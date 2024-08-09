import { useCallback, useState } from "react";
import MyList from "./2_MyList_Callback";

const MyuseCallback = () =>{

    const[count, setCount] = useState(1);
    const[currentTheme, setCurrentTheme] = useState(true);

    const changeTheme = {
        color : currentTheme ? "black" : "white",
        backgroundColor : currentTheme ? "white" : "black"
    }

    const increment = useCallback(()=>{
        return [count, Number(count)+1, Number(count)+2];
    },[count])

    return (
        <>
            <div className="myEffect mt-5" style={changeTheme}>
            <h1>I am useCallback</h1>
                <input type="number" value={count} onChange={(i)=>{setCount(i.target.value)}} />
                <br /><br />
                <button onClick={()=>setCurrentTheme(currentTheme => !currentTheme)}>Toggle Theme</button>
                <br /><br />
                <MyList increment={increment}></MyList>
            </div>
                
        </>
    )
}

export default MyuseCallback;
