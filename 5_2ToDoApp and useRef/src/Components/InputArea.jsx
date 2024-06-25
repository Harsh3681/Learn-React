import { useEffect, useState, useRef } from "react";
import mystyle from "./InputArea.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//  "useRef()"  <---- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
//  useRef mainly use for stoping the variable from "re-rending"
// current: Initially, it’s set to the initialValue you have passed


const PutInput = ({HandlingNewItem}) =>{
    
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const refTodoNameElement = useRef();
    const refTodoDateElement = useRef();
    
    const setForParent = (e) =>{
        e.preventDefault(); 
        const todoName = refTodoNameElement.current.value;
        const todoDate = refTodoDateElement.current.value;
        refTodoNameElement.current.value = "";
        refTodoDateElement.current.value = "";
        HandlingNewItem(todoName,todoDate)
        setButtonDisabled(true);
    }

    const checkButtonState = () => {    // useEffect and this funct for the "Button Disablity" purpose.
        const todoName = refTodoNameElement.current.value;
        const todoDate = refTodoDateElement.current.value;
        setButtonDisabled(!(todoName && todoDate));
    };

    useEffect(() => {
        const todoNameInput = refTodoNameElement.current;
        const todoDateInput = refTodoDateElement.current;

        todoNameInput.addEventListener('input', checkButtonState);
        todoDateInput.addEventListener('input', checkButtonState);

        return () => {
            todoNameInput.removeEventListener('input', checkButtonState);
            todoDateInput.removeEventListener('input', checkButtonState);
        };
    }, []);

    return(
        <>

            <form className="row g-5 mb-4 align-items-center"  onSubmit ={setForParent}>
                {/* <form className="row g-5 mb-4 align-items-center"> */}
                <div className="col-12 col-md">
                <input
                    type="text"
                    ref={refTodoNameElement}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Name"
                />
                </div>
                <div className="col-12 col-md">
                <input
                    type="date"
                    ref={refTodoDateElement}
                    className="form-control"
                    id="exampleFormControlInput2"
                />
                </div>
                <div className="col-12 col-md-auto">
                <button type="submit"  className={`btn btn-success ${isButtonDisabled ? 'disabled' : '' }`}  disabled={isButtonDisabled}> {/* disabled={isButtonDisabled} this code will prevent our code from auto submit data without click on submit directly click on "ENTER" button */}     
                    Submit
                </button>
                </div>
                {/* </form> */}
            </form>

        </>
    )
}
export default PutInput;