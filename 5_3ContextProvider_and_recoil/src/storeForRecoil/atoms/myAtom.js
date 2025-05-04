
import {atom} from "recoil";

// const [count, setCount] = useState(0); 👇 below also same---> 👉 setCount = countState  && useState() = atom()

export const countState = atom({    // "countState" is an 👉 funct
    key: 'countState',          // unique ID 
    default: 0,                 // default value 
});


// ------------------------------------------------------------------------
// below for todo App

export const titleDescriptionState = atom({
    key : "titleDescriptionState",
    default : {
        title : "",
        description : {}
    }
})
