import { createContext, useReducer } from "react";


export const UserPostsByContext = createContext({
    PostList : [], 
    CreatePost : () => {},  
    CreatePostByFetchingData : () => {},
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
  
    const CreatePost = (userId, postTitle,postDescription,postTag,postReactions) =>{
      // userIdData,PostTitleData,PostDescriptionData,PostTagData,PostReactionData
      const newItemAction = {       
        type : "CREATE_POST",  
        payload : {
            id : Date.now(),
            // userId : userId,
            title : postTitle,
            body : postDescription,
            tags : postTag,
            reactions : postReactions,
        }
      };
      dispatchUserPost(newItemAction);
      // console.log(`PostId  ${userId}, ${postTitle}, ${postDescription}, ${postTag}, ${postReactions}`);
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
    
    return(
      <>
        <UserPostsByContext.Provider value={{
          PostList : getPost, // here "getToDoData" is from --> const [getToDoData, dispatchToDOData] = useReducer(toDoItemReducer, []);
          CreatePost : CreatePost,
          CreatePostByFetchingData:CreatePostByFetchingData,
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








