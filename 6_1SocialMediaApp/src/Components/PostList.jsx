import { useContext } from "react";
import UserPost from "./Posts";
import { UserPostsByContext } from "../Store/User_Post_Store";


const UserPostsList = () =>{
    const {PostList} = useContext(UserPostsByContext);
    return(
        <>
            {PostList.map(item => <UserPost key={item.id} item={item}/>)}
            

        </>
    )
}

export default UserPostsList;
