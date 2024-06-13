
import Mystyles from "./Greeting.module.css"  // here we import our "Modular css"


export default function MyRandomNumber(){
    var num = Math.random()*100;
    return(
        <>
            <div style={{"backgroundColor":"yellow"}} >
                <h2 style={{'color' : "red"}} >Random number = {Math.round(num)}</h2>
            </div>
            <h1 className={Mystyles.jay_ho}>I am modular css</h1>
        
        </>
    )
}