import { useEffect, useMemo, useState } from "react";


/* here nothing is problematic intially, Without "useEffect" && "useMemo"
    also all task perform properly.
    But on single value change i.e "count" or "MyTheme"--> "backgroundColor" & "color"
    it will re-render the entire "file"
"It reduce Performance of APP"

    So we have solution we "Memoized" our "DoubleNumber" function with dependency "count"

"we though in such case to increse performance we can use "useMemo" everywhere but "No" becz then it will consume our memory a lot"
*/

const MyuseMemo= () =>{

    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    function DoubleNumber(num){          // here "Wihout" useMemo funct
        return num*2;
    }

    const myNum = useMemo(() =>{        // here useMemo return "Memoized Value"
        return DoubleNumber(count);
    },[count])

    const MyTheme = useMemo(()=>{
        return{
            backgroundColor : dark ? "black" : "white",
            color : dark ? "white" : "black"
        }
    },[dark])

// const MyTheme = {
//     backgroundColor : dark ? "black" : "white",
//     color : dark ? "white" : "black"
// }
    
    useEffect(() =>{    // here it not only console.log on "changing theme", but also on "changing Num" that we don't need we need it. Now only "console.log" on "MyTheme" 👈 so we need to "memoized" the "MyTheme" funct with "dependency" "dark"
        console.log("Theme changed")
    },[MyTheme])
    
    return (
        <>
            <div className="myEffect mt-5" >
                <h1>I am useMemo</h1>
                <input type="number" value={count} onChange={i => {setCount(i.target.value)} } />
                <br/>
                <br/>
                <button onClick={()=> setDark(justTry => !justTry)}>Change theme</button>    {/* "justTry" do here it already "true" convert into "False" */}
                
                <div className="mythemeBox" style={MyTheme}>{myNum}</div>     With "useMemo"

{/* Without useMemo just Comment "myNum" funct and uncomment below 👇 */}
                <div className="mythemeBox" style={MyTheme}>{DoubleNumber(count)}</div>     without "useMemo"
            </div>
        </>
    )
}

export default MyuseMemo;






