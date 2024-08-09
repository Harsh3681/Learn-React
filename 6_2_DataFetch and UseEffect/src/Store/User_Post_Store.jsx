import { createContext, useEffect, useReducer, useState } from "react";


export const UserPostsByContext = createContext({
    PostList : [], 
    CreatePost : () => {},  
    fetching : false,
    DeletePost : () => {},
});  

const UserPostReducer = (currStateOfPost, action) =>{ 

    let newPostInfo = currStateOfPost;
  
    if(action.type === "CREATE_POST"){
  
      newPostInfo = [action.payload, ...currStateOfPost]; // [] <--bracket becz our initial state is "Empty Array"
      
    }
    else if(action.type === "CREATE_POST_By_Fetching_Data"){
      newPostInfo = action.payload.posts;
    }
    else if(action.type === "DELETE_POST"){
        newPostInfo = currStateOfPost.filter((item) => item.id !== action.payload.postId);
    }
    return newPostInfo;
}
  
// -----------------------------------------------------------

const SocialAppContextProvider = ({children}) =>{
  
  const [getPost, dispatchUserPost] = useReducer(UserPostReducer,[] );
  const [fetching, setFetching] = useState(false);    // this is for loadingUI
    
    const CreatePost = (posts) =>{
      const newItemAction = {       
        type : "CREATE_POST",  
        payload : posts
    };
    dispatchUserPost(newItemAction);
    }


    const CreatePostByFetchingData = (posts) =>{
      dispatchUserPost({       
        type : "CREATE_POST_By_Fetching_Data",  
        payload : {posts}
      });
    }
    

    const DeletePost = (postId) =>{
      const DeleteItemAction = {      
        type : "DELETE_POST",  
        payload : {
            postId : postId,
        }
      };
      dispatchUserPost(DeleteItemAction);
      // console.log(`PostId  ${postId}`);
    }

    // --------

    useEffect(()=>{
      setFetching(true)
      const myController = new AbortController();
      const mySignal = myController.signal;

      fetch('https://dummyjson.com/posts',{mySignal})
      .then(res => res.json())
      .then((data)=>{
          CreatePostByFetchingData(data.posts);
          setFetching(false);
          
      });
      return () =>{
          myController.abort();
      }
    },[])


    
    return(
      <>
        <UserPostsByContext.Provider value={{
          PostList : getPost, // here "getToDoData" is from --> const [getToDoData, dispatchToDOData] = useReducer(toDoItemReducer, []);
          CreatePost : CreatePost,
          fetching : fetching,
          DeletePost : DeletePost
        }}>
        {children}    {/* Here we render our children i.e form App.jsx file ele present in <MyTodoItemsContextProvider /> Component*/}
        </UserPostsByContext.Provider>
  
      </>
    )
}

const DEFAULT_POST = [
    {
    id:"1",
    userId : "user_1",
    postTitle:"Sunday",
    postDescription: "I enjoy sunday!!!!!!!",
    postTag : ["sunday","holiday"],
    postReactions : 6,
    },
    {
    id:"2",
    userId : "user_2",
    postTitle:"Working Day",
    postDescription: "Not enjoy sunday!!!!!!!",
    postTag : ["Work","NotHoliday", "Office"],
    postReactions : 26,
    },
]
  
export default SocialAppContextProvider;

// time stamp video 10:30








