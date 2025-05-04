import { createContext } from "react";


// export const TodoItemsByContext = createContext([]); //<--- we can declered it like this also or as below 👇

export const TodoItemsByContext = createContext({
    TodoData : [], // becz it "TodoData" is "Array"
    AddNewItem : () => {},  // becz "AddNewItem" is one method hence pass "empty" method same below 👇
    DeleteItem : () => {},
});     // "TodoItems" we use at multiple place as component hence decleraed it in Camel case








