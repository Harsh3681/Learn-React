
import Mystyles from "./Greeting.module.css"  // here we import our "Modular css"


function Mygreeding(){
    let name = "Happy";
    
    let fullName = () =>{
        return "Happy Khandelwal !";
    }

    var yes = true; // boolean

    return (
        <>
            <hr /> <br />
            <h1 className={Mystyles.hello_Der}  >Hello From {name}</h1>
            <p className={Mystyles.jay_ho}>Jay ho !!</p>
            <pre className={Mystyles.namste}>Namaste From {fullName()}</pre>
            <hr />

{/* Other way to add Modular Css */}

            <hr /> <br />
            <h1 className={`${Mystyles.hello_Der} `}  >I am Modular Css</h1>
            <p className={`${Mystyles.jay_ho}`}>Kese Ho !!</p>
            <pre className={`${Mystyles.namste}`}>Gretting From {fullName()}</pre>
            <hr />
        </>
    )
}

export default Mygreeding;