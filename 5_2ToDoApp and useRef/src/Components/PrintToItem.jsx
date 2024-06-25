
import TodoList from "./TodoList"

const PrintToItem = ({getToData,HandleDelete})=>{
    return(
        <>
            <div>
                {getToData.map(item =>
                    <TodoList key={item.name} ItemName={item.name} SubmitedDate={item.DueDate} HandleDelete={HandleDelete} ></TodoList>
                )}
            </div>
        </>
    )
}
export default PrintToItem;
