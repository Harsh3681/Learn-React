import { useContext, useEffect } from "react";
import UserPost from "./Posts";
import { UserPostsByContext } from "../Store/User_Post_Store";
import Message from "./Message";


const UserPostsList = () =>{
    const {PostList, CreatePostByFetchingData} = useContext(UserPostsByContext);
    const getPosts = ()=>{
        // console.log("posts ahe")
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{CreatePostByFetchingData(data.posts)});
    }
    
    return(
        <>
            {PostList.length===0 && ( <Message getPosts={getPosts} /> )}
            { PostList.map((item) => (<UserPost key={item.id} item={item}/>))}
        </>
    )
}

export default UserPostsList;
