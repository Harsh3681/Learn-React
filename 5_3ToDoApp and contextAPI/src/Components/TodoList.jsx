
import React, { useContext, useState } from 'react'
import mystyle from "./TodoList.module.css"
import { TodoItemsByContext } from '../storeForContextAPI/todo_Item_store';

export default function TodoList({ItemName, SubmitedDate}) {
    
    const {DeleteItem} = useContext(TodoItemsByContext);

    const [isDone, setIsDone] = useState(false);
    const [UnDone, setUnDone] = useState(true);

    const CheckDoneUnDone = () =>{
        setUnDone(!UnDone);
        setIsDone(!isDone)
    }

    const EraseNow = () => {
        setIsDone(true);
        CheckDoneUnDone();
    };


    return (
    <>
        <div className="row g-5 mb-4 align-items-center">
            <div className="col-12 col-md">
                <h4 className={isDone ? mystyle.myErase : ''}>{ItemName}</h4>
            </div>
            <div className="col-12 col-md">
                <h4 className={isDone ? mystyle.myErase : ''}>{SubmitedDate}</h4>
            </div>
            <div className="col-12 col-md-auto">
                <button type="submit" className="btn btn-dark" onClick={EraseNow}>      
                    {UnDone ? "Done" : "UnDone"}
                </button> 
            </div>
            <div className="col-12 col-md-auto">
                <button type="submit" className="btn btn-danger" onClick={()=> DeleteItem(ItemName)}>  {/* Here we create anonymous method and "HandleDelete(ItemName)" and pass "ItemName" as input to it becz in App.js parent component "HandleDelete" funct needed "I/P" in method */}    
                    Delete
                </button> 
            </div>
        </div>


    </>
  )
}
