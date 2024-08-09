
import myStyle from "./MyInputSection.module.css"


const UserInput = ({inputValue}) =>{
    return(
        <>
            <div className={`${myStyle.calcText}`}>
                <p name="user-input" id="user-input" readOnly>{inputValue}</p>
            </div>
        </>
    )
}

export default UserInput;

