import {selector } from "recoil";
import { countState, titleDescriptionState } from "../atoms/myAtom";

export const EvenSelector = selector({
    key : "EvenSelector",
    get : (props)=>{  // or ({get})
            const count = props.get(countState); // or get(countState); // select "countState" from "atom" store
            
            return count%2===0; // here count%2 is pure funct operation
        }
})


// ------------------------------------------------------------------------
// below for todo App

export const FilterTodo = selector({
    key : "FilterTodo",
    get : (props) =>{
            const todos = props.get(titleDescriptionState);
            // const title = todos.title;
            // const description = todos.description;
           
        }
})

