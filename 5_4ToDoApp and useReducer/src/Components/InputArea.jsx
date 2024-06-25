import { useEffect, useState, useRef,useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoItemsByContext } from "../storeForContextAPI/todo_Item_store";

const PutInput = () =>{

// const MyContextObj = useContext(TodoItemsByContext); // now there is an "link" create between "TodoItemsByContext" & "useContext" in store folder
// const myTodoItemsData = MyContextObj.TodoData;

    // instead of above line we can do "Obj destructuring" se below --> {TodoData}
    const {AddNewItem} = useContext(TodoItemsByContext);  // here use "useContext"
    
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const refTodoNameElement = useRef();
    const refTodoDateElement = useRef();
    
    const setForParent = (e) =>{
        e.preventDefault(); 
        const todoName = refTodoNameElement.current.value;
        const todoDate = refTodoDateElement.current.value;
        refTodoNameElement.current.value = "";
        refTodoDateElement.current.value = "";
        AddNewItem(todoName,todoDate) // here we use "{AddNewItem}"
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
                    placeholder="Enter ToDo Item"
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