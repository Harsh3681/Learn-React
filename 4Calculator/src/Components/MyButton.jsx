
import mystyle from "./MyButton.module.css"

const CalButton = ({getButtonClick}) =>{


    const ButtonArray = ["AC","DEL","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
    
    function getClassForButton(buttonValue) {

      switch (buttonValue) {
        case "AC":
        case "DEL":
        case "%":
        case "/":
          return `${mystyle.keyOthers} ${mystyle.operations}`;
        case "*":
        case "+":
        case "-":
        case "=":
          return `${mystyle.keyOperate} ${mystyle.operations}`;
        case "0":
          return `${mystyle.keyZero} ${mystyle.numbers}`;
        default:
          return `${mystyle.key} ${mystyle.numbers}`; 
      }
    }


   
      
    return(
        <>
            <div className={mystyle.calckeys} >
                {ButtonArray.map((meButton) => (
                    <button key={meButton}
                    type="button"
                    className={`${getClassForButton(meButton)}`}
                    onClick={()=>getButtonClick(meButton)}  // here we create "anonymus" method () =>{} in child component for "getButtonClick" funct of "App.js" parent Component
                    
                    >
                    {meButton}
                    </button>
                ))}
            </div>            

        </>
    )
}

export default CalButton;


