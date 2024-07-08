import { useEffect, useState } from "react";


const MyuseEffect = () =>{
    const [count, setCount] = useState(0);
    const [myColor, setmyColor] = useState("green");

// Please try All below ----------------------------------------------


    // useEffect(()=>{          // without dependency Array []
    //     document.title = `Count = ${count} = ${myColor}`
    // })
// ----------------------------------------------

    // useEffect(()=>{         // "With" dependency Array []
    //     document.title = `Count = ${count} = ${myColor}`
    // },[])
// ----------------------------------------------

    // useEffect(()=>{         // "With" dependency Array + value [count]
    //     document.title = `Count = ${count} = ${myColor}`
    // },[count])
// ----------------------------------------------

    useEffect(()=>{         // "With" dependency Array + value [count, myColor]
        document.title = `Count = ${count} = ${myColor}`
        console.log("count +  color")
    },[count,myColor])
// ----------------------------------------------

    function IncreaseCount(){
        setCount((count) => count+1);
    }

    function ChangeColor(){
        setmyColor((i) => i=== "green" ? "blue" : "green");
    }

    return (
        <>
            <div className="myEffect">
                <h1>I am useEffect</h1>
                <h1 style={{"color": myColor}}>Count - {count}</h1>
                <button onClick={IncreaseCount}>Increse</button>
                <button style={{"marginLeft": "5px"}} onClick={ChangeColor}>Change Color</button>
            </div>
        </>
    )

}

export default MyuseEffect;



