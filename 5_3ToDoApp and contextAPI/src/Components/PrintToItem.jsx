
import TodoList from "./TodoList"
import { TodoItemsByContext } from "../storeForContextAPI/todo_Item_store";
import { useContext } from "react";

const PrintToItem = ()=>{

    // here we try to use TodoItemsByContext with useContext

// const MyContextObj = useContext(TodoItemsByContext); // now there is an "link" create between "TodoItemsByContext" & "useContext" in store folder
// const myTodoItemsData = MyContextObj.TodoData;

    // instead of above line we can do "Obj destructuring" se below --> {TodoData}
    const {TodoData} = useContext(TodoItemsByContext);

    return(
        <>
            <div>
                {TodoData.map(item =>
                    <TodoList key={item.name} ItemName={item.name} SubmitedDate={item.DueDate} ></TodoList> // here in "TodoList" component we are removing "props" i.e HandleDelete and use useContext direct in that component see in "TodoList" component
                )}
            </div>
        </>
    )
}
export default PrintToItem;
