import { useContext} from "react";
import UserPost from "./Posts";
import Message from "./Message";
import Loading from "./LoadingUI";
import { UserPostsByContext } from "../Store/User_Post_Store";


const UserPostsList = () =>{
    const {PostList,fetching} = useContext(UserPostsByContext);
   
    return(
        <>  
            
            {fetching && <Loading />}
            {!fetching && PostList.length===0 && ( <Message/> )}
            <div className="row" style={{"marginLeft": "12rem","marginRight": "3rem"}}>{!fetching && PostList.map((item) => (<UserPost key={item.id} item={item}/>))}</div>
            
        </>
    )
}

export default UserPostsList;
