
import Mystyles from "./Container.module.css"
// see the notes "Container_Component"

let Container = (props) => {
    return(
        <div className={Mystyles.container}>
            {props.children}    
            {/* Here above we will access childrens means remaining "Components" places inside <Container> component by "props.children"  */}
        </div>
    )
}

export default Container;
