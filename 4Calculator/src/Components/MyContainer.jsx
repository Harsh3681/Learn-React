import { Children } from "react";

import mystyle from "./MyContainer.module.css"

const Container = (props) =>{
    return(
        <>
            <div className={`${mystyle.container}`}>
                {props.children} 
            </div>
        </>
    )
}

export default Container;