
import Mystyles from "./Greeting.module.css"  // here we import our "Modular css"


function Mygreeding(){
    let name = "Happy";
    
    let fullName = () =>{
        return "Happy Khandelwal !";
    }

    return (
        <>
            <hr /> <br />
            <h1 className={Mystyles.hello_Der}  >Hello From {name}</h1>
            <p className={Mystyles.jay_ho}>Jay ho !!</p>
            <pre className={Mystyles.namste}>Namaste From {fullName()}</pre>
            <hr />
        </>
    )
}

export default Mygreeding;